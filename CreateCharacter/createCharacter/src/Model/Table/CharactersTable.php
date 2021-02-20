<?php 
//src/Model/Table/CharactersTable
use Cake\ORM\Table;

class CharactersTable extends Table
{
    public function initialize (array $config)
    {
        $this->addBehavior('Timestamp');
    }
}//end class
?>