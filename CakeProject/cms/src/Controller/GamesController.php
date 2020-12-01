<?php
namespace App\Controller;

use App\Controller\AppController;

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

        //This loads a list of tags from the database table and sets variables to use in views
        // Get a list of tags.
        $tags = $this->Games->Tags->find('list')->all();

        // Set tags to the view context
        $this->set('tags', $tags);

        $this->set('game', $game);
    }//end add

    public function edit($slug)
    {
        $game = $this->Games
        ->findBySlug($slug)
        ->contain('Tags')
        ->firstOrFail();

    if ($this->request->is(['post', 'put'])) {
        $this->Games->patchEntity($game, $this->request->getData());
        if ($this->Games->save($game)) {
            $this->Flash->success(__('Your game has been updated.'));
            return $this->redirect(['action' => 'index']);
        }
        $this->Flash->error(__('Unable to update your game  :('));
    }

    // Get a list of tags.
    $tags = $this->Games->Tags->find('list')->all();

    // Set tags to the view context
    $this->set('tags', $tags);

    $this->set('game', $game);
    }

    //Delete
    public function delete($slug)
    {
        $this->request->allowMethod(['post', 'delete']);

    $game = $this->Games->findBySlug($slug)->firstOrFail();
    if ($this->Games->delete($game)) {
        $this->Flash->success(__('The {0} game has been deleted.', $game->title));
        return $this->redirect(['action' => 'index']);
    }
    }

    //tags
    public function tags()
    {
        // The 'pass' key is provided by CakePHP and contains all
        // the passed URL path segments in the request.
        $tags = $this->request->getParam('pass');
    
        // Use the ArticlesTable to find tagged articles.
        $games = $this->Games->find('tagged', [
                'tags' => $tags
            ])
            ->all();
    
        // Pass variables into the view template context.
        $this->set([
            'games' => $games,
            'tags' => $tags
        ]);
    }
}
?>