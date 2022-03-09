<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User $user
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('Edit User'), ['action' => 'edit', $user->id]) ?> </li>
        <li><?= $this->Form->postLink(__('Delete User'), ['action' => 'delete', $user->id], ['confirm' => __('Are you sure you want to delete # {0}?', $user->id)]) ?> </li>
        <li><?= $this->Html->link(__('List Users'), ['action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('New User'), ['action' => 'add']) ?> </li>
        <li><?= $this->Html->link(__('List Recipes'), ['controller' => 'Recipes', 'action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('New Recipe'), ['controller' => 'Recipes', 'action' => 'add']) ?> </li>
    </ul>
</nav>
<div class="users view large-9 medium-8 columns content">
    <h3><?= h($user->id) ?></h3>
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= __('Email') ?></th>
            <td><?= h($user->email) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Password') ?></th>
            <td><?= h($user->password) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('User Name') ?></th>
            <td><?= h($user->user_name) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Bio') ?></th>
            <td><?= h($user->bio) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Instagram Link') ?></th>
            <td><?= h($user->instagram_link) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Id') ?></th>
            <td><?= $this->Number->format($user->id) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Created') ?></th>
            <td><?= h($user->created) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Modified') ?></th>
            <td><?= h($user->modified) ?></td>
        </tr>
    </table>
    <div class="related">
        <h4><?= __('Related Recipes') ?></h4>
        <?php if (!empty($user->recipes)): ?>
        <table cellpadding="0" cellspacing="0">
            <tr>
                <th scope="col"><?= __('Id') ?></th>
                <th scope="col"><?= __('User Id') ?></th>
                <th scope="col"><?= __('Private View') ?></th>
                <th scope="col"><?= __('Title') ?></th>
                <th scope="col"><?= __('Slug') ?></th>
                <th scope="col"><?= __('Description') ?></th>
                <th scope="col"><?= __('Ingredients') ?></th>
                <th scope="col"><?= __('Prep Time') ?></th>
                <th scope="col"><?= __('Cook Time') ?></th>
                <th scope="col"><?= __('Servings') ?></th>
                <th scope="col"><?= __('Directions') ?></th>
                <th scope="col"><?= __('Photo Paths') ?></th>
                <th scope="col"><?= __('Published') ?></th>
                <th scope="col"><?= __('Created') ?></th>
                <th scope="col"><?= __('Modified') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
            <?php foreach ($user->recipes as $recipes): ?>
            <tr>
                <td><?= h($recipes->id) ?></td>
                <td><?= h($recipes->user_id) ?></td>
                <td><?= h($recipes->private_view) ?></td>
                <td><?= h($recipes->title) ?></td>
                <td><?= h($recipes->slug) ?></td>
                <td><?= h($recipes->description) ?></td>
                <td><?= h($recipes->ingredients) ?></td>
                <td><?= h($recipes->prep_time) ?></td>
                <td><?= h($recipes->cook_time) ?></td>
                <td><?= h($recipes->servings) ?></td>
                <td><?= h($recipes->directions) ?></td>
                <td><?= h($recipes->photo_paths) ?></td>
                <td><?= h($recipes->published) ?></td>
                <td><?= h($recipes->created) ?></td>
                <td><?= h($recipes->modified) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['controller' => 'Recipes', 'action' => 'view', $recipes->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['controller' => 'Recipes', 'action' => 'edit', $recipes->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['controller' => 'Recipes', 'action' => 'delete', $recipes->id], ['confirm' => __('Are you sure you want to delete # {0}?', $recipes->id)]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </table>
        <?php endif; ?>
    </div>
</div>
