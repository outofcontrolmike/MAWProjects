<?php
// src/Controller/RecipesController.php

namespace App\Controller;

class recipesController extends AppController
{
    public function index()
    {
        $this->loadComponent('Paginator');
        $recipes = $this->Paginator->paginate($this->Recipes->find());
        $this->set(compact('recipes'));
    }

    public function view($slug = null)
    {
        $recipe = $this->Recipes->findBySlug($slug) -> firstOrFail();
        $this->set(compact('recipe'));
    }

    public function add() 
    {
        $recipe = $this->Recipes->newEmptyEntity();
        if($this->request->is('post')) {
            $recipe = $this->Recipes->patchEntity($recipe, $this->request->getData());

              // Hardcoding the user_id is temporary, and will be removed later
            // when we build authentication out.
            $recipe->user_id = 1;
            if($this->Recipes->save($recipe)) {
                $this->Flash->success(__("Your Recipe has been saved.!"));
                return $this->redirect(['action' => 'index']);
            }
            $this->set('recipe', recipe);
        }
    }

    // in src/Controller/ArticlesController.php

// Add the following method.

public function edit($slug)
{
    $recipe = $this->Recipes
        ->findBySlug($slug)
        ->firstOrFail();

    if ($this->request->is(['post', 'put'])) {
        $this->Recipes->patchEntity($recipe, $this->request->getData());
        if ($this->Recipes->save($recipe)) {
            $this->Flash->success(__('Your Recipe has been updated.'));
            return $this->redirect(['action' => 'index']);
        }
        $this->Flash->error(__('Unable to update your recipe.'));
    }

    $this->set('recipe', $recipe);
}

public function delete($slug) 
{
    $this->request->allowMethod(['post', 'delete']);
    
    $recipe = $this->Recipes->findBySlug($slug)->firstOrFail();
    if($this->Recipes->delete($recipe)) {
        $this->Flash->success(__("The {0} recipe has been deleted", $recipe->title));
        return $this->redirect(['action' => "index"]);
    }
}
}