<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Tag $tag
 * @var \Cake\Collection\CollectionInterface|string[] $recipes
 */
?>
<?php include "templates\layout\header.php" ?>

<aside class="">
    <div class="side-nav">
        <h4 class="heading"><?= __('Actions') ?></h4>
        <?= $this->Html->link(__('List Tags'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
    </div>
</aside>
<div class="ui very padded relaxed raised container segment">
    <div class="ui form">
        <?= $this->Form->create($tag) ?>
        <fieldset>
            <legend><?= __('Add Tag') ?></legend>
            <?php
            echo $this->Form->control('title');
            echo $this->Form->control('recipes._ids', ['label' => "Recipes to Tag (Hold Control Key and then click each recipe you want to tag)", 'class' => 'recipesTextArea', 'options' => $recipes]);
            ?>
        </fieldset>
        <br>
        <?= $this->Form->button(__('Submit'), ['class' => 'ui button red large fluid']) ?>
        <?= $this->Form->end() ?>
    </div>
</div>