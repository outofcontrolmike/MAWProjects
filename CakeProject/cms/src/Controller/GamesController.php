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
        $this->Authorization->skipAuthorization();
        $this->set(compact('games'));
    }

    public function view($slug)
    {
        $game = $this->Games
        ->findBySlug($slug)
        ->contain('Tags')
        ->firstOrFail();
        $this->Authorization->skipAuthorization();
        $this->set(compact('game'));
    }

    public function add()
    {
        $game = $this->Games->newEmptyEntity();
        $this->Authorization->authorize($game);
        if ($this->request->is('post')) {
            $game = $this->Games->patchEntity($game, $this->request->getData());

            //changed: set the user-id from the current user
            $game->user_id = $this->request->getAttribute('identity')->getIdentifier();

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
        ->contain('Tags') // load associated Tags
        ->firstOrFail();
    $this->Authorization->authorize($game);

    if ($this->request->is(['post', 'put'])) {
        $this->Games->patchEntity($games, $this->request->getData(), [
            // Added: Disable modification of user_id.
            'accessibleFields' => ['user_id' => false]
        ]);
        if ($this->Games->save($game)) {
            $this->Flash->success(__('Your game has been updated.'));
            return $this->redirect(['action' => 'index']);
        }
        $this->Flash->error(__('Unable to update your game.'));
    }
    $tags = $this->Games->Tags->find('list')->all();
    $this->set(compact('game', 'tags'));
    }

    //Delete
    public function delete($slug)
    {
        $this->request->allowMethod(['post', 'delete']);

    $game = $this->Games->findBySlug($slug)->firstOrFail();
    $this->Authorization->authorize($game);
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
        $this->Authorization->skipAuthorization();
    
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