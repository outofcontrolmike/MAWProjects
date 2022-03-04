<!-- File: templates/Recipes/view.php -->

<h1><?= h($recipe->title) ?></h1>
<p><?= h($recipe->description) ?></p>
<p><?= h($recipe->ingredients) ?></p>
<p><?= h($recipe->prep_time) ?></p>
<p><?= h($recipe->cook_time) ?></p>
<p><?= h($recipe->servings) ?></p>
<p><?= h($recipe->directions) ?></p>
<p><small>Created: <?= $recipe->created->format(DATE_RFC850) ?></small></p>
<p><?= $this->Html->link('Edit', ['action' => 'edit', $recipe->slug]) ?></p>