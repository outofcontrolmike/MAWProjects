<!-- File: templates/Recipes/view.php -->
<?php include "templates\layout\header.php" ?>

<?php $creator = "";
$creator = $_SESSION["Auth"]["id"];

//Separate Ingredients
$ingredients = preg_split("/[,]+/", $recipe->ingredients);

//Separate Direction text into paragraphs.
$directions = preg_split('#(\r\n?|\n)+#', $recipe->directions);

$recipeBody = preg_split('#(\r\n?|\n)+#', $recipe->body);

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
        <p><b>Tags:</b> <?= h($recipe->tag_string) ?></p>
        <hr>
        <div class="row" id="recipeBody">
            <h1>Description</h1>
            <?php foreach ($recipeBody as $bodyPart) {
                $uppercaseFirst = ucfirst($bodyPart);
                echo "<p>$uppercaseFirst</p>";
            } ?>
        </div>

    </div>

    <!-- 2nd column - Ingredients & Directions -->
    <div class="ui column container" id="recipeView2ndColumn">
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
            <?php $counter = 1; ?>
            <?php foreach ($directions as $direction) {
                $uppercaseFirst = ucfirst($direction);
                echo "<b>Step $counter</b>";
                echo "<p>$direction</p>";
                $counter++;
            } ?>
        </div>
    </div>
</div>
<br>

<!-- <?php if ($creator === $recipe->user_id) : ?>
                <hr>
                <?= $this->Html->link('Edit', ['action' => 'edit', $recipe->slug], ['class' => 'button']) ?>
            <?php else : null  ?>
            <?php endif; ?> -->