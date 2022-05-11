<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User $user
 */
?>
<script>
</script>
<div class="ui container fluid center aligned" id="signUpFormContainer">
    <div class="ui container segment raised very padded stacked centered" id="signUpForm">
        <p> <?php echo $this->Html->image('icon.png', array('alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'width' => "50", 'height' => '50')); ?></p>
        <div class="ui form large" id="">
            <?= $this->Form->create($user) ?>
            <legend style="text-align:center">
                <span class="ui text teal big"><?= __('Sign up to start adding recipes!') ?></span>
            </legend>
            <br>
            <div id="loginFormInputsGroup">
                <?= $this->Form->control('user_name', ['class' => "ui", 'placeholder' => "User Name", 'label' => "", 'required' => true]) ?>
                <br>
                <?= $this->Form->control('title', ['label' => "", 'placeholder' => "Your title.... example 'Silent Chef'", 'required' => true]) ?>
                <br>
                <?= $this->Form->control('email', ['class' => "ui ", 'placeholder' => "Email address", 'label' => "", 'required' => true]) ?>
                <br>
                <?= $this->Form->control('password', ['label' => "", 'placeholder' => "Password", 'required' => true]) ?>
                <br>
                <?= $this->Form->control('image', ['label' => "", 'placeholder' => "Profile Image", 'required' => true]) ?>
                <br>
                <?= $this->Form->control('link', ['class' => "ui ", 'placeholder' => "Professional Link, such as your website or portfolio.", 'label' => "", 'required' => false]) ?>
                <br>
                <?= $this->Form->control('instagram_link', ['label' => "", 'placeholder' => "Instagram UserName/Handle", 'required' => false]) ?>
                <br>
                <?= $this->Form->control('bio', ['class' => "ui ", 'rows' => '3','placeholder' => "Summary about yourself, about 1-2 paragraphs", 'label' => "", 'required' => true]) ?>
                <br>
            </div>
            <?= $this->Form->button(__('Create Account'), ['class' => 'ui button teal fluid circular']) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>