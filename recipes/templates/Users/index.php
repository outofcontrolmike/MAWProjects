<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User[]|\Cake\Collection\CollectionInterface $users
 */
?>
<?php include "templates\layout\header.php" ?>

<div class="ui container segment very padded relaxed raised">
    <?= $this->Html->link(__('New User'), ['action' => 'add'], ['class' => 'button float-right']) ?>
    <h3><?= __('Users') ?></h3>
    <div class="">
        <table class="ui table celled">
            <thead>
                <tr>
                    <th>UserImage</th>
                    <th><?= $this->Paginator->sort('user_name') ?></th>
                    <th><?= $this->Paginator->sort('title') ?></th>
                    <th><?= $this->Paginator->sort('bio') ?></th>
                    <th><?= $this->Paginator->sort('link', ['label' => 'Business Link']) ?></th>
                    <th><?= $this->Paginator->sort('instagram_link') ?></th>
                    <th><?= $this->Paginator->sort('created') ?></th>
                    <th class="actions"><?= __('Actions') ?></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($users as $user) : ?>
                    <tr>
                        <td><img class="ui mini rounded image" id="userImage" src="<?= h($user->image) ?>"></td>
                        <td><?= h($user->user_name) ?></td>
                        <td><?= h($user->title) ?></td>
                        <td><?= h($user->bio) ?></td>
                        <td><?= h($user->link) ?></td>
                        <td><?= h($user->instagram_link) ?></td>
                        <td><?= h($user->created) ?></td>
                        <td class="actions">
                            <?= $this->Html->link(__('View'), ['action' => 'view', $user->id]) ?>
                            <!-- <?= $this->Html->link(__('Edit'), ['action' => 'edit', $user->id]) ?>
                        <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $user->id], ['confirm' => __('Are you sure you want to delete # {0}?', $user->id)]) ?> -->
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->first('<< ' . __('first')) ?>
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
            <?= $this->Paginator->last(__('last') . ' >>') ?>
        </ul>
        <p><?= $this->Paginator->counter(__('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')) ?></p>
    </div>
</div>
<br>