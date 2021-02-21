<?php 
use Cake\ORM\Table;

class UsersTable extends Table {

    //automatically adds a time stamp column to records
    public function initialize (array $config){
        $this->addbehavior('Timestamp');
    }
}

?>