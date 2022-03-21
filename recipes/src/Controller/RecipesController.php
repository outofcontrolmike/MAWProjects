<?php
// src/Controller/RecipesController.php

namespace App\Controller;

class RecipesController extends AppController
{

    public function initialize(): void
    {
        parent::initialize();

        $this->loadComponent('Paginator');
        $this->loadComponent('Flash'); // Include the FlashComponent
    }


     public function index()
    {
        $recipes = $this->Paginator->paginate($this->Recipes->find());
        $this->set(compact('recipes'));
    }

    public function view($slug = null)
{
    $recipe = $this->Recipes->findBySlug($slug)->contain('Tags')->firstOrFail();
    $this->set(compact('recipe'));
}

public function add()
{
    $recipe = $this->Recipes->newEmptyEntity();
    if ($this->request->is('post')) {
        $recipe = $this->Recipes->patchEntity($recipe, $this->request->getData());

        // Hardcoding the user_id is temporary, and will be removed later
        // when we build authentication out.
        $recipe->user_id = 1;

        if ($this->Recipes->save($recipe)) {
            $this->Flash->success(__('Your recipe has been saved.'));
            return $this->redirect(['action' => 'index']);
        }
        $this->Flash->error(__('Unable to add your recipe.'));
    }
    //list of tags
    $tags = $this->Recipes->Tags->find('list')->all();

    //set tags to view context
    $this->set('tags', $tags);

    $this->set('recipe', $recipe);
}


public function edit($slug)
{
    $recipe = $this->Recipes
        ->findBySlug($slug)
        ->contain('Tags')
        ->firstOrFail();

    if ($this->request->is(['post', 'put'])) {
        $this->Recipes->patchEntity($recipe, $this->request->getData());
        if ($this->Recipes->save($recipe)) {
            $this->Flash->success(__('Your recipe has been updated.'));
            return $this->redirect(['action' => 'index']);
        }
        $this->Flash->error(__('Unable to update your recipe bro.'));
    }
        //list of tags
        $tags = $this->Recipes->Tags->find('list')->all();

        //set tags to view context
        $this->set('tags', $tags);

    $this->set('recipe', $recipe);
}

public function delete($slug)
{
    $this->request->allowMethod(['post', 'delete']);

    $recipe = $this->Recipes->findBySlug($slug)->firstOrFail();
    if ($this->Recipes->delete($recipe)) {
        $this->Flash->success(__('The {0} article has been deleted.', $recipe->title));
        return $this->redirect(['action' => 'index']);
    }
}

public function tags()
{
    // The 'pass' key is provided by CakePHP and contains all
    // the passed URL path segments in the request.
    $tags = $this->request->getParam('pass');

    // Use the RecipesTable to find tagged articles.
    $recipes = $this->Recipes->find('tagged', [
            'tags' => $tags
        ])
        ->all();

    // Pass variables into the view template context.
    $this->set([
        'recipes' => $recipes,
        'tags' => $tags
    ]);
}

}//End file