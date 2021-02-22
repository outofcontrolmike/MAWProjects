<?php 

//src/Controller/Users Controller

namespace App\Controller;

class usersController extends AppController {
public function index()
{
        $this->loadComponent('Paginator');
        $users = $this->Paginator->paginate($this->Users->find());
        $this->set(compact('users'));
}
}