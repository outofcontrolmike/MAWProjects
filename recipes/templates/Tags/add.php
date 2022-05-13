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

<div class="ui container fluid centered center aligned" id="signUpFormContainer">
    <div class="ui container segment raised very padded stacked centered" id="signUpForm">
        <p> <?php echo $this->Html->image('icon.png', array('alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'width' => "50", 'height' => '50')); ?></p>
        <div class="ui form big equal width">
            <?= $this->Form->create($tag) ?>
            <p style="text-align:center">
                <span class="ui text teal big"><?= __('Create Tag') ?></span>
            </p>
            <br>
            <div id="editFormInputGroups">
                <div class="ui fields">
                    <div class="ui field">
                        <?= $this->Form->control('title', ['class' => "ui", 'label' => "", 'placeholder' => "Tag Name", 'required' => true]) ?>
                        <br>
                    </div>
                </div>
                <div id="tagsContainer">
                    <?= $this->Form->control('recipes._ids', ['label' => "Recipes to Tag (Hold Control Key and then click each recipe you want to tag)", 'class' => 'recipesTextArea', 'options' => $recipes]); ?>
                </div>
                <br>
            </div>

            <?= $this->Form->button(__('Create New Tag'), ['class' => 'ui button teal fluid circular']) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>
</div>