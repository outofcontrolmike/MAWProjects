<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User $user
 */
?>
<?php include "templates\layout\header.php" ?>

<div>

    <div class="ui fluid container" id="editUserContainer">
        <div class="ui relaxed raised column container segment stacked" id="editUserForm">
            <div class="ui form large equal width">
                <p style="text-align:center"> <?php echo $this->Html->image('icon.png', array('alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'width' => "75", 'height' => '75')); ?></p>

                <p style="text-align: center">
                    <span class="ui text large teal">
                        Edit Your Account Details
                    </span>
                </p>

                <div class="ui divider">

                </div>
                <?= $this->Form->create($user) ?>

                <div id="EditFormInputsGroup">
                    <div class="fields">
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
                    </div>
                    <div class="fields">
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
                    </div>
                    <div class="ui divider">

                    </div>
                    <div class="fields">
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
                    </div>
                    <div class="ui divider">

                    </div>
                    <div class="fields">
                        <div class="ui field">
                            <label>Biography</label>
                            <div class="bioContainer">
                                <?php
                                echo $this->Form->control('bio',  ['label' => "", 'placeholder' => "Enter a new line for each", 'rows' => '5']);
                                ?>
                            </div>
                        </div>
                    </div>

                    <br>
                </div>
                <!-- End -->


                <p>
                    <span>
                        <?= $this->Form->postLink('<i class="ui user minus icon red big"></i>', ['controller' => 'Users', 'action' => 'delete', $user->id], ['confirm' => __("Are you sure you want to delete your account?  This can not be reversed and your recipes will be deleted a long with your account.", $user->id), 'escape' => false, 'title' => __('Delete')]) ?> </td>
                    </span>
                    <span style="float:right">
                        <?= $this->Form->button(__('Update Profile'), ['class' => 'ui button teal circular medium']) ?>


                    </span>
                </p>
                <?= $this->Form->end() ?>
            </div>
        </div>
    </div>
</div>