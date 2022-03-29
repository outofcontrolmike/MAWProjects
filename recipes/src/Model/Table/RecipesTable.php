<?php
// src/Model/Table/RecipesTable.php
namespace App\Model\Table;

use Cake\ORM\Table;
use Cake\Utility\Text;
use Cake\Event\EventInterface;
use Cake\Validation\Validator;

use Cake\ORM\Query;



class RecipesTable extends Table
{
    public function initialize(array $config): void
    {
        $this->addBehavior('Timestamp');
        $this->belongsToMany('Tags', [
            'joinTable' => 'recipes_tags',
            'dependent' => true
        ]);
    }

    public function beforeSave(EventInterface $event, $entity, $options)
{
    if ($entity->tag_string) {
        $entity->tags = $this->_buildTags($entity->tag_string);
    }

    if ($entity->isNew() && !$entity->slug) {
        $sluggedTitle = Text::slug($entity->title);
        // trim slug to maximum length defined in schema
        $entity->slug = substr($sluggedTitle, 0, 191);
    }
}

public function validationDefault(Validator $validator): Validator
{
    $validator
        ->notEmptyString('title')
        ->minLength('title', 3)
        ->maxLength('title', 255)

        ->notEmptyString('body')
        ->minLength('body', 10)
        ->notEmpty('prep_time')
        ->notEmpty('cook_time')
        ->notEmpty('servings')
        ->notEmptyString('ingredients')
        ->notEmptyString('directions')
        ;

    return $validator;
}

// The $query argument is a query builder instance.
// The $options array will contain the 'tags' option we passed
// to find('tagged') in our controller action.
public function findTagged(Query $query, array $options)
{
    $columns = [
        'Recipes.id', 'Recipes.user_id', 'Recipes.title',
        'Recipes.body', 'Recipes.created',
        'Recipes.slug',
    ];

    $query = $query
        ->select($columns)
        ->distinct($columns);

    if (empty($options['tags'])) {
        // If there are no tags provided, find Recipes that have no tags.
        $query->leftJoinWith('Tags')
            ->where(['Tags.title IS' => null]);
    } else {
        // Find Recipes that have one or more of the provided tags.
        $query->innerJoinWith('Tags')
            ->where(['Tags.title IN' => $options['tags']]);
    }

    return $query->group(['Recipes.id']);
}

protected function _buildTags($tagString)
{
    // Trim tags
    $newTags = array_map('trim', explode(',', $tagString));
    // Remove all empty tags
    $newTags = array_filter($newTags);
    // Reduce duplicated tags
    $newTags = array_unique($newTags);

    $out = [];
    $tags = $this->Tags->find()
        ->where(['Tags.title IN' => $newTags])
        ->all();

    // Remove existing tags from the list of new tags.
    foreach ($tags->extract('title') as $existing) {
        $index = array_search($existing, $newTags);
        if ($index !== false) {
            unset($newTags[$index]);
        }
    }
    // Add existing tags.
    foreach ($tags as $tag) {
        $out[] = $tag;
    }
    // Add new tags.
    foreach ($newTags as $tag) {
        $out[] = $this->Tags->newEntity(['title' => $tag]);
    }
    return $out;
}
}