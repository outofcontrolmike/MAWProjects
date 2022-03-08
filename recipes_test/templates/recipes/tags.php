<div class="row">
<div class="column">

<h1>
    Recipes Tagged with <?= $this->Text->toList(h($tags), 'or') ?>
</h1>

<section>
<?php foreach ($recipes as $recipe): ?>
    <article>
        <!-- Use the HtmlHelper to create a link -->
        <h4><?= $this->Html->link(
            $recipe->title,
            ['controller' => 'Recipes', 'action' => 'view', $recipe->id]
        ) ?></h4>
        <span><?= h($recipe->created) ?></span>
    </article>
<?php endforeach; ?>
</section>

        </div>
        </div>