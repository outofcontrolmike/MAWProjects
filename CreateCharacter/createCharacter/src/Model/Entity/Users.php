<?php
//Entity's represent single records
use Cake\ORM\Entity;

class Users extends Entity {
    
    //protected accessible variable that holds an array of fields
    protected $_accessible =  [
        '*' => true,
        'id' => true
    ];
}
?>