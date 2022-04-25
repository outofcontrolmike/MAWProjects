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

    <nav class="top-nav">
        <div class="top-nav-title">
            <a href="<?= $this->Url->build('/') ?>"><span>Cake</span>PHP</a>
        </div>

        <div class="top-nav-links">
            <!-- <a target="_blank" rel="noopener" href="https://book.cakephp.org/4/">Documentation</a>
            <a target="_blank" rel="noopener" href="https://api.cakephp.org/">API</a> -->
            <?php if ($userId) { ?>
                <a target="_self" rel="noopener" href="http://localhost:8765/recipes">Public Recipes |</a>
                <a target="_self" rel="noopener" href="http://localhost:8765/tags">Tags |</a>
                <a target="_self" rel="noopener" href="http://localhost:8765/users">Users |</a>
                <a target="_self" rel="noopener" href="http://localhost:8765/users/edit/<?php echo $userId ?>">Account Settings | </a>
                <a target="_self" rel="noopener" href="http://localhost:8765/users/view/<?php echo $userId ?>">My Recipes |</a>
                <a target="_self" rel="noopener" href="http://localhost:8765/recipes/public">All Recipes |</a>
                <a target="_self" rel="noopener" href="http://localhost:8765/users/contact">Contact |</a>
                <a target="_self" rel="noopener" href="http://localhost:8765/users/faq">FAQ</a>
                <a target="_self" rel="noopener" href="http://localhost:8765/users/logout">Logout</a>
            <?php } ?>
            <?php if (!$userId) { ?>
                <a target="_self" rel="noopener" href="http://localhost:8765/users/login">Login</a>
                <a target="_self" rel="noopener" href="http://localhost:8765/users/add">Create Account |</a>
                <a target="_self" rel="noopener" href="http://localhost:8765/users/contact">Contact |</a>
                <a target="_self" rel="noopener" href="http://localhost:8765/users/faq">FAQ</a>
            <?php } ?>
        </div>
    </nav>
</body>