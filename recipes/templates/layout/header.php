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
        <div class="ui secondary menu">
            <a class="active item" href="<?= $this->Url->build('/') ?>"><span>Cake</span>PHP</a>
            <!-- <a target="_blank" rel="noopener" href="https://book.cakephp.org/4/">Documentation</a>
            <a target="_blank" rel="noopener" href="https://api.cakephp.org/">API</a> -->
            <?php if ($userId) { ?>
                <a class="item" href="<?= $this->Url->build('/recipes') ?>">Recipes</a>
                <a class="item" href="<?= $this->Url->build('/users') ?>">Users</a>
                <a class="item" href="<?= $this->Url->build('/tags') ?>">Tags</a>
                <a class="item" href="<?= $this->Url->build('/users/contact') ?>">Contact</a>
                <a class="item" href="<?= $this->Url->build('/pages/faq') ?>">FAQ</a>
                <div class="right menu">
                    <a class="item" href="<?= $this->Url->build('/users/edit/' . $userId) ?>">Account Settings</a>
                    <a class="item" href="<?= $this->Url->build('/users/view/' . $userId) ?>">Profile</a>
                    <a class="item" href="<?= $this->Url->build('users/logout') ?>">Logout</a>
                </div>
            <?php } ?>
            <?php if (!$userId) { ?>
                <div class="right menu">
                    <a class="item" href="<?= $this->Url->build('/users/login') ?>">Login</a>
                    <a class="item" href="<?= $this->Url->build('/users/add') ?>">Create Account</a>
                    <a class="item" href="<?= $this->Url->build('/pages/faq') ?>">FAQ</a>
                    <a class="item" href="<?= $this->Url->build('/users/contact') ?>">Contact</a>
                </div>
            <?php } ?>
    </nav>
    <div class="ui secondary menu">




    </div>
</body>