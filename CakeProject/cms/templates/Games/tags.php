<!-- In templates/Articles/tags.php -->
<h1>
    Games tagged with
    <?= $this->Text->toList(h($tags), 'or') ?>
</h1>

<section>
<?php foreach ($games as $game): ?>
    <article>
        <!-- Use the HtmlHelper to create a link -->
        <h4><?= $this->Html->link(
            $game->title,
            ['controller' => 'Games', 'action' => 'view', $game->slug]
        ) ?></h4>
        <span><?= h($game->created) ?></span>
    </article>
<?php endforeach; ?>
</section>
