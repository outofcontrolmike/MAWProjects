<?php
declare(strict_types=1);

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Recipes Model
 *
 * @method \App\Model\Entity\Recipe newEmptyEntity()
 * @method \App\Model\Entity\Recipe newEntity(array $data, array $options = [])
 * @method \App\Model\Entity\Recipe[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Recipe get($primaryKey, $options = [])
 * @method \App\Model\Entity\Recipe findOrCreate($search, ?callable $callback = null, $options = [])
 * @method \App\Model\Entity\Recipe patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Recipe[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method \App\Model\Entity\Recipe|false save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Recipe saveOrFail(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Recipe[]|\Cake\Datasource\ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Recipe[]|\Cake\Datasource\ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method \App\Model\Entity\Recipe[]|\Cake\Datasource\ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method \App\Model\Entity\Recipe[]|\Cake\Datasource\ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class RecipesTable extends Table
{
    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */

     
    public function initialize(array $config): void
    {
        parent::initialize($config);

        $this->setTable('recipes');
        $this->setDisplayField('title');
        $this->setPrimaryKey('id');

        $this->addBehavior('Timestamp');
        $this->belongsToMany('Tags', [
            'joinTable' => 'recipes_tags',
            'dependent' => true
        ]);

        $this->belongsTo('Users', [
            'foreignKey' => 'user_id',
            'joinType' => 'INNER',
        ]);
        $this->belongsToMany('Tags', [
            'foreignKey' => 'recipe_id',
            'targetForeignKey' => 'tag_id',
            'joinTable' => 'recipes_tags',
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator): Validator
    {
        $validator
            ->integer('id')
            ->allowEmptyString('id', null, 'create');

        $validator
            ->boolean('private_view')
            ->allowEmptyString('private_view');

        $validator
            ->scalar('title')
            ->maxLength('title', 255)
            ->requirePresence('title', 'create')
            ->notEmptyString('title');

        $validator
            ->scalar('slug')
            ->maxLength('slug', 191)
            ->requirePresence('slug', 'create')
            ->notEmptyString('slug')
            ->add('slug', 'unique', ['rule' => 'validateUnique', 'provider' => 'table']);

        $validator
            ->scalar('description')
            ->requirePresence('description', 'create')
            ->notEmptyString('description');

        $validator
            ->scalar('ingredients')
            ->maxLength('ingredients', 500)
            ->allowEmptyString('ingredients');

        $validator
            ->scalar('prep_time')
            ->maxLength('prep_time', 20)
            ->allowEmptyString('prep_time');

        $validator
            ->scalar('cook_time')
            ->maxLength('cook_time', 20)
            ->allowEmptyString('cook_time');

        $validator
            ->integer('servings')
            ->allowEmptyString('servings');

        $validator
            ->scalar('directions')
            ->maxLength('directions', 255)
            ->allowEmptyString('directions');

        $validator
            ->scalar('photo_paths')
            ->maxLength('photo_paths', 255)
            ->allowEmptyString('photo_paths');

        $validator
            ->boolean('published')
            ->allowEmptyString('published');

        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules): RulesChecker
    {
        $rules->add($rules->isUnique(['slug']), ['errorField' => 'slug']);
        $rules->add($rules->existsIn('user_id', 'Users'), ['errorField' => 'user_id']);

        return $rules;
    }

    public function findTagged(Query $query, array $options)
    {
        $columns= [
            'Recipes.id', 'Recipes.user_id', "Recipes.title",
            'Recipes.description', 'Recipes.ingredients', 'Recipes.prep_time', 'Recipes.cook_time', 'Recipes.servings', 'Recipes.directions',
             'Recipes.published', 'Recipes.created',
            'Recipes.slug',
        ];

        $query = $query
        ->select($columns)
        ->distinct($columns);

        if(empty($options['tags'])) {
            //If no tags, find recipes with no tags.
            $query->leftJoinWith('Tags')
            ->where(['Tags.title IS' => null]);
        }
        else {
            //Find recipes with one or more tags
            $query->innerJoinWith('Tags')
            ->where(['Tags.title IN' =>$options['tags']]);
        }

        return $query->group(['Recipes.id']);
    }

//     public function beforeSave(EventInterface $event, $entity, $options)
// {
//     if ($entity->tag_string) {
//         $entity->tags = $this->_buildTags($entity->tag_string);
//     }

//     // Other code
// }

// protected function _buildTags($tagString)
// {
//     // Trim tags
//     $newTags = array_map('trim', explode(',', $tagString));
//     // Remove all empty tags
//     $newTags = array_filter($newTags);
//     // Reduce duplicated tags
//     $newTags = array_unique($newTags);

//     $out = [];
//     $tags = $this->Tags->find()
//         ->where(['Tags.title IN' => $newTags])
//         ->all();

//     // Remove existing tags from the list of new tags.
//     foreach ($tags->extract('title') as $existing) {
//         $index = array_search($existing, $newTags);
//         if ($index !== false) {
//             unset($newTags[$index]);
//         }
//     }
//     // Add existing tags.
//     foreach ($tags as $tag) {
//         $out[] = $tag;
//     }
//     // Add new tags.
//     foreach ($newTags as $tag) {
//         $out[] = $this->Tags->newEntity(['title' => $tag]);
//     }
//     return $out;
// }

}
