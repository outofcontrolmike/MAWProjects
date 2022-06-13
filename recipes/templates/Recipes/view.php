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
<div class="ui segment raised stacked container" style="width:fit-content">
    <div class="row">
        <?php if ($recipe->image != null) : ?>
            <?= $this->Html->image($recipe->image, ['class' => "ui image big rounded"]) ?>
        <?php else : ?>
            <?= $this->Html->image('comingSoon.jpg', array('class' => "ui image big", 'alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'height' => "200px",)); ?></a>
        <?php endif ?>
    </div>
    <br>
    <div class="row">
        <div class="ui center aligned big">
            <span class=" ui text big aligned header centered">
                <p><?= h($recipe->title) ?></p>
            </span>
            <input type="hidden" value="" id="inputTest" />

            <div class="ui list large very padded">
                <p>
                <div class="item"><b>Prep Time:</b> <?= $recipe->prep_time ?> min</div>
                </p>
                <p>
                <div class="item"><b>Cook Time:</b> <?= $recipe->cook_time ?> min</div>
                </p>
                <p>
                <div class="item"><b>Servings: </b> <?= $recipe->servings ?> </div>
                </p>
                <p>
                <div class="item"><b>Created: </b><?= date_format($recipe->created, "m/d/Y") ?> </div>
                </p>
                <p>
                <div class="item"><b>Tags:</b> <?= h($recipe->tag_string) ?> </div>
                </p>
                <p>
                <div class="item">
                    <i class="share icon teal big" onclick="shareURL();"></i>
                    <i>

                        <a href="http://localhost:8765/users/view/<?= $recipe->user_id ?>"> <i class="user icon teal big"></i></a>
                    </i>
                </div>
                </p>
            </div>

            <div class="ui divider">

            </div>
            <p><span class="ui text large teal">
                    <div class="row" id="recipeBody">
                        <h1>Description</h1>
                        <?php foreach ($recipeBody as $bodyPart) {
                            $uppercaseFirst = ucfirst($bodyPart);
                            echo "<p> $uppercaseFirst</p>";
                        } ?>
                    </div>
                    <div class="ui divider">

                    </div>
                    <div class="row">
                        <h1>Ingredients</h1>
                        <?php foreach ($ingredients as $ingredient) {
                            $uppercaseFirst = ucfirst($ingredient);
                            echo "<p> * $uppercaseFirst</p>";
                        } ?>
                    </div>
                    <div class="ui divider">

                    </div>
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
                </span></p>


        </div>
    </div>

</div>

<script>
    function shareURL() {
        console.log("being clipped");
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