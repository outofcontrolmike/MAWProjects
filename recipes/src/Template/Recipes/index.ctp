<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Recipe[]|\Cake\Collection\CollectionInterface $recipes
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('New Recipe'), ['action' => 'add']) ?></li>
        <li><?= $this->Html->link(__('List Users'), ['controller' => 'Users', 'action' => 'index']) ?></li>
        <li><?= $this->Html->link(__('New User'), ['controller' => 'Users', 'action' => 'add']) ?></li>
        <li><?= $this->Html->link(__('List Tags'), ['controller' => 'Tags', 'action' => 'index']) ?></li>
        <li><?= $this->Html->link(__('New Tag'), ['controller' => 'Tags', 'action' => 'add']) ?></li>
    </ul>
</nav>
<div class="recipes index large-9 medium-8 columns content">
    <h3><?= __('Recipes') ?></h3>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('id') ?></th>
                <th scope="col"><?= $this->Paginator->sort('user_id') ?></th>
                <th scope="col"><?= $this->Paginator->sort('private_view') ?></th>
                <th scope="col"><?= $this->Paginator->sort('title') ?></th>
                <th scope="col"><?= $this->Paginator->sort('slug') ?></th>
                <th scope="col"><?= $this->Paginator->sort('ingredients') ?></th>
                <th scope="col"><?= $this->Paginator->sort('prep_time') ?></th>
                <th scope="col"><?= $this->Paginator->sort('cook_time') ?></th>
                <th scope="col"><?= $this->Paginator->sort('servings') ?></th>
                <th scope="col"><?= $this->Paginator->sort('directions') ?></th>
                <th scope="col"><?= $this->Paginator->sort('photo_paths') ?></th>
                <th scope="col"><?= $this->Paginator->sort('published') ?></th>
                <th scope="col"><?= $this->Paginator->sort('created') ?></th>
                <th scope="col"><?= $this->Paginator->sort('modified') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($recipes as $recipe): ?>
            <tr>
                <td><?= $this->Number->format($recipe->id) ?></td>
                <td><?= $recipe->has('user') ? $this->Html->link($recipe->user->id, ['controller' => 'Users', 'action' => 'view', $recipe->user->id]) : '' ?></td>
                <td><?= h($recipe->private_view) ?></td>
                <td><?= h($recipe->title) ?></td>
                <td><?= h($recipe->slug) ?></td>
                <td><?= h($recipe->ingredients) ?></td>
                <td><?= h($recipe->prep_time) ?></td>
                <td><?= h($recipe->cook_time) ?></td>
                <td><?= $this->Number->format($recipe->servings) ?></td>
                <td><?= h($recipe->directions) ?></td>
                <td><?= h($recipe->photo_paths) ?></td>
                <td><?= h($recipe->published) ?></td>
                <td><?= h($recipe->created) ?></td>
                <td><?= h($recipe->modified) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['action' => 'view', $recipe->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['action' => 'edit', $recipe->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $recipe->id], ['confirm' => __('Are you sure you want to delete # {0}?', $recipe->id)]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->first('<< ' . __('first')) ?>
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
            <?= $this->Paginator->last(__('last') . ' >>') ?>
        </ul>
        <p><?= $this->Paginator->counter(['format' => __('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')]) ?></p>
    </div>
</div>
