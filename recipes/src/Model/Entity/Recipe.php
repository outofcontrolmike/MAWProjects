<?php
//src/Model/Entity/Recipe

namespace App\Model\Entity;

use Cake\ORM\Entity;

class Recipe extends Entity {
    protected $_accessible = [
        '*' => true,
        'id' => false,
        'slug' => false,
    ];
}