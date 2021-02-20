<?php 
    ///src/Model/Entity/Characters.php

    use Cake\ORM\Entity;

    class Character extends Entity
    {
        protected $_accessible = [
            '*' => true,
            'id'=> false,
        ];
    }
?>