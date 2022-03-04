<!-- File: templates/Recipes/add.php -->

<h1>Add Recipe</h1>
<?php
    echo $this->Form->create($recipe);
    // Hard code the user for now.
    echo $this->Form->control('user_id', ['type' => 'hidden', 'value' => 1]);
    echo $this->Form->control('title');
    echo $this->Form->control('description', ['rows' => '3']);
    echo $this->Form->button(__('Save Recipe'));
    echo $this->Form->end();
?>