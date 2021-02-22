<h1>Articles</h1>
<table>
    <tr>
        <th>Charaacters View</th>
        <th>Totallly Testing</th>
    </tr>

    <!-- Here is where we iterate through our $articles query object, printing out article info -->

    <?php foreach ($characters as $character): ?>
    <tr>
        <td>
            <?= $this->Html->link($character->title, ['action' => 'view', $character->name]) ?>
        </td>
        <td>
            <?= $character->created->format(DATE_RFC850) ?>
        </td>
    </tr>
    <?php endforeach; ?>
</table>