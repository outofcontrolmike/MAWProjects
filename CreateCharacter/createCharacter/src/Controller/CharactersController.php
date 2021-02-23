<?php 

//src/Controller/charactersController

namespace App\Controller;
use App\Controller\AppController;

class CharactersController extends AppController {

    //intialize components
    public function initialize(): void
    {
        parent::initialize();

        $this->loadComponent('Paginator');
        $this->loadComponent('Flash'); // Include the FlashComponent
    }

    //View
    public function index()
    {
        $characters = $this->Paginator->paginate($this->Characters->find());
        $this->set(compact('characters'));
    }

    public function view($slug){
        $character = $this->Characters->findBySlug($slug)->firstOrFail();
        $this->set(compact('character'));
    }

    public function create() {
    {
        $char = $this->Characters->newEmptyEntity();
        if ($this->request->is('post')) {
            $char = $this->Characters->patchEntity($char, $this->request->getData());

            // Hardcoding the user_id is temporary, and will be removed later
            // when we build authentication out.
            $char->user_id = 1;

            if ($this->Characters->save($char)) {
                $this->Flash->success(__('Your character has been saved.'));
                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('Unable to add your character.'));
        }
        $this->set('character', $char);
    }

    }

    public function delete() {

    }

}