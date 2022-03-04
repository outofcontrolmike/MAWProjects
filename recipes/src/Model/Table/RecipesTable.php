<?php

//RecipesTable
namespace APP\Model\Table;
use Cake\ORM\Table;
use Cake\Validation\Validator;
// the Text class
use Cake\Utility\Text;
// the EventInterface class
use Cake\Event\EventInterface;

class RecipesTable extends Table {
 
public function beforeSave(EventInterface $event, $entity, $options)
{
    if ($entity->isNew() && !$entity->slug) {
        $sluggedTitle = Text::slug($entity->title);
        // trim slug to maximum length defined in schema
        $entity->slug = substr($sluggedTitle, 0, 191);
    }
}
    public function initialize(array $config): void {
        $this->addBehavior('Timestamp');
    }

    // Add the following method.
public function validationDefault(Validator $validator): Validator
{
    $validator
        ->notEmptyString('title')
        ->minLength('title', 10)
        ->maxLength('title', 255)

        ->notEmptyString('description')
        ->minLength('description', 10);

    return $validator;
}
}