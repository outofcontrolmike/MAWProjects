<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User $user
 */
?>
<?php include "templates\layout\header.php" ?>

<div style="height: 100vh">
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
    <div class="ui very padded relaxed raised column container segment">
        <div class="ui form">
            <?= $this->Form->create($user) ?>
            <legend><?= __('Edit Your Account Details') ?></legend>
            <?php
            echo $this->Form->control('user_name');
            echo $this->Form->control('title');
            echo $this->Form->control('email');
            echo $this->Form->control('password');
            echo $this->Form->control('bio');
            echo $this->Form->control('image');
            echo $this->Form->control('link', ['placeholder' => "Enter your website name without the https or http, example: mawportfolio.online"]);
            echo $this->Form->control('instagram_link',['placeholder' => "Enter your Instagram user name and we'll link to it.  example: explodingsnes"]);
            ?>
            <br>
            <?= $this->Form->button(__('Submit'), ['class' => 'ui fluid button yellow']) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>