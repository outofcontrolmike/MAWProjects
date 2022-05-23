<?php

/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link      https://cakephp.org CakePHP(tm) Project
 * @since     0.10.0
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 * @var \App\View\AppView $this
 */

?>
<!DOCTYPE html>
<html>

<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        Recipes Project
    </title>
    <?= $this->Html->meta('icon') ?>

    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet">

    <?= $this->Html->css(['home']) ?>

    <!-- You MUST include jQuery before Fomantic -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.css">
    <script src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.js"></script>
</head>

<body class="ui">
    <?php include "templates\layout\header.php" ?>
    <div class="ui vertical masthead center aligned fluid container" id="landingPage">
        <div class="ui container fluid">
            <div class="ui container fluid" id="homeRecipeSearch">
                <div class="ui text">
                    <div class="ui action input medium" style="width:600px;">
                        <input type="test" name="test" id="recipeTagKeyword" value="" placeholder="Try Searching for your favorite recipe by keyword...">
                        <div class="ui button teal" onclick="submitKeyword()"><i class="utensils icon large black"></i></div>
                    </div>
                </div>
            </div>
            <br>
            <!-- End first div -->
            <!-- Start 2nd section -->
            <div class="ui two column container stackable grid" id="homeContent2">
                <div class="ui column center aligned">
                    <span class="ui text big">Check out user created Recipes!</span>

                </div>
                <div class="ui column center aligned">
                    <div class="ui image fluid huge" href="<?= $this->Url->build('/') ?>"> <?php echo $this->Html->image('recipes_collection.PNG', array('alt' => 'recipes_Showcase', 'border' => '0', 'data-src' => 'holder.js/100%x25')); ?>
                    </div>
                    <div style="margin-top:2rem">
                        <?= $this->Html->link(__('View Recipes'), ['controller' => "Recipes", 'action' => 'index'], ['class' => 'ui button teal big centered circular', 'id' => "landingPageButton"]) ?>
                    </div>
                </div>
            </div>

            <div class="ui container fluid">
                <div class="ui divider">

                </div>
                <div class="ui two column container stackable grid vertical aligned" id="homeContent3">
                    <div class="ui column center aligned">
                        <div class="ui image fluid huge" href="<?= $this->Url->build('/') ?>"> <?php echo $this->Html->image('user_profile.PNG', array('alt' => 'user_profile', 'border' => '0', 'data-src' => 'holder.js/100%x25')); ?>
                        </div>
                        <div style="margin-top: 2rem">
                            <?= $this->Html->link(__('Sign up for a profile!'), ['controller' => "Users", 'action' => 'add'], ['class' => 'ui button big teal circular', 'id' => "landingPageButton"]) ?>
                        </div>
                    </div>
                    <div class="ui column center aligned">
                        <span class="ui text big">Unique User Profile</span>
                        <ul>
                            <li>View Recipes you created</li>
                            <li>Edit Your own recipes</li>
                            <li>Sell yourself with you want</li>
                            <li>Not overly complicated</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- End second section -->
            <div class="ui container fluid">

                <div class="ui divider">

                </div>
                <div class="ui two column container stackable grid vertical aligned" id="homeContent3">
                    <div class="ui column">
                        <span class="ui text big">Create Recipes and Manage Them</span>
                        <ul>
                            <li>Add Recipes</li>
                            <li>Choose tags if you want</li>
                            <li>Upload photos</li>
                            <li></li>
                        </ul>
                    </div>
                    <div class="ui column center aligned">
                        <div class="ui image fluid huge" href="<?= $this->Url->build('/') ?>"> <?php echo $this->Html->image('create_Recipe.PNG', array('alt' => 'user_profile', 'border' => '0', 'data-src' => 'holder.js/100%x25')); ?>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End third section -->

            <div class="ui container fluid">
                <div class="ui divider">

                </div>
                <div class="ui two column container stackable grid vertical aligned" id="homeContent3">
                    <div class="ui column center aligned">
                        <div class="ui image fluid huge" href="<?= $this->Url->build('/') ?>"> <?php echo $this->Html->image('recipeTags.PNG', array('alt' => 'user_profile', 'border' => '0', 'data-src' => 'holder.js/100%x25')); ?>
                        </div>
                    </div>
                    <div class="ui column">
                        <span class="ui text big">Utilize Tags</span>
                        <ul>
                            <li>Create Tags for recipes</li>
                            <li>Use already created tags</li>
                            <li>Easily view already created tags</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- End Fourth-->
            <!-- End sections -->
        </div>
    </div>
</body>
<script>
    //Will search for whatever user entered
    function submitKeyword() {
        let keyword = document.getElementById('recipeTagKeyword');
        if (keyword.value != "") {
            window.location.assign("http://localhost:8765/recipes/tagged/" + keyword.value);
        }
    }
</script>

</html>