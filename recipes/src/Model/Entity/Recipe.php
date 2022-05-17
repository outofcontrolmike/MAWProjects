<?php
// src/Model/Entity/Recipe.php
namespace App\Model\Entity;

use Cake\ORM\Entity;
use Cake\Collection\Collection;


class Recipe extends Entity
{
    protected $_accessible = [
        '*' => true,
        'id' => false,
        'slug' => false,
        'tag_string' => true,
        'ingredients' => true,
        'directions' => true,
        'image' => true,

    ];

    protected function _getTagString()
    {
        if (isset($this->_fields['tag_string'])) {
            return $this->_fields['tag_string'];
        }
        if (empty($this->tags)) {
            return '';
        }
        $tags = new Collection($this->tags);
        $str = $tags->reduce(function ($string, $tag) {
            return $string . $tag->title . ', ';
        }, '');
        return trim($str, ', ');
    }
}
