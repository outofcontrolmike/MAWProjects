<!-- File: templates/Recipes/add.php -->
<?php include "templates\layout\header.php" ?>

<div class="ui container segment very padded relaxed raised">
    <h1>Add Recipe</h1>
    <div class="ui form">
        <?php
        echo $this->Form->create($recipe, ['type' => 'file']);
        echo $this->Form->control('user_id', ['type' => 'hidden', 'value' => 1]);
        echo $this->Form->control('title', ['label' => "Recipe Name"]);
        echo $this->Form->control('body', ['label' => "Description/Summary"], ['rows' => '3']);
        echo $this->Form->control('prep_time', ['label' => "Prep-Time (in minutes)"]);
        echo $this->Form->control('cook_time', ['label' => "Cook-Time (in minutes)"]);
        echo $this->Form->control('servings');
        echo $this->Form->control('ingredients');
        echo $this->Form->control('directions');
        echo $this->Form->control('image_file', ['type' => 'file'], ['label' => "Image (place url to your photo here.)"]);
        echo $this->Form->control('tag_string', ['label' => "Search Tags (enter comma separated words -eg: peppers,onions,sharp cheddar,ect..)"], ['type' => 'text']);
        echo $this->Form->button(__('Save Recipe'), ['class' => "ui button fluid red"]);
        echo "<br>";
        echo $this->Form->end();
        ?>
    </div>
</div>