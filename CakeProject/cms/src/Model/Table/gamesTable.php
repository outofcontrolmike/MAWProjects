<?php 
namespace App\Model\Table;

use Cake\ORM\Table;

class GamesTable extends Table
{
    public function intialize(array $config): void
    {
        $this->addBehavior('Timestamp');
    }
}


?>