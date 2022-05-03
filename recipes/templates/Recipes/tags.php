<!-- In templates/Recipes/tags.php -->
<?php include "templates\layout\header.php" ?>
<div class="ui container segment very padded relaxed raised center aligned">
    <h1>
        Recipes tagged with
        <?= $this->Text->toList(h($tags), 'or') ?>
    </h1>

    <section>
        <?php foreach ($recipes as $recipe) : ?>
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
</div>