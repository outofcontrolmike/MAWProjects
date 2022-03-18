<!-- File: templates/Recipes/view.php -->

<h1><?= h($recipe->title) ?></h1>
<p><?= h($recipe->body) ?></p>
<p><small>Created: <?= $recipe->created->format(DATE_RFC850) ?></small></p>
<p><?= $this->Html->link('Edit', ['action' => 'edit', $recipe->slug]) ?></p>
<p><b>Tags:</b> <?= h($recipe->tag_string) ?></p>
