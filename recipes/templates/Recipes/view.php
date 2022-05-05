<!-- File: templates/Recipes/view.php -->
<?php include "templates\layout\header.php" ?>

<?php $creator = "";
$creator = $_SESSION["Auth"]["id"];

$ingredients = preg_split("/[,]+/", $recipe->ingredients);
?>



<br>

<div class="ui two column container stackable grid segment raised relaxed">
    <div class="ui column container">
        <!-- img -->
        <div class="container">
            <?php if ($recipe->image != null) : ?>
                <?= $this->Html->image($recipe->image, ['class' => "ui image huge centered recipeCardImage"]) ?>
            <?php else : ?>
                <?= $this->Html->image('comingSoon.jpg', array('class' => "ui image huge recipeCardImage", 'alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'height' => "200px",)); ?></a>
            <?php endif ?>
        </div>
        <h1 class="ui text center aligned"><?= h($recipe->title) ?></h1>
        <p>PrepTime: <?= $recipe->prep_time ?> min</p>
        <p>CookTime: <?= $recipe->cook_time ?> min</p>
        <p>Servings: <?= $recipe->servings ?> </p>
        <p>Created: <?= date_format($recipe->created, "m/d/Y") ?></p>
        <p>Created By: <?= $recipe->user_id ?></p>
        <hr>
        <p><b>Tags:</b> <?= h($recipe->tag_string) ?></p>

    </div>

    <!-- 2nd column-->
    <div class="ui column container">
        <div class="row">
            <h1>Ingredients</h1>
            <?php foreach ($ingredients as $ingredient) {
                $uppercaseFirst = ucfirst($ingredient);
                echo "<p>$uppercaseFirst</p>";
            } ?>
        </div>
        <br>
        <hr>
        <div class="row">
            <h1>Directions</h1>
            <p><?= h($recipe->directions) ?></p>
        </div>
    </div>
</div>
<br>

<!-- <?php if ($creator === $recipe->user_id) : ?>
                <hr>
                <?= $this->Html->link('Edit', ['action' => 'edit', $recipe->slug], ['class' => 'button']) ?>
            <?php else : null  ?>
            <?php endif; ?> -->