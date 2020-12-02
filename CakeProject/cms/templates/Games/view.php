<h1><?= h($game->title) ?></h1>
<p><?= h($game->body) ?></p>
<p><b>Tags:</b> <?= h($game->tag_string) ?></p>
<p><small>Created: <?= $game->created->format(DATE_RFC850) ?></small></p>
<p><?= $this->Html->link('Edit', ['action' => 'edit', $game->slug]) ?></p>