<?php 
//src/Model/Table/UsersTable
namespace App\Model\Table;
use Cake\ORM\Table;

class UsersTable extends Table
{
    public function initialize(array $config) : void
    {
        $this->addBehavior('Timestamp');
    }
}//end class
?>