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
        <div class=" ui main menu fixed borderless  stackable" id="navigationMenu" style="background-color:black;">
            <a class=" item" href="<?= $this->Url->build('/') ?>"> <i class="ui utensils icon teal big" ?></i></a>
            <?php if ($userId) { ?>
                <a class="item" href="<?= $this->Url->build('/recipes') ?>">Recipes</a>
                <a class="item" href="<?= $this->Url->build('/tags') ?>">Tags</a>
                <a class="item" href="<?= $this->Url->build('/users') ?>">Users</a>
                <div class="right menu secondary" id="navRightItems">
                    <a class="item" href="<?= $this->Url->build('/users/view/' . $userId) ?>">Profile</a>
                    <a class="item" href="<?= $this->Url->build('/users/edit/' . $userId) ?>">Settings</a>
                    <a class="item" href="<?= $this->Url->build('users/logout') ?>">Logout</a>
                </div>
            <?php } ?>
            <?php if (!$userId) { ?>
                <div class="ui right menu secondary" id="navRightItems">
                    <a class=" item" href="<?= $this->Url->build('/users/add') ?>">Sign Up</a>
                    <a class="item" href="<?= $this->Url->build('/users/login') ?>">Login</a>
                </div>
            <?php } ?>
        </div>

    </nav>
    <br><br><br>

    <script>
        //Will search for whatever user entered
        function submitKeyword() {
            let keyword = document.getElementById('recipeKeyword');
            if (keyword.value != "") {
                window.location.assign("http://localhost:8765/recipes/tagged/" + keyword.value);
            }
        }
    </script>
</body>