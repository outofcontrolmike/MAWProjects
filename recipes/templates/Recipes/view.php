<!-- File: templates/Recipes/view.php -->
<?php include "templates\layout\header.php" ?>

<?php $creator = "";
$creator = $_SESSION["Auth"]["id"];
?>

<br>
<div class="ui raised segment container center aligned" id="recipeCardView">
    <!-- img -->
    <div class="row" >
        <div class="container">
            <?php if ($recipe->image != null) : ?>
                <?= $this->Html->image($recipe->image, ['class' => "ui image big centered recipeCardImage"]) ?>
            <?php else : ?>
                <?= $this->Html->image('comingSoon.jpg', array('alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'height' => "200px")); ?></a>
            <?php endif ?>
        </div>
    </div>
    <!-- two column container grid-->
    <div class="row">
        <div class="ui two column container stackable grid">
            <div class="column">
                <h1><?= h($recipe->title) ?></h1>
                <p><small>PrepTime: <?= $recipe->prep_time ?> min</small></p>
                <p><small>CookTime: <?= $recipe->cook_time ?> min</small></p>
                <p><small>Servings: <?= $recipe->servings ?></small></p>
                <p><small>Created: <?= date_format($recipe->created, "m/d/Y") ?></small></p>
                <p>Created By: <?= $recipe->user_id ?></p>
            </div>
            <div class="column">
                <h4>Ingredients: <?= h($recipe->ingredients) ?></h4>
                <p><b>Tags:</b> <?= h($recipe->tag_string) ?></p>

            </div>
        </div>
        <hr>
    </div>
    <!-- Directions -->
    <div class="row">
        <div class="container">
            <h4>Directions: <?= h($recipe->directions) ?></h4>
            <?php if ($creator === $recipe->user_id) : ?>
                <hr>
                <?= $this->Html->link('Edit', ['action' => 'edit', $recipe->slug], ['class' => 'button']) ?>
            <?php else : null  ?>
            <?php endif; ?>
        </div>
    </div>
</div>
<br>