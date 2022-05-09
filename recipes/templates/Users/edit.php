<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User $user
 */
?>
<?php include "templates\layout\header.php" ?>

<div>
    <!-- <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Form->postLink(
                __('Delete'),
                ['action' => 'delete', $user->id],
                ['confirm' => __('Are you sure you want to delete # {0}?', $user->id), 'class' => 'side-nav-item']
            ) ?>
            <?= $this->Html->link(__('List Users'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside> -->
    <br>
    <div class="ui very padded relaxed raised column container segment stacked">
        <div class="ui form">
            <?= $this->Form->create($user) ?>
            <h1 style="text-align: center;">
                <legend><?= __('Edit Your Account Details') ?></legend>
            </h1>
            <div class=" ui field">
                <label>User Name</label>
                <?php
                echo $this->Form->control('user_name', ['label' => ""]);
                ?>
            </div>

            <div class="ui field">
                <label>Your Title</label>
                <?php
                echo $this->Form->control('title', ['label' => ""]);
                ?>
            </div>

            <div class="ui field">
                <label>Email</label>
                <?php
                echo $this->Form->control('email', ['label' => ""]);
                ?>
            </div>

            <div class="ui field">
                <label>Password</label>
                <?php
                echo $this->Form->control('password', ['label' => ""]);
                ?>
            </div>

            <div class="ui field">
                <label>Biography</label>
                <?php
                echo $this->Form->control('bio',  ['label' => "", 'placeholder' => "Enter a new line for each step", 'rows' => '3', 'class' => "ui input"]);
                ?>
            </div>

            <div class="ui field">
                <label>Profile Picture</label>
                <?php
                echo $this->Form->control('image', ['label' => ""]);
                ?>
            </div>
            <div class="ui field">
                <label>Business Link</label>
                <?php
                echo $this->Form->control('link', ['label' => "", 'placeholder' => "Enter your website or portfioli and we'll link to it.  example: mawportfolio.online"]);
                ?>
            </div>

            <div class="ui field">
                <label>Instagram Link</label>
                <?php
                echo $this->Form->control('instagram_link', ['label' => "", 'placeholder' => "Enter your Instagram user name and we'll link to it.  example: explodingsnes"]);

                ?>
            </div>
            <!-- End -->
            <?= $this->Form->button(__('Submit'), ['class' => 'ui fluid button red']) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>