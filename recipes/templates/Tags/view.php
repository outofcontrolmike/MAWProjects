<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Tag $tag
 */
?>

<script>
    function removeMessage() {
        console.log("test");
        let tagMessage = document.getElementById('tagMessage');
        tagMessage.style.visibility = "hidden";
    }
</script>
<?php include "templates\layout\header.php" ?>

<div class="ui raised segment container center" style="height: 90vh;">
    <?php
    $upperCase = ucfirst($tag->title);
    ?>
    <div class="ui top attached label big"> Tag View - <span class="ui text teal"><em><?= $upperCase ?></em></span>
        <span>
            <?= $this->Html->link(__('View All Tags'), ['action' => 'index'], ['class' => ' ui button teal circular', 'style' => "float:right"]) ?>
        </span>
    </div>
    <div class="related">
        <br>
        <br>
        <?php if (!empty($tag->recipes)) : ?>
            <div class="">
                <span class="ui text large teal">Related Recipes</span>
                <table class="ui table large celled">
                    <thead>
                        <th><?= __('Title') ?></th>
                        <th><?= __('Body') ?></th>
                        <th><?= __('Ingredients') ?></th>
                        <th><?= __('Prep Time') ?></th>
                        <th><?= __('Cook Time') ?></th>
                        <th><?= __('Servings') ?></th>
                        <th class=" actions"><?= __('Actions') ?></th>
                    </thead>
                    <?php foreach ($tag->recipes as $recipes) : ?>
                        <tr>
                            <td width="200px"><?= $this->Html->link($recipes->title, ['controller' => 'recipes', 'action' => 'view', $recipes->slug], ['style' => "color:#00b5ad"]) ?></td>
                            <td width="200px"><?= h($recipes->body) ?></td>
                            <td width="200px"><?= h($recipes->ingredients) ?></td>
                            <td width="100px"><?= h($recipes->prep_time) ?></td>
                            <td width="100px"><?= h($recipes->cook_time) ?></td>
                            <td width="100px"><?= h($recipes->servings) ?></td>
                            <td width="50px" class="actions">
                                <?= $this->Html->link('<i class="ui pencil icon teal"></i>' . __(''), ['controller' => 'Recipes', 'action' => 'edit', $recipes->slug], ['escape' => false, 'title' => __('Edit Recipe')]) ?>

                                <?= $this->Form->postLink('<i class="ui trash icon red"></i>', ['controller' => 'Recipes', 'action' => 'delete', $recipes->slug], ['confirm' => __('Are you sure you want to delete # {0}?', $recipes->id), 'escape' => false, 'title' => __('Delete Recipe')]) ?>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </table>
            </div>
        <?php else :  ?>
            <div class="ui negative message" id="tagMessage">
                <i onclick=" removeMessage()" class="close icon"></i>
                <div class="header">
                    No Recipes have been tagged with the *<?php echo $upperCase ?>* keyword yet.
                </div>
                <p>Try going to your recipes and tagging them with the above keyword.</p>
            </div>
        <?php endif ?>
    </div>
</div>
<br>
</div>