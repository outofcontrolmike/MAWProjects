
<h1>Recipes</h1>
<?= $this->Html->link('Add Recipe', ['action' => 'add']) ?>
<table>
    <tr>
        <th>Title</th>
        <th>Created</th>
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
            <?= $this->Html->link('Edit', ['action' => 'edit', $recipe->slug]) ?>
        </td>
        <td>
        <?= $this->Form->postLink(
                'Delete',
                ['action' => 'delete', $recipe->slug],
                ['confirm' => 'Are you sure?'])
            ?>
            </td>
    </tr>
    <?php endforeach; ?>
</table>