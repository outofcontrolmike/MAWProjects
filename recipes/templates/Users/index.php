<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User[]|\Cake\Collection\CollectionInterface $users
 */
?>
<?php include "templates\layout\header.php" ?>
<br>
<div class="ui container segment very padded relaxed raised">
    <h1><?= __('Users') ?></h1>
    <div class="">
        <table class="ui padded collapsing celled table">
            <thead>
                <tr>
                    <th><?= $this->Paginator->sort('user_name', ['label' => "User"]) ?></th>
                    <th><?= $this->Paginator->sort('bio') ?></th>
                    <th><?= $this->Paginator->sort('link', ['label' => 'Business Link']) ?></th>
                    <th><?= $this->Paginator->sort('instagram_link') ?></th>
                    <th><?= $this->Paginator->sort('created') ?></th>
                    <th class="actions centered"><?= __('Actions') ?></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($users as $user) : ?>
                    <tr>
                        <td>
                            <h4 class="ui image header" id="userIndexUserColumn">
                                <img src="<?= h($user->image) ?>" class="ui mini rounded image">
                                <div class="content" >
                                    <?= $user->user_name ?>
                                    <div class="sub header">
                                        <?= $user->title ?>
                                    </div>
                                </div>
                            </h4>
                        </td>
                        <td><?= h($user->bio) ?></td>
                        <td><a target="_blank" href="https://<?= h($user->link) ?>"><?= h($user->link) ?></a></td>
                        <td><a target = "_blank"href="https://instagram.com/<?= h($user->instagram_link) ?>"><?= h($user->instagram_link) ?></td>
                        <td><?= h($user->created) ?></td>
                        <td class="actions userActions" id="userActions">
                            <?= $this->Html->link('<i class="ui eye icon red large"></i>'. __(''), ['action' => 'view', $user->id], ['escape' => false, 'title' => __('View')]) ?>
                            <!-- <?= $this->Html->link(__('Edit'), ['action' => 'edit', $user->id]) ?>
                        <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $user->id], ['confirm' => __('Are you sure you want to delete # {0}?', $user->id)]) ?> -->
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <!-- Borrowed from Cake.. it's styled in -->
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->first('<< ' . __('first')) ?>
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
            <?= $this->Paginator->last(__('last') . ' >>') ?>
        </ul>
        <p>
        <?= $this->Html->link(__('Add User'), ['action' => 'add'], ['class' => 'ui red button', 'style' => "float:left"]) ?>
            <?= $this->Paginator->counter(__('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')) ?></p>
    </div>
</div>
<br>