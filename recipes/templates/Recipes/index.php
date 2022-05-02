<?php include "templates\layout\header.php" ?>
<div class="ui container">
    <h3>Public Recipes</h3>
    <div>
        <input name="test" id="recipeKeyword" value="" placeholder="...Type a keyword into here">
        <button onclick="submitKeyword()" class="button">Submit Keyword</button>
    </div>
    <div class="index" id="recipeCardsIndex">

        <!-- <?= $this->Html->link('Add Recipe', ['action' => 'add'], ['class' => 'button']) ?> -->

        <!-- Here is where we iterate through our $Recipes query object, printing out recipe info -->

        <?php foreach ($recipes as $recipe) : ?>

            <div id="recipeCard" class="content container">
                <?php if ($recipe->image != null) : ?>
                    <img><?= $this->Html->image($recipe->image) ?></img>
                <?php endif ?>
                <!-- <img src="<?= $recipe->image ?>" height="250px" width:="425px" /> -->
                <h5> <?= $this->Html->link($recipe->title, ['action' => 'view', $recipe->slug]) ?></h5>
                <p> <?= $recipe->body ?> </p>
                <hr>
                <em> Created By: <a href="http://localhost:8765/users/view/<?= $recipe->user_id ?>"><?= $recipe->user_id ?></a> </em>
                <p>Listed: <?= $recipe->created->format(DATE_RFC850) ?></p>
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