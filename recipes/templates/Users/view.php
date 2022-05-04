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
<div style="height: 100vh">
    <div class="ui very padded relaxed raised segment container">
        <div class="ui">
            <img style="height: 250px" src="<?= h($user->image) ?>" />
            <table class='ui table celled'>
                <tr>
                    <th><?= __('User Name') ?></th>
                    <td><?= h($user->user_name) ?></td>
                </tr>
                <tr>
                    <th><?= __('Title') ?></th>
                    <td><?= h($user->title) ?></td>
                </tr>
                <tr>
                    <th><?= __('Bio') ?></th>
                    <td><?= h($user->bio) ?></td>
                </tr>
                <tr>
                    <th><?= __('Instagram Link') ?></th>
                    <td><?= h($user->instagram_link) ?></td>
                </tr>
                <tr>
                    <th><?= __('Business Link') ?></th>
                    <td><?= h($user->link) ?></td>
                </tr>
            </table>
            <div class="related">
                <h4><?= __("User's Created Recipes") ?></h4>
                <?php if ($creator === $user->id) : ?>
                    <?= $this->Html->link('Add Recipe', ['controller' => 'recipes', 'action' => 'add'], ['class' => 'button']) ?>
                <?php else : null  ?>
                <?php endif; ?>


                </button>
                <?php if (!empty($user->recipes)) : ?>
                    <div class="">
                        <table class="ui celled table">
                            <thead>
                                <tr>
                                    <th><?= __('Title') ?></th>
                                    <th><?= __('Description') ?></th>
                                    <th><?= __('Ingredients') ?></th>
                                    <th><?= __('Prep Time') ?></th>
                                    <th><?= __('Cook Time') ?></th>
                                    <th><?= __('Servings') ?></th>
                                    <th><?= __('Directions') ?></th>
                                    <th><?= __('Published') ?></th>
                                    <th><?= __('Created') ?></th>
                                    <th><?= __('Modified') ?></th>
                                    <th class="actions"><?= __('Actions') ?></th>
                                </tr>
                            </thead>
                            <?php foreach ($user->recipes as $recipes) : ?>
                                <tr>
                                    <td><?= h($recipes->title) ?></td>
                                    <td><?= h($recipes->body) ?></td>
                                    <td><?= h($recipes->ingredients) ?></td>
                                    <td><?= h($recipes->prep_time) ?></td>
                                    <td><?= h($recipes->cook_time) ?></td>
                                    <td><?= h($recipes->servings) ?></td>
                                    <td><?= h($recipes->directions) ?></td>
                                    <td><?= h($recipes->published) ?></td>
                                    <td><?= h($recipes->created) ?></td>
                                    <td><?= h($recipes->modified) ?></td>
                                    <td class="actions">
                                        <?= $this->Html->link(__('View'), ['controller' => 'Recipes', 'action' => 'view', $recipes->slug]) ?>
                                        <?= $this->Html->link(__('Edit'), ['controller' => 'Recipes', 'action' => 'edit', $recipes->slug]) ?>
                                        <?= $this->Form->postLink(__('Delete'), ['controller' => 'Recipes', 'action' => 'delete', $recipes->slug], ['confirm' => __('Are you sure you want to delete # {0}?', $recipes->id)]) ?>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </table>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
    <br>
</div>