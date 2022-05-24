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

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>

<body class="ui">
    <?php include "templates\layout\header.php" ?>
    <div class="ui vertical masthead center aligned fluid container" id="landingPage">
        <div class="ui container fluid">
            <div class="ui container fluid" id="homeRecipeSearch">
                <h1 class="ui header center aligned icon">
                    <i class="circular utensils icon inverted"></i>

                    <p><span class=" ui text large inverted teal">
                            Community Based Recipes
                        </span></p>
                    <p>
                        <span id="homePageIconsList">
                            <!-- Veggies -->
                            <i class="large seedling olive icon"></i>
                            <i class="large leaf olive icon"></i>
                            <i class="large carrot icon orange inverted"></i>
                            <i class="large pepper hot red icon"></i>

                            <!-- Fruits -->
                            <i class="large fruit-apple icon red "></i>
                            <i class="large lemon yellow icon inverted"></i>

                            <!-- Meats -->
                            <i class="large egg icon white inverted"></i>
                            <i class="large fish blue icon"></i>
                            <i class="large bacon icon pink inverted"></i>
                            <i class="large hotdog red icon"></i>
                            <i class="large drumstick bite icon orange inverted"></i>

                            <!-- Desert -->
                            <i class="large cookie icon white inverted"></i>
                            <i class="large ice cream pink icon inverted"></i>

                            <!-- Prepared stuff -->
                            <i class="large bread slice icon brown"></i>
                            <i class="large cheese icon yellow inverted"></i>
                            <i class="large wine bottle icon violet"></i>
                            <i class="large pizza slice icon yellow inverted"></i>

                        </span>
                    </p>
                </h1>
                <!-- <div class="ui action input huge inverted transparent">
                    <input type=" test" name="test" id="recipeTagKeyword" value="" placeholder="Try Searching for your favorite recipe by keyword...">
                    <div class="ui button " onclick="submitKeyword()"><i class="utensils icon large black"></i></div>
                </div> -->
            </div>
            <div class="ui two column stackable grid very padded relaxed">
                <div class="ui column container " id="landingPageColumn">
                    <p><span class=" ui header big">View or Create Recipes Quickly</span>
                    </p>
                    <div id="landingPageColumnContainer">
                        <p><span class="ui text">
                                Every recipe shown on this site is created by people like you. You don’t have to have an account to view any of these recipes.
                            </span>
                        </p>
                        <p>
                            If you want to be a creator, sign up for a free <a style="color:#00b5ad" href="https://localhost:8765/users/add">account</a> today.
                        </p>
                        <div style="margin-top:2rem">
                            <?= $this->Html->link(__('View All Recipes'), ['controller' =>  "Recipes", 'action' => 'index'], ['class' => 'ui button teal big centered circular', 'id' => "landingPageButton"]) ?>
                        </div>
                    </div>
                </div>
                <div class="ui column container">
                    <div class="ui image huge" href="<?= $this->Url->build('/') ?>"> <?php echo $this->Html->image('recipes_collection.PNG', array('alt' => 'recipes_Showcase', 'border' => '0', 'data-src' => 'holder.js/100%x25')); ?>
                    </div>

                </div>
            </div>
            <div class="ui container fluid">
                <div class="ui divider">
                </div>
                <div class="ui two column stackable grid very padded relaxed">
                    <div class="ui column center aligned">
                        <div class="ui image big" href="<?= $this->Url->build('/') ?>"> <?php echo $this->Html->image('user_profile.PNG', array('alt' => 'user_profile', 'border' => '0', 'data-src' => 'holder.js/100%x25')); ?>
                        </div>
                    </div>
                    <div class="ui column center aligned" id="landingPageColumn"">
                        <p><span class=" ui header big">Create a User Account</span></p>
                        <p>
                            By creating an account you can list and edit recipes along with promoting yourself.hink of this as a mini portfolio for your favorite recipes. You can also view other's users profile as well.
                        </p>
                        <p>
                            It's also possible to link to your webpage/portfolio, instagram account and your email address for others to reach out to you.
                        </p>

                        <div style="margin-top: 2rem">
                            <?= $this->Html->link(__('Create Account'), ['controller' => "Users", 'action' => 'add'], ['class' => 'ui button big teal circular', 'id' => "landingPageButton"]) ?>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End second section -->
            <div class="ui container fluid">
                <div class="ui divider">
                </div>
                <div class="ui two column stackable grid very padded relaxed">
                    <div class="ui column style=" id="landingPageColumn"">
                        <p><span class=" ui header big">Customize Your Recipes</span></p>
                        <p>Use our Simple Platform to list your recipes as well as customize them.</p>
                        <p>
                            Our system also allows you to edit your recipes too, incase you need to update them.
                        </p>
                    </div>
                    <div class="ui column center aligned">
                        <div class="ui image large" href="<?= $this->Url->build('/') ?>"> <?php echo $this->Html->image('create_Recipe.PNG', array('alt' => 'user_profile', 'border' => '0', 'data-src' => 'holder.js/100%x25')); ?>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End third section -->
            <div class="ui container fluid">
                <div class="ui divider">

                </div>
                <div class="ui two column stackable grid very padded relaxed">
                    <div class="ui column center aligned">
                        <div class="ui image big" style="background-color: white" href="<?= $this->Url->build('/') ?>"> <?php echo $this->Html->image('recipeTags.PNG', array('alt' => 'user_profile', 'border' => '0', 'data-src' => 'holder.js/100%x25')); ?>
                        </div>
                    </div>
                    <div class="ui column" id="landingPageColumn">
                        <p><span class="ui header big">Utilize Recipe Tags</span></p>
                        <p>
                            If you're wondering how our recipe search works, it's based off our Recipe Tagging Feature.
                        </p>
                        <p>
                            Anytime a user creates a recipe, they have options to list keywords related to their recipe. The benefit to this is to have your recipes more likely to be seen by others.
                        </p>
                        <p>
                            If you're worried a tag already has been created, there's no need to sweat. Our system will not duplicate the tag.
                        </p>
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