<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User $user
 */
?>

    <div class="ui container segment raised very padded">
        <div class="ui form" id="">
            <?= $this->Form->create($user) ?>
                <legend style="text-align:center">
                    <h2><?= __('Sign up to start adding recipes!') ?></h2>
                </legend>
                <?php
                echo $this->Form->control('user_name',['class' => "field"]);
                echo $this->Form->control('title');
                echo $this->Form->control('email');
                echo $this->Form->control('password');
                echo $this->Form->control('bio');
                echo $this->Form->control('image');
                echo $this->Form->control('link');
                echo $this->Form->control('instagram_link');
                ?>
            <?= $this->Form->button(__('Submit'), ['class' => 'ui button red massive']) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>