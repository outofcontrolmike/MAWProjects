<?php include "templates\layout\header.php" ?>
<div class="content">
<h3>Public Recipes</h3>

<div class="index" id="recipeCardsIndex">
<!-- <?= $this->Html->link('Add Recipe', ['action' => 'add'], ['class' => 'button']) ?> -->

    <!-- Here is where we iterate through our $Recipes query object, printing out recipe info -->

    <?php foreach ($recipes as $recipe): ?>

        <div id="recipeCard" class="content container">
        <img src="<?= $recipe->photo_paths ?>" height="250px" width:="425px" />
            <h5> <?= $this->Html->link($recipe->title, ['action' => 'view', $recipe->slug]) ?></h5>
            <p> <?= $recipe->body ?> </p>
            <hr>
            <em> Created By: <a href="http://localhost:8765/users/view/<?=$recipe->user_id?>"><?= $recipe->user_id?></a> </em>
            <p>Listed: <?= $recipe->created->format(DATE_RFC850) ?></p>
    </div>
    <?php endforeach; ?>
</div>
    </div>