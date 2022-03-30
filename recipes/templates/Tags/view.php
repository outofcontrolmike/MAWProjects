<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Tag $tag
 */
?>
<?php include "templates\layout\header.php" ?>

<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('Edit Tag'), ['action' => 'edit', $tag->id], ['class' => 'side-nav-item']) ?>
            <?= $this->Form->postLink(__('Delete Tag'), ['action' => 'delete', $tag->id], ['confirm' => __('Are you sure you want to delete # {0}?', $tag->id), 'class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('List Tags'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('New Tag'), ['action' => 'add'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="tags view content">
            <h3><?= h($tag->title) ?></h3>
            <table>
                <tr>
                    <th><?= __('Title') ?></th>
                    <td><?= h($tag->title) ?></td>
                </tr>
                <tr>
                    <th><?= __('Id') ?></th>
                    <td><?= $this->Number->format($tag->id) ?></td>
                </tr>
                <tr>
                    <th><?= __('Created') ?></th>
                    <td><?= h($tag->created) ?></td>
                </tr>
                <tr>
                    <th><?= __('Modified') ?></th>
                    <td><?= h($tag->modified) ?></td>
                </tr>
            </table>
            <div class="related">
                <h4><?= __('Related Recipes') ?></h4>
                <?php if (!empty($tag->recipes)) : ?>
                <div class="table-responsive">
                    <table>
                        <tr>
                            <th><?= __('Id') ?></th>
                            <th><?= __('User Id') ?></th>
                            <th><?= __('Private View') ?></th>
                            <th><?= __('Title') ?></th>
                            <th><?= __('Slug') ?></th>
                            <th><?= __('Body') ?></th>
                            <th><?= __('Ingredients') ?></th>
                            <th><?= __('Prep Time') ?></th>
                            <th><?= __('Cook Time') ?></th>
                            <th><?= __('Servings') ?></th>
                            <th><?= __('Directions') ?></th>
                            <th><?= __('Photo Paths') ?></th>
                            <th><?= __('Published') ?></th>
                            <th><?= __('Created') ?></th>
                            <th><?= __('Modified') ?></th>
                            <th class="actions"><?= __('Actions') ?></th>
                        </tr>
                        <?php foreach ($tag->recipes as $recipes) : ?>
                        <tr>
                            <td><?= h($recipes->id) ?></td>
                            <td><?= h($recipes->user_id) ?></td>
                            <td><?= h($recipes->private_view) ?></td>
                            <td><?= h($recipes->title) ?></td>
                            <td><?= h($recipes->slug) ?></td>
                            <td><?= h($recipes->body) ?></td>
                            <td><?= h($recipes->ingredients) ?></td>
                            <td><?= h($recipes->prep_time) ?></td>
                            <td><?= h($recipes->cook_time) ?></td>
                            <td><?= h($recipes->servings) ?></td>
                            <td><?= h($recipes->directions) ?></td>
                            <td><?= h($recipes->photo_paths) ?></td>
                            <td><?= h($recipes->published) ?></td>
                            <td><?= h($recipes->created) ?></td>
                            <td><?= h($recipes->modified) ?></td>
                            <td class="actions">
                                <?= $this->Html->link(__('View'), ['controller' => 'Recipes', 'action' => 'view', $recipes->id]) ?>
                                <?= $this->Html->link(__('Edit'), ['controller' => 'Recipes', 'action' => 'edit', $recipes->id]) ?>
                                <?= $this->Form->postLink(__('Delete'), ['controller' => 'Recipes', 'action' => 'delete', $recipes->id], ['confirm' => __('Are you sure you want to delete # {0}?', $recipes->id)]) ?>
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
