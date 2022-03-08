<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Recipe $recipe
 * @var string[]|\Cake\Collection\CollectionInterface $users
 * @var string[]|\Cake\Collection\CollectionInterface $tags
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Form->postLink(
                __('Delete'),
                ['action' => 'delete', $recipe->id],
                ['confirm' => __('Are you sure you want to delete # {0}?', $recipe->id), 'class' => 'side-nav-item']
            ) ?>
            <?= $this->Html->link(__('List Recipes'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="recipes form content">
            <?= $this->Form->create($recipe) ?>
            <fieldset>
                <legend><?= __('Edit Recipe') ?></legend>
                <?php
                    echo $this->Form->control('user_id', ['options' => $users]);
                    echo $this->Form->control('private_view');
                    echo $this->Form->control('title');
                    echo $this->Form->control('slug');
                    echo $this->Form->control('description');
                    echo $this->Form->control('ingredients');
                    echo $this->Form->control('prep_time');
                    echo $this->Form->control('cook_time');
                    echo $this->Form->control('servings');
                    echo $this->Form->control('directions');
                    echo $this->Form->control('photo_paths');
                    echo $this->Form->control('published');
                    echo $this->Form->control('tags._ids', ['options' => $tags]);
                ?>
            </fieldset>
            <?= $this->Form->button(__('Submit')) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>
