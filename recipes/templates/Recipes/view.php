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

<div class="ui container">
    <div class="ui segment raised stacked tall">
        <div class="ui items">
            <div class="item">
                <div class="ui image medium">
                    <?php if ($recipe->image != null) : ?>
                        <?= $this->Html->image($recipe->image, ['class' => "ui image medium  rounded recipeCardImage"]) ?>
                    <?php else : ?>
                        <?= $this->Html->image('comingSoon.jpg', array('class' => "ui big huge recipeCardImage", 'alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'height' => "200px",)); ?></a>
                    <?php endif ?>
                </div>
                <div class="content" style="font-size: 20px;">
                    <h1 class="ui text centered aligned"><?= h($recipe->title) ?></h1>
                    <div class="">
                        <span>
                            <div class="row" id="recipeBody">
                                <?php foreach ($recipeBody as $bodyPart) {
                                    $uppercaseFirst = ucfirst($bodyPart);
                                    echo "<p>$uppercaseFirst</p>";
                                } ?>
                            </div>
                            <br>
                            <p>PrepTime: <?= $recipe->prep_time ?> min</p>
                            <p>CookTime: <?= $recipe->cook_time ?> min</p>
                            <p>Servings: <?= $recipe->servings ?> </p>
                            <p>Created: <?= date_format($recipe->created, "m/d/Y") ?></p>
                            <p>Created By: <?= $recipe->user_id ?></p>
                            <p><b>Tags:</b> <?= h($recipe->tag_string) ?></p>
                            <i class="share icon teal large" onclick="shareURL();"></i>
                        </span>
                    </div>
                    <div class="description">
                        <p></p>
                    </div>
                    <div class="extra">
                        Additional Details
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


<!-- New recipe card -->

<div class="ui container">
    <div class="ui segment raised stacked tall">
        <div class="ui two column doubling stackable grid container">
            <div class="ui column">
                <?php if ($recipe->image != null) : ?>
                    <?= $this->Html->image($recipe->image, ['class' => "ui image medium  centered rounded recipeCardImage"]) ?>
                <?php else : ?>
                    <?= $this->Html->image('comingSoon.jpg', array('class' => "ui big huge recipeCardImage", 'alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'height' => "200px",)); ?></a>
                <?php endif ?>
            </div>
            <div class="ui column center aligned large" style="font: 20px;">
                <h1 class="ui text center aligned"><?= h($recipe->title) ?></h1>
                <p>PrepTime: <?= $recipe->prep_time ?> min</p>
                <p>CookTime: <?= $recipe->cook_time ?> min</p>
                <p>Servings: <?= $recipe->servings ?> </p>
                <p>Created: <?= date_format($recipe->created, "m/d/Y") ?></p>
                <p>Created By: <?= $recipe->user_id ?></p>
                <p><b>Tags:</b> <?= h($recipe->tag_string) ?></p>
                <i class="share icon teal large" onclick="shareURL();"></i>

            </div>
        </div>
        <div class="ui divider">

        </div>
        <div class="ui column very padded relaxed">
            <p><span class="ui text large teal">
                    <div class="row" id="recipeBody">
                        <h1>Description</h1>
                        <?php foreach ($recipeBody as $bodyPart) {
                            $uppercaseFirst = ucfirst($bodyPart);
                            echo "<p>$uppercaseFirst</p>";
                        } ?>
                    </div>
                </span></p>

            <p><span class="ui text large teal">
                    <div class="row">
                        <h1>Ingredients</h1>
                        <?php foreach ($ingredients as $ingredient) {
                            $uppercaseFirst = ucfirst($ingredient);
                            echo "<p>$uppercaseFirst</p>";
                        } ?>
                    </div>
                </span></p>
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
</div>

<!-- End new card -->

<!-- 
<div class="ui container segment stacked raised relaxed">
    <div class="ui column container">
<div class="container">
    <input type="hidden" value="" id="inputTest" />
    <?php if ($recipe->image != null) : ?>
        <?= $this->Html->image($recipe->image, ['class' => "ui image big centered recipeCardImage"]) ?>
    <?php else : ?>
        <?= $this->Html->image('comingSoon.jpg', array('class' => "ui big huge recipeCardImage", 'alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'height' => "200px",)); ?></a>
    <?php endif ?>
</div>
<i class="share icon teal large" onclick="shareURL();"></i>

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

2nd column - Ingredients & Directions -->
<!-- <div class="ui column container" id="recipeView2ndColumn">
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
</div>  -->
<br>

<!-- <?php if ($creator === $recipe->user_id) : ?>
                <hr>
                <?= $this->Html->link('Edit', ['action' => 'edit', $recipe->slug], ['class' => 'button']) ?>
            <?php else : null  ?>
            <?php endif; ?> -->

<script>
    function shareURL() {
        let url = window.location.href;
        let input = document.getElementById('inputTest');

        //select hidden field
        input.value = url;
        input.select();

        //copy to clipboard
        navigator.clipboard.writeText(input.value);
        window.alert("this url is copied! : " + input.value);
    }
</script>