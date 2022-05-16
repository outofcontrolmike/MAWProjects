<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Tag $tag
 * @var \Cake\Collection\CollectionInterface|string[] $recipes
 */
?>
<?php include "templates\layout\header.php" ?>


<!-- <aside class="">
    <div class="side-nav">
        <h4 class="heading"><?= __('Actions') ?></h4>
        <?= $this->Html->link(__('List Tags'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
    </div>
</aside> -->

<div class="ui container fluid" id="tagFormContainer">
    <div class="ui container segment raised very padded stacked" id="tagForm">
        <p> <?php echo $this->Html->image('icon.png', array('alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'width' => "50", 'height' => '50')); ?></p>
        <div class="ui form medium equal width">
            <?= $this->Form->create($tag) ?>
            <p style="text-align:center">
                <span class="ui text teal big"><?= __('Create Tag') ?></span>
            </p>
            <br>
            <div id="editFormInputGroups">
                <div class="ui fields">
                    <div class="ui field">
                        <?= $this->Form->control('title', ['class' => "ui", 'label' => "", 'placeholder' => "Tag Name", 'required' => true]) ?>
                    </div>
                </div>
                <div class="ui fields">
                    <div class="ui field">
                        <div id="tagsContainer">
                            <div class="ui pointing below inverted black basic label large">
                                Hold Control Key and then click each recipe you want to tag.
                            </div>
                            <?= $this->Form->control('recipes._ids', ['label' => "", 'class' => 'recipesTextArea', 'options' => $recipes]); ?>
                        </div>
                    </div>
                </div>
                <br>
            </div>
            <?= $this->Form->button(__('Create New Tag'), ['class' => 'ui button teal fluid circular']) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>
</div>