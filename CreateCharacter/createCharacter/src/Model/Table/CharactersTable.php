<?php 
//src/Model/Table/CharactersTable
namespace App\Model\Table;
use Cake\ORM\Table;

class CharactersTable extends Table
{
    public function initialize(array $config) : void
    {
        $this->addBehavior('Timestamp');
    }
}//end class
?>