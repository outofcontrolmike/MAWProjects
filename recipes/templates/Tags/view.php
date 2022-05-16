<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Tag $tag
 */
?>
<?php include "templates\layout\header.php" ?>

<div class="ui raised segment container center" style="height: 90vh;">
    <?php
    $upperCase = ucfirst($tag->title);
    ?>
    <div class="ui top attached label big"><?= $upperCase ?> Tag view
        <span>
            <?= $this->Html->link(__('View All Tags'), ['action' => 'index'], ['class' => ' ui button teal circular', 'style' => "float:right"]) ?>
        </span>
    </div>
    <div class="related">
        <br>
        <br>
        <p></p>
        <span class="ui text big teal">Related Recipes</span>
        </p>
        <?php if (!empty($tag->recipes)) : ?>
            <div class="">
                <table class="ui table large celled">
                    <thead>
                        <th><?= __('Title') ?></th>
                        <th><?= __('Body') ?></th>
                        <th><?= __('Ingredients') ?></th>
                        <th><?= __('Prep Time') ?></th>
                        <th><?= __('Cook Time') ?></th>
                        <th><?= __('Servings') ?></th>
                        <th class=" actions"><?= __('Actions') ?></th>
                    </thead>
                    <?php foreach ($tag->recipes as $recipes) : ?>
                        <tr>
                            <td><?= $this->Html->link($recipes->title, ['controller' => 'recipes', 'action' => 'view', $recipes->slug], ['style' => "color:#00b5ad"]) ?></td>
                            <td><?= h($recipes->body) ?></td>
                            <td><?= h($recipes->ingredients) ?></td>
                            <td><?= h($recipes->prep_time) ?></td>
                            <td><?= h($recipes->cook_time) ?></td>
                            <td><?= h($recipes->servings) ?></td>
                            <td class="actions">
                                <?= $this->Html->link('<i class="ui pencil icon teal large"></i>' . __(''), ['controller' => 'Recipes', 'action' => 'edit', $recipes->slug], ['escape' => false, 'title' => __('Edit Recipe')]) ?>

                                <?= $this->Form->postLink('<i class="ui trash icon red large"></i>', ['controller' => 'Recipes', 'action' => 'delete', $recipes->slug], ['confirm' => __('Are you sure you want to delete # {0}?', $recipes->id), 'escape' => false, 'title' => __('Delete Recipe')]) ?>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </table>
            </div>
        <?php endif; ?>
    </div>
</div>
<br>
</div>