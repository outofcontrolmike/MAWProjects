<?php include "templates\layout\header.php" ?>

<div class="users form content">
    <?= $this->Flash->render() ?>
    <?= $this->Form->create() ?>
    <fieldset>
        <?= $this->Form->control('Search by Keyword', ['required' => true]) ?>
    </fieldset>
    <?= $this->Form->submit(__('Submit Search'),['controller' => "recipes/tagged"],['action' => 'test']) ?>
    <?= $this->Form->end() ?>

    
</div>
<div class="index content" id="recipesIndex">
<h3>Public Recipes</h3>



<!-- <?= $this->Html->link('Add Recipe', ['action' => 'add'], ['class' => 'button']) ?> -->

<!-- Add input field -->

<table>
    <tr>
        <th>Title</th>
        <th>Created</th>
        <th>Creator</th>
        <th></th>
    </tr>

    <!-- Here is where we iterate through our $Recipes query object, printing out recipe info -->

    <?php foreach ($recipes as $recipe): ?>
    <tr>
        <td>
            <?= $this->Html->link($recipe->title, ['action' => 'view', $recipe->slug]) ?>
        </td>
        <td>
            <?= $recipe->created->format(DATE_RFC850) ?>
        </td>
        <td>
        <a href="http://localhost:8765/users/view/<?=$recipe->user_id?>"><?= $recipe->user_id?></a>
        </td>
        <td>
        <img src="<?= $recipe->photo_paths ?>" height="100px" width:="150px" />

    </td>
        <!-- <td>
            <?= $this->Html->link('Edit', ['action' => 'edit', $recipe->slug]) ?>
        </td> -->
        <!-- <td>
        <?= $this->Form->postLink(
                'Delete',
                ['action' => 'delete', $recipe->slug],
                ['confirm' => 'Are you sure?'])
            ?>
            </td> -->
    </tr>
    <?php endforeach; ?>
</table>
        </div>