<?php
namespace App\Controller;

class GamesController extends AppController
{
    public function initialize(): void
    {
        parent::initialize();

        $this->loadComponent('Paginator');
        $this->loadComponent('Flash'); // Include the FlashComponent
    }

    public function index()
    {
        $games = $this->Paginator->paginate($this->Games->find());
        $this->set(compact('games'));
    }

    public function view($slug)
    {
        $game = $this->Games->findBySlug($slug)->firstOrFail();
        $this->set(compact('game'));
    }

    public function add()
    {
        $game = $this->Games->newEmptyEntity();
        if ($this->request->is('post')) {
            $game = $this->Games->patchEntity($game, $this->request->getData());

            // Hardcoding the user_id is temporary, and will be removed later
            // when we build authentication out.
            $game->user_id = 1;

            if ($this->Games->save($game)) {
                $this->Flash->success(__('Your game has been saved.'));
                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('Unable to add your game.'));
        }
        $this->set('game', $game);
    }

    public function edit($slug)
    {
        $game = $this->Games
        ->findBySlug($slug)
        ->firstOrFail();

    if ($this->request->is(['post', 'put'])) {
        $this->Games->patchEntity($game, $this->request->getData());
        if ($this->Games->save($game)) {
            $this->Flash->success(__('Your game has been updated.'));
            return $this->redirect(['action' => 'index']);
        }
        $this->Flash->error(__('Unable to update your game  :('));
    }

    $this->set('game', $game);
    }
}
?>