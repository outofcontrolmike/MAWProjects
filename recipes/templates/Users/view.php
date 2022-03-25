<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User $user
 */
?>
<div class="row">
    <!-- <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('Edit User'), ['action' => 'edit', $user->id], ['class' => 'side-nav-item']) ?>
            <?= $this->Form->postLink(__('Delete User'), ['action' => 'delete', $user->id], ['confirm' => __('Are you sure you want to delete # {0}?', $user->id), 'class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('List Users'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
            <?= $this->Html->link(__('New User'), ['action' => 'add'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside> -->
    <div class="column-responsive">
        <div class="users view content">
            <h3><?= h($user->id) ?></h3>
            <table>
                <tr>
                    <th><?= __('User Name') ?></th>
                    <td><?= h($user->user_name) ?></td>
                </tr>
                <tr>
                    <th><?= __('Email') ?></th>
                    <td><?= h($user->email) ?></td>
                </tr>
                <tr>
                    <th><?= __('Bio') ?></th>
                    <td><?= h($user->bio) ?></td>
                </tr>
                <tr>
                    <th><?= __('Instagram Link') ?></th>
                    <td><?= h($user->instagram_link) ?></td>
                </tr>
                <tr>
                    <th><?= __('Id') ?></th>
                    <td><?= $this->Number->format($user->id) ?></td>
                </tr>
                <tr>
                    <th><?= __('Created') ?></th>
                    <td><?= h($user->created) ?></td>
                </tr>
                <tr>
                    <th><?= __('Modified') ?></th>
                    <td><?= h($user->modified) ?></td>
                </tr>
            </table>
            <div class="related">
                <h4><?= __("User's Created Recipes") ?></h4>
                <button><a  target="_self" style="color: black" href="http://localhost:8765/recipes/add">Add Recipe</a>
</button>
                <?php if (!empty($user->recipes)) : ?>
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
                        <?php foreach ($user->recipes as $recipes) : ?>
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
                                <?= $this->Html->link(__('View'), ['controller' => 'Recipes', 'action' => 'view', $recipes->slug]) ?>
                                <?= $this->Html->link(__('Edit'), ['controller' => 'Recipes', 'action' => 'edit', $recipes->slug]) ?>
                                <?= $this->Form->postLink(__('Delete'), ['controller' => 'Recipes', 'action' => 'delete', $recipes->slug], ['confirm' => __('Are you sure you want to delete # {0}?', $recipes->id)]) ?>
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
