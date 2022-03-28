<!-- File: templates/Recipes/edit.php -->
<div class="container content">
<h1>Edit Recipe</h1>
<?php
 echo $this->Form->create($recipe);
 echo $this->Form->control('user_id', ['type' => 'hidden', 'value' => 1]);
 echo $this->Form->control('title');
 echo $this->Form->control('prep_time');
 echo $this->Form->control('cook_time');
 echo $this->Form->control('servings');
 echo $this->Form->control('ingredients');
 echo $this->Form->control('directions');
 echo $this->Form->control('photo_paths');
 echo $this->Form->control('body', ['rows' => '3']);
 echo $this->Form->control('tag_string', ['type' => 'text']);
 echo $this->Form->button(__('Save Recipe'));
 echo $this->Form->end();
?>
</div>