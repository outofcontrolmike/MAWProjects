<?php 

//src/Controller/charactersController

namespace App\Controller;

class CharactersController extends AppController {

    //View
    public function index()
    {
        $this->loadComponent('Paginator');
        $characters = $this->Paginator->paginate($this->Characters->find());
        $this->set(compact('characters'));
    }

}