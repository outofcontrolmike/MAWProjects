<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Tag[]|\Cake\Collection\CollectionInterface $tags
 */
?>
<?php include "templates\layout\header.php" ?>


<div class="ui container segment very padded relaxed raised ">
    <h3><?= __('Tags') ?></h3>
    <div class="">
        <table class="ui table small celled">
            <thead>
                <tr>
                    <th><?= $this->Paginator->sort('id') ?></th>
                    <th><?= $this->Paginator->sort('title') ?></th>
                    <th><?= $this->Paginator->sort('created') ?></th>
                    <th><?= $this->Paginator->sort('modified') ?></th>
                    <th class="actions"><?= __('Actions') ?></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($tags as $tag) : ?>
                    <tr>
                        <td><?= $this->Number->format($tag->id) ?></td>
                        <td><?= $this->Html->link(
                                $tag->title,
                                ['controller' => 'Recipes/Tagged', 'action' =>  $tag->title]
                            ) ?></td>
                        <td><?= h($tag->created) ?></td>
                        <td><?= h($tag->modified) ?></td>
                        <td class="actions">
                            <?= $this->Html->link(__('View'), ['action' => 'view', $tag->id]) ?>
                            <!-- <?= $this->Html->link(__('Edit'), ['action' => 'edit', $tag->id]) ?> -->
                            <!-- <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $tag->id], ['confirm' => __('Are you sure you want to delete # {0}?', $tag->id)]) ?> -->
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        <?= $this->Html->link(__('New Tag'), ['action' => 'add'], ['class' => ' ui button floated right teal circular', 'style' => "float:right"]) ?>

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