
<h1><?= h($character->name) ?></h1>
<p><?= h($character->description) ?> </p>
<p><small>Created: <?= $character->timestamp ?></small></p>
<p><?= $this->Html->link('Edit', ['action' => 'edit', $character->slug]) ?></p>