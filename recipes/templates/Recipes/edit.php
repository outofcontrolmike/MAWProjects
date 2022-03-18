<!-- File: templates/Recipes/edit.php -->

<h1>Edit Recipe</h1>
<?php
    echo $this->Form->create($recipe);
    echo $this->Form->control('user_id', ['type' => 'hidden']);
    echo $this->Form->control('title');
    echo $this->Form->control('body', ['rows' => '3']);
    echo $this->Form->control('tag_string', ['type' => 'text']);
    echo $this->Form->button(__('Save Recipe'));
    echo $this->Form->end();
?>