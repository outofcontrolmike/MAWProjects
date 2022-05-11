<?php include "templates\layout\header.php";
?>
<div class="ui container fluid very padded relaxed">
    <br>
    <div class="ui container fluid">
        <div class="ui action input" id="recipeIndexSearch">
            <input type="test" name="test" id="recipeKeyword" value="" placeholder="...Type a keyword into here">
            <div class="ui button" onclick="submitKeyword()">Go</div>
        </div>
    </div>
    <div class="ui cards container fluid small" id="recipeCardsIndex">
        <!-- <?= $this->Html->link('Add Recipe', ['action' => 'add'], ['class' => 'button']) ?> -->

        <!-- Here is where we iterate through our $Recipes query object, printing out recipe info -->
        <?php
        foreach ($recipes as $recipe) :
            $totalMinutes = 0;

            $recipeBody = preg_split('#(\r\n?|\n)+#', $recipe->body);


            //get cook time
            $cookMinutes = intval($recipe->cook_time);
            $prepMinutes = intval($recipe->prep_time);
            $totalMinutes = $cookMinutes + $prepMinutes;
        ?>
            <div class="ui card link segment very padded raised" id="recipeCard">
                <div class=" image" id="recipeImage">
                    <?php if ($recipe->image != null) : ?>
                        <?= $this->Html->image($recipe->image, ['class' => "ui image"]) ?>
                    <?php else : ?>
                        <?= $this->Html->image('comingSoon.jpg', array('alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25')); ?></a>
                    <?php endif ?>
                </div>
                <div class="content">
                    <div class="header" id="recipeTitle"><?= $this->Html->link($recipe->title, ['action' => 'view', $recipe->slug], ['id' => "recipeTitle"]) ?></div>
                    <div class="ui meta">
                        <i class="clock outline icon"></i>
                        <span class="ui date"><?php echo $totalMinutes ?> min</span>
                    </div>
                    <div class="description" id="recipeBody">
                        <?php foreach ($recipeBody as $bodyPart) {
                            $uppercaseFirst = ucfirst($bodyPart);
                            echo "<p>$bodyPart</p>";
                        } ?>
                    </div>
                </div>
                <div class="extra content">
                    <span class="right floated">
                        <?= date_format($recipe->created, "m/d/Y") ?>
                    </span>
                    <span>

                        <a href="http://localhost:8765/users/view/<?= $recipe->user_id ?>"> <i class="user icon teal"></i></a>
                    </span>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<script>
    //Will search for whatever user entered
    function submitKeyword() {
        let keyword = document.getElementById('recipeKeyword');
        if (keyword.value != "") {
            window.location.assign("http://localhost:8765/recipes/tagged/" + keyword.value);
        }
    }
</script>