<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Tag $tag
 * @var string[]|\Cake\Collection\CollectionInterface $recipes
 */
?>
<?php include "templates\layout\header.php" ?>

<aside class="ui very padded relaxed raised container segment">
    <div class="side-nav">
        <h4 class="heading"><?= __('Actions') ?></h4>
        <?= $this->Form->postLink(
            __('Delete'),
            ['action' => 'delete', $tag->id],
            ['confirm' => __('Are you sure you want to delete # {0}?', $tag->id), 'class' => 'side-nav-item']
        ) ?>
        <?= $this->Html->link(__('List Tags'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
    </div>
</aside>
<div class="column-responsive column-80">
    <div class="tags form content">
        <?= $this->Form->create($tag) ?>
        <fieldset>
            <legend><?= __('Edit Tag') ?></legend>
            <?php
            echo $this->Form->control('title');
            echo $this->Form->control('recipes._ids', ['options' => $recipes]);
            ?>
        </fieldset>
        <?= $this->Form->button(__('Submit')) ?>
        <?= $this->Form->end() ?>
    </div>
</div>