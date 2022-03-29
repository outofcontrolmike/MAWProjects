<!-- File: templates/Recipes/edit.php -->
<div class="container content">
<h1>Edit Recipe</h1>
<?php
    echo $this->Form->create($recipe);
    echo $this->Form->control('user_id', ['type' => 'hidden', 'value' => 1]);
    echo $this->Form->control('title', ['label' => "Recipe Name"]);
    echo $this->Form->control('body', ['label', "Description/Summary"],['rows' => '3']);
    echo $this->Form->control('prep_time', ['label' => "Prep-Time (in minutes)"]);
    echo $this->Form->control('cook_time', ['label' => "Cook-Time (in minutes)"]);
    echo $this->Form->control('servings');
    echo $this->Form->control('ingredients');
    echo $this->Form->control('directions');
    echo $this->Form->control('photo_paths',['label' => "Photo Path (place url to your photo here.)"]);
    echo $this->Form->control('tag_string', ['label' => "Search Tags (enter comma separated words -eg: peppers,onions,sharp cheddar,ect..)"],['type' => 'text']);
    echo $this->Form->button(__('Save Recipe'));
    echo $this->Form->end();
?>
</div>