<?php

//RecipesTable
namespace APP\Model\Table;

use Cake\ORM\Table;

class RecipesTable extends Table {
    public function initialize(array $config): void {
        $this->addBehavior('Timestamp');
    }
}