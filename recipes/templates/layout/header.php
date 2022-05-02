<?php

/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @since         0.10.0
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 * @var \App\View\AppView $this
 */

?>
<!DOCTYPE html>

<body>
    <!-- Grab user ID to append to account settings -->
    <?php
    $userId = $_SESSION['Auth']['id'];
    ?>

    <nav>
        <div class="ui secondary menu stackable">

            <a class="active item" href="<?= $this->Url->build('/') ?>"> <?php echo $this->Html->image('logo.png', array('alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'width' => "50", 'height' => '50')); ?></a>
            <!-- <a target="_blank" rel="noopener" href="https://book.cakephp.org/4/">Documentation</a>
            <a target="_blank" rel="noopener" href="https://api.cakephp.org/">API</a> -->
            <?php if ($userId) { ?>
                <div class="ui icon input">
                    <input id="recipeKeyword" type="text" placeholder="Type in a recipe key word...">
                    <i onclick="submitKeyword()" class="search link icon"></i>
                </div>
                <a class="item" href="<?= $this->Url->build('/recipes') ?>">Recipes</a>
                <a class="item" href="<?= $this->Url->build('/users') ?>">Users</a>
                <a class="item" href="<?= $this->Url->build('/tags') ?>">Tags</a>
                <a class="item" href="<?= $this->Url->build('/users/contact') ?>">Contact</a>
                <a class="item" href="<?= $this->Url->build('/pages/faq') ?>">FAQ</a>
                <div class="right menu secondary">
                    <a class="item" href="<?= $this->Url->build('/users/edit/' . $userId) ?>">Account Settings</a>
                    <a class="item" href="<?= $this->Url->build('/users/view/' . $userId) ?>">Profile</a>
                    <a class="item" href="<?= $this->Url->build('users/logout') ?>">Logout</a>
                </div>
            <?php } ?>
            <?php if (!$userId) { ?>
                <div class="ui right menu secondary">
                    <a class="item" href="<?= $this->Url->build('/users/add') ?>">Sign Up</a>
                    <a class="item" href="<?= $this->Url->build('/users/login') ?>">Login</a>

                    <!-- Add below to footer -->
                    <!--               <a class="item" href="<?= $this->Url->build('/pages/faq') ?>">FAQ</a>
                    <a class="item" href="<?= $this->Url->build('/users/contact') ?>">Contact</a> -->
                </div>
            <?php } ?>
    </nav>
    <script>
        //Will search for whatever user entered
        function submitKeyword() {
            console.log("my god does this work in the header")
            let keyword = document.getElementById('recipeKeyword');
            if (keyword.value != "") {
                window.location.assign("http://localhost:8765/recipes/tagged/" + keyword.value);
            }
        }
    </script>
</body>