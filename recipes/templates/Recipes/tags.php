<!-- In templates/Recipes/tags.php -->
<h1>
    Recipes tagged with
    <?= $this->Text->toList(h($tags), 'or') ?>
</h1>

<section>
<?php foreach ($recipes as $recipe): ?>
    <article>
        <!-- Use the HtmlHelper to create a link -->
        <h4><?= $this->Html->link(
            $recipe->title,
            ['controller' => 'Recipes', 'action' => 'view', $recipe->slug]
        ) ?></h4>
        <span><?= h($recipe->created) ?></span>
    </article>
<?php endforeach; ?>
</section>