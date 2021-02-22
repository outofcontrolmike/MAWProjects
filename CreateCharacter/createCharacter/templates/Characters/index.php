
<h1>Characters</h1>
<table>
    <tr>
        <th>Name</th>
        <th>Created</th>
        <th>Race</th>
        <th>Age</th>
        <th>Photo</th>
        <th>Created By</th>
    </tr>

    <!-- Here is where we iterate through our $articles query object, printing out article info -->

    <?php foreach ($characters as $char): ?>
    <tr>
        <td>
            <!--Sets up our names to link to the view of the character -->
            <?= $this->Html->link($char->name, ['action' => 'view'])?>
        </td>
        <td>
            <?= $char->timestamp ?>
        </td>
        <td>
        <?= $char->race ?>
        </td>
        <td>
        <?= $char->age ?>
        </td>
        <td>
        <?= $char->photo ?>
        </td>
        <td>
        <?= $char->createdBy ?>
        </td>
    </tr>
    <?php endforeach; ?>
</table>