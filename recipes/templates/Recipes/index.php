<?php include "templates\layout\header.php" ?>
<div class="index content" id="recipesIndex">
<h3>Public Recipes</h3>



<?= $this->Html->link('Add Recipe', ['action' => 'add'], ['class' => 'button']) ?>

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