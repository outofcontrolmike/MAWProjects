<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Tag[]|\Cake\Collection\CollectionInterface $tags
 */
?>
<?php include "templates\layout\header.php" ?>

<br>
<div class="ui container segment very padded relaxed raised ">
    <p>
        <span class="ui text big">Recipe Tags</span>
    </p>

    <div>
        <table class="ui table large celled center aligned">
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
                        <?php
                        $formatTitle = ucFirst($tag->title);
                        ?>
                        <td data-inverted="" data-tooltip="View Recipes tagged with <?= $formatTitle ?>" data-position="top center">

                            <?= $this->Html->link(

                                $formatTitle,
                                ['controller' => 'Recipes/Tagged', 'action' =>  $tag->title],
                                ["id" => "tagTitle"]
                            ) ?></td>
                        <td><?= h($tag->created) ?></td>
                        <td><?= h($tag->modified) ?></td>
                        <td width="10px" id="tagActions">
                            <?= $this->Html->link('<i class="ui eye icon teal large"></i>' . __(''), ['action' => 'view', $tag->id], ['escape' => false, 'title' => __('View Tag')]) ?>
                            <!-- <?= $this->Html->link(__('Edit'), ['action' => 'edit', $tag->id]) ?> -->
                            <!-- <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $tag->id], ['confirm' => __('Are you sure you want to delete # {0}?', $tag->id)]) ?> -->
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
        <p><?= $this->Paginator->counter(__('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')) ?>
            <?= $this->Html->link(__('New Tag'), ['action' => 'add'], ['class' => ' ui button floated right teal circular', 'style' => "float:right"]) ?>

        </p>

    </div>
</div>
<br>