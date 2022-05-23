<!-- In templates/Recipes/tags.php -->
<?php include "templates\layout\header.php" ?>
<div class="ui container fluid very padded relaxed">
    <br>
    <!--  -->
    <div class="ui message container teal" id="tagMessage">
        <i onclick=" removeMessage()" class="close icon"></i>
        <div class="header" id="tagHeader">
            <!-- Purposely empty for js onLoad function -->
        </div>
    </div>
    <div style="height:fit-content">
        <div class="ui cards container large three" id="recipeCardsIndex">
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
                    <div class="image" id="recipeImage">
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
</div>

<script>
    //Set up Tag on page load
    window.onload(getTagName());

    //Will search for whatever user entered
    function submitKeyword() {
        let keyword = document.getElementById('recipeKeyword');
        if (keyword.value != "") {
            window.location.assign("http://localhost:8765/recipes/tagged/" + keyword.value);
        }
    }

    //Option to remove Tag Message Notification
    function removeMessage() {
        console.log("test");
        let tagMessage = document.getElementById('tagMessage');
        tagMessage.remove();
    }

    //Grabs last part of url for search result
    function getTagName() {
        let slug = window.location.href.substring(
            window.location.href.lastIndexOf("/") + 1
        );

        let recipes = document.getElementById('recipeCardsIndex');
        let recipesLength = recipes.children.length;

        if (recipesLength > 0) {
            document.getElementById('tagHeader').innerHTML = recipesLength + " Related Recipes fetched for the keyword -  <span> " + slug + "</span>";
        } else {
            document.getElementById("tagMessage").classList = "ui positive message container red";
            document.getElementById('tagHeader').innerHTML = "No Recipes have been tagged with the keyword -  " + slug + "</span>";
        }
    }
</script>