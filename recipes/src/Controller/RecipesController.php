<?php
// src/Controller/ArticlesController.php

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
}