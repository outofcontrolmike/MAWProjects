<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User $user
 */
?>
<?php include "templates\layout\header.php" ?>

<?php
$creator = $_SESSION["Auth"]["id"];
?>

<!-- UpperCase first lett user name -->
<?php
$uppercaseFirst = ucfirst($user->user_name);
?>

<!-- <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('Edit User'), ['action' => 'edit', $user->id], ['class' => 'side-nav-item']) ?>
            <?= $this->Form->postLink(__('Delete User'), ['action' => 'delete', $user->id], ['confirm' => __('Are you sure you want to delete # {0}?', $user->id), 'class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('List Users'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('New User'), ['action' => 'add'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside> -->
<br><br>
<div>
    <div class="ui very padded relaxed raised segment container">

        <!-- Try out two column grid -->
        <div class="ui two column container grid stackable very relaxed padded">
            <div class="ui column">
                <img class="ui image medium" src="<?= h($user->image) ?>" />
            </div>
            <div class="ui column ui text centered">
                <span class="ui text centered huge"><?= h($uppercaseFirst) ?></span>
                <h5 style="color:grey"><?= h($user->title) ?></h5>
                <p style=" font-size:large"><?= h($user->bio) ?></p>
                <!-- <p>Total Recipes: <?php $recipes = $user->recipes;
                                        echo count($recipes);
                                        ?> </p> -->
                <div class="container" id="userSocialMedia">
                    <span class="ui text grey large"><?php echo date_format($user->created, "m/d/Y") ?> </span>
                    <span id="mediaLinks">
                        <a href="<?php echo $user->link ?>" target="_blank"><i class="user tie icon big"></i></a>
                        <a href="https://instagram.com/<?php echo $user->instagram_link ?>" target="_blank"><i class="instagram icon big"></i></a>
                        <a href="mailto:<?php echo $user->email ?>" target="_blank"><i class="envelope icon big"></i></a>
                    </span>
                </div>
            </div>
        </div>
        <hr style="border-color: teal;">
        <!-- End two column grid -->
        <div class="ui">
            <div class="related">
                <br>
                <?php if (!empty($user->recipes)) : ?>
                    <div class="">
                        <table class="ui celled table">
                            <thead>
                                <tr>
                                    <th><?= __('Title') ?></th>
                                    <th><?= __('Description') ?></th>
                                    <th><?= __('Ingredients') ?></th>
                                    <th><?= __('Prep Time (min)') ?></th>
                                    <th><?= __('Cook Time (min)') ?></th>
                                    <th><?= __('Servings') ?></th>
                                    <th><?= __('Directions') ?></th>
                                    <th><?= __('Created') ?></th>
                                    <?php if ($creator === $user->id) : ?>
                                        <th class="actions"><?= __('Actions') ?></th>
                                    <?php else : null  ?>
                                    <?php endif; ?>
                                </tr>
                            </thead>
                            <?php foreach ($user->recipes as $recipes) : ?>
                                <tr>
                                    <td><?= $this->Html->link($recipes->title, ['controller' => 'recipes', 'action' => 'view', $recipes->slug], ['style' => "color:teal"]) ?></td>
                                    <td><?= h($recipes->body) ?></td>
                                    <td id="userViewIngredients"><?= h($recipes->ingredients) ?></td>
                                    <td><?= h($recipes->prep_time) ?></td>
                                    <td><?= h($recipes->cook_time) ?></td>
                                    <td><?= h($recipes->servings) ?></td>
                                    <td><?= h($recipes->directions) ?></td>
                                    <td><?= h(date_format($user->created, "m/d/Y")) ?></td>

                                    <!-- Todo: Make it to where these conditionally show up for logged in user -->
                                    <?php if ($creator === $user->id) : ?>
                                        <td class="actions"> <?= $this->Html->link('<i class="ui pencil icon teal  "></i>' . __(''), ['controller' => 'Recipes', 'action' => 'edit', $recipes->slug], ['escape' => false, 'title' => __('Edit')]) ?>

                                            <?= $this->Form->postLink('<i class="ui trash  icon red "></i>', ['controller' => 'Recipes', 'action' => 'delete', $recipes->slug], ['confirm' => __('Are you sure you want to delete # {0}?', $recipes->id), 'escape' => false, 'title' => __('Delete')]) ?> </td>

                                    <?php else :   ?>
                                    <?php endif; ?>
                                </tr>
                            <?php endforeach; ?>
                        </table>
                        <?php if ($creator === $user->id) : ?>
                            <br>
                            <?= $this->Html->link('Add Recipe', ['controller' => 'recipes', 'action' => 'add'], ['class' => 'button ui button red', 'style' => "float:right"]) ?>
                            <br>
                        <?php else : null  ?>
                        <?php endif; ?>
                    </div>
                <?php else : echo "<h1>You haven't created nay recipes yet... get to it.</h1>" ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
    <br>
</div>