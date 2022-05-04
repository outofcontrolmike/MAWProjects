<!-- File: templates/Recipes/view.php -->
<?php include "templates\layout\header.php" ?>

<?php $creator = "";
$creator = $_SESSION["Auth"]["id"];
?>
<div class="ui very padded relaxed raised segment container center aligned ">
    <h1><?= h($recipe->title) ?></h1>
    <?php if ($recipe->image != null) : ?>
        <?= $this->Html->image($recipe->image, ['class' => "ui image centered medium"]) ?>
    <?php else : ?>
        <?= $this->Html->image('comingSoon.jpg', array('alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'height' => "200px")); ?></a>
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
    <p><small>Created: <?= date_format($recipe->created, "m/d/Y") ?></small></p>
    <p><small>Last Modified: <?= date_format($recipe->modified, "m/d/Y") ?></small></p>
    <p>Created By: <?= $recipe->user_id ?></p>
    <?php if ($creator === $recipe->user_id) : ?>
        <hr>
        <?= $this->Html->link('Edit', ['action' => 'edit', $recipe->slug], ['class' => 'button']) ?>
    <?php else : null  ?>
    <?php endif; ?>
</div>
<br>