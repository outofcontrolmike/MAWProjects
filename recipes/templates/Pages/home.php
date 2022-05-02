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
    <div class="ui vertical masthead center aligned fluid container">
        <div class="ui container fluid">
            <div class="ui container fluid" id="homeRecipeSearch">
                <div class="ui text"">
                <span class="ui text huge">Recipe Keyword Search</span>
                    <h2>Try searching our user created recipes right now</h2>
                    <div class="ui action input">
                        <input type="test" name="test" id="recipeTagKeyword" value="" placeholder="...Type a keyword into here">
                        <div class="ui button" onclick="submitKeyword()">Go</div>
                    </div>
                </div>
            </div>
            <br>
            <!-- End first div -->
            <!-- Start 2nd section -->
            <div class="ui two column container stackable grid" id="homeContent2" style="margin-bottom: 2rem;">
                <div class="ui column">
                    <span class="ui text big">Public Recipes</span>
                    <p>Take a chance to check out neat recipes that our users have created.</p>
                </div>
                <div class="ui column center aligned">
                    <div>
                        <?= $this->Html->link(__('View Recipes'), ['controller' => "Recipes", 'action' => 'index'], ['class' => 'ui button blue big centered']) ?>
                    </div>
                </div>
            </div>

            <!-- End second section -->
            <div class="ui container fluid">
                <hr>
            <div class="ui two column container stackable grid vertical aligned" id="homeContent3">
            <div class="ui column">
                    <span class="ui text big">Benefits of a user subscription</span>
                    <ul>
                    <li>Can create recipes</li>
                    <li>Can store recipes</li>
                    <li>Create tags</li>
                    <li>Unique Profile customization</li>
                    </ul>
                </div>
                <div class="ui column center aligned">
                    <div>
                    <?= $this->Html->link(__('Sign up for a profile!'), ['controller' => "Users", 'action' => 'add'], ['class' => 'ui button big blue']) ?>
                    </div>
                </div>
        </div>
</div>
    </div>
    <div class="">
        <footer>
            <h6>Thank you for you using cake recipes cms. This was a dream come true with the help of cakePHP.</h6>
        </footer>
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