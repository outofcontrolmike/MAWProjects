<h1>Games</h1>
<table>
    <tr>
        <th>Title</th>
        <th>Created</th>
    </tr>
    <!-- Here is where we iterate through our $articles query object, printing out article info -->
    <?php foreach ($games as $game): ?>
    <tr>
        <td>
            <?= $this->Html->link($game->title, ['action' => 'view', $game->slug]) ?>
        </td>
        <td>
            <?= $game->created->format(DATE_RFC850) ?>
        </td>
    </tr>
    <?php endforeach; ?>
</table>