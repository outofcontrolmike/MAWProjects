<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Recipe $recipe
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('Edit Recipe'), ['action' => 'edit', $recipe->id], ['class' => 'side-nav-item']) ?>
            <?= $this->Form->postLink(__('Delete Recipe'), ['action' => 'delete', $recipe->id], ['confirm' => __('Are you sure you want to delete # {0}?', $recipe->id), 'class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('List Recipes'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('New Recipe'), ['action' => 'add'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="recipes view content">
            <h3><?= h($recipe->title) ?></h3>
            <table>
                <tr>
                    <th><?= __('User') ?></th>
                    <td><?= $recipe->has('user') ? $this->Html->link($recipe->user->id, ['controller' => 'Users', 'action' => 'view', $recipe->user->id]) : '' ?></td>
                </tr>
                <tr>
                    <th><?= __('Title') ?></th>
                    <td><?= h($recipe->title) ?></td>
                </tr>
                <tr>
                    <th><?= __('Slug') ?></th>
                    <td><?= h($recipe->slug) ?></td>
                </tr>
                <tr>
                    <th><?= __('Ingredients') ?></th>
                    <td><?= h($recipe->ingredients) ?></td>
                </tr>
                <tr>
                    <th><?= __('Prep Time') ?></th>
                    <td><?= h($recipe->prep_time) ?></td>
                </tr>
                <tr>
                    <th><?= __('Cook Time') ?></th>
                    <td><?= h($recipe->cook_time) ?></td>
                </tr>
                <tr>
                    <th><?= __('Directions') ?></th>
                    <td><?= h($recipe->directions) ?></td>
                </tr>
                <tr>
                    <th><?= __('Photo Paths') ?></th>
                    <td><?= h($recipe->photo_paths) ?></td>
                </tr>
                <tr>
                    <th><?= __('Id') ?></th>
                    <td><?= $this->Number->format($recipe->id) ?></td>
                </tr>
                <tr>
                    <th><?= __('Servings') ?></th>
                    <td><?= $this->Number->format($recipe->servings) ?></td>
                </tr>
                <tr>
                    <th><?= __('Created') ?></th>
                    <td><?= h($recipe->created) ?></td>
                </tr>
                <tr>
                    <th><?= __('Modified') ?></th>
                    <td><?= h($recipe->modified) ?></td>
                </tr>
                <tr>
                    <th><?= __('Private View') ?></th>
                    <td><?= $recipe->private_view ? __('Yes') : __('No'); ?></td>
                </tr>
                <tr>
                    <th><?= __('Published') ?></th>
                    <td><?= $recipe->published ? __('Yes') : __('No'); ?></td>
                </tr>
            </table>
            <div class="text">
                <strong><?= __('Description') ?></strong>
                <blockquote>
                    <?= $this->Text->autoParagraph(h($recipe->description)); ?>
                </blockquote>
            </div>
            <div class="related">
                <h4><?= __('Related Tags') ?></h4>
                <?php if (!empty($recipe->tags)) : ?>
                <div class="table-responsive">
                    <table>
                        <tr>
                            <th><?= __('Id') ?></th>
                            <th><?= __('Title') ?></th>
                            <th><?= __('Created') ?></th>
                            <th><?= __('Modified') ?></th>
                            <th class="actions"><?= __('Actions') ?></th>
                        </tr>
                        <?php foreach ($recipe->tags as $tags) : ?>
                        <tr>
                            <td><?= h($tags->id) ?></td>
                            <td><?= h($tags->title) ?></td>
                            <td><?= h($tags->created) ?></td>
                            <td><?= h($tags->modified) ?></td>
                            <td class="actions">
                                <?= $this->Html->link(__('View'), ['controller' => 'Tags', 'action' => 'view', $tags->id]) ?>
                                <?= $this->Html->link(__('Edit'), ['controller' => 'Tags', 'action' => 'edit', $tags->id]) ?>
                                <?= $this->Form->postLink(__('Delete'), ['controller' => 'Tags', 'action' => 'delete', $tags->id], ['confirm' => __('Are you sure you want to delete # {0}?', $tags->id)]) ?>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </table>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
