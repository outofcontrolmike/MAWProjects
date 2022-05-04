<?php include "templates\layout\header.php" ?>
<div class="ui container fluid very padded relaxed">
    <h3>Public Recipes</h3>
    <div>
        <input name="test" id="recipeKeyword" value="" placeholder="...Type a keyword into here">
        <button onclick="submitKeyword()" class="button">Submit Keyword</button>
    </div>
    <div class="ui cards centered container fluid" id="recipeCardsIndex">
        <!-- <?= $this->Html->link('Add Recipe', ['action' => 'add'], ['class' => 'button']) ?> -->

        <!-- Here is where we iterate through our $Recipes query object, printing out recipe info -->
        <?php

        foreach ($recipes as $recipe) : ?>
            <div class="ui card ">
                <div class="image" id="recipeImage">
                    <?php if ($recipe->image != null) : ?>
                        <?= $this->Html->image($recipe->image, ['class' => "ui image"]) ?>
                    <?php else : ?>
                        <?= $this->Html->image('comingSoon.jpg', array('alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25')); ?></a>
                    <?php endif ?>
                </div>
                <div class=" content">
                    <div class="header" style="text-decoration: none"><?= $this->Html->link($recipe->title, ['action' => 'view', $recipe->slug]) ?></div>
                    <div class="description">
                        <?= $recipe->body ?>
                    </div>
                </div>
                <div class="extra content">
                    <span class="right floated">
                        <?= date_format($recipe->created, "m/d/Y") ?>
                    </span>
                    <span>
                        <i class="user icon"></i>
                        Created By: <a href="http://localhost:8765/users/view/<?= $recipe->user_id ?>"><?= $recipe->user_id ?></a>
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