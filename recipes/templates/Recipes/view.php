<!-- File: templates/Recipes/view.php -->
<div class="container content">
<h1><?= h($recipe->title) ?></h1>
<img }src="<?= $recipe->photo_paths ?>" />
<p><small>PrepTime: <?= $recipe->prep_time?></small></p>
<p><small>CookTime: <?= $recipe->cook_time?></small></p>
<p><small>Servings: <?= $recipe->servings?></small></p>
<p><h4>Ingredients: <?= h($recipe->ingredients) ?></h4></p>
<p><h4>Directions: <?= h($recipe->directions) ?></h4></p>
<p><b>Tags:</b> <?= h($recipe->tag_string) ?></p>
<p><small>Created: <?= $recipe->created->format(DATE_RFC850) ?></small></p>
<p><small>Last Modified: <?= $recipe->created->format(DATE_RFC850) ?></small></p>
<p>Creator: <?= $recipe->user_id?></p>
<hr>
<p><?= $this->Html->link('Edit', ['action' => 'edit', $recipe->slug]) ?></p>
</div>