<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User $user
 */
?>

<div class="row" >
    <div class="column-responsive">
        <div class="users form content" id="recipeSignUp">
            <?= $this->Form->create($user) ?>
            <fieldset>
                <legend style="text-align:center"><h2><?= __('Sign up to start adding recipes!') ?></h2></legend>
                <?php
                    echo $this->Form->control('user_name');
                    echo $this->Form->control('email');
                    echo $this->Form->control('password');
                    echo $this->Form->control('bio');
                    echo $this->Form->control('instagram_link');
                ?>
            </fieldset>
            <?= $this->Form->button(__('Submit')) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>
