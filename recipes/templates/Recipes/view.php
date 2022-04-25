<!-- File: templates/Recipes/view.php -->
<?php include "templates\layout\header.php" ?>

<?php $creator = "";
$creator = $_SESSION["Auth"]["id"];
?>


<div class="container content">
    <h1><?= h($recipe->title) ?></h1>
    <?php if ($recipe->image != null) : ?>
        <p><?= $this->Html->image($recipe->image) ?></p>
    <?php endif ?>
    <p><small>PrepTime: <?= $recipe->prep_time ?> min</small></p>
    <p><small>CookTime: <?= $recipe->cook_time ?> min</small></p>
    <p><small>Servings: <?= $recipe->servings ?></small></p>
    <p>Description/Summary: <?= $recipe->body ?></p>
    <p>
    <h4>Ingredients: <?= h($recipe->ingredients) ?></h4>
    </p>
    <p>
    <h4>Directions: <?= h($recipe->directions) ?></h4>
    </p>
    <p><b>Tags:</b> <?= h($recipe->tag_string) ?></p>
    <p><small>Created: <?= $recipe->created->format(DATE_RFC850) ?></small></p>
    <p><small>Last Modified: <?= $recipe->created->format(DATE_RFC850) ?></small></p>
    <p>Created By: <?= $recipe->user_id ?></p>
    <hr>
    <?php if ($creator === $recipe->user_id) : ?>
        <?= $this->Html->link('Edit', ['action' => 'edit', $recipe->slug], ['class' => 'button']) ?>
    <?php else : null  ?>
    <?php endif; ?>
</div>