<!-- File: templates/Recipes/edit.php -->

<?php include "templates\layout\header.php" ?>
<br>
<div class="ui fluid container" id="editRecipeContainer">
    <div class="ui relaxed raised column container segment stacked" id="editRecipeForm">
        <div class="ui form large equal width">
            <p style="text-align:center"> <?php echo $this->Html->image('icon.png', array('alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'width' => "75", 'height' => '75')); ?></p>

            <p style="text-align: center">
                <span class="ui text large teal">
                    Edit <?= $recipe->title ?>
                </span>
            </p>
            <!-- Start Form -->
            <?php
            echo $this->Form->create($recipe, ['type' => 'file']);
            echo $this->Form->control('user_id', ['type' => 'hidden', 'value' => 1]);
            ?>
            <div id="EditFormInputsGroup">

                <!-- TEsting -->
                <div class="fields">
                    <div class=" ui field">
                        <label>Recipe Name</label>
                        <?php
                        echo $this->Form->control('title', ['label' => ""]);
                        ?>
                    </div>
                    <div class="ui field">
                        <label>Prep Time</label>
                        <?php
                        echo $this->Form->control('prep_time', [
                            'label' => "",
                            'placeholder' => "Time in Minutes"

                        ]);
                        ?>
                    </div>
                    <div class="ui field">
                        <label>Cook Time</label>
                        <?php
                        echo $this->Form->control('cook_time', [
                            'label' => "",
                            'placeholder' => "Time in Minutes"
                        ]);
                        ?>
                    </div>
                    <div class="ui field">
                        <label>Servings</label>
                        <?php
                        echo $this->Form->control('servings', [
                            'label' => ""
                        ]);
                        ?>
                    </div>
                </div>
                <div class="ui fields">
                    <div class="ui field">
                        <label>Ingredients</label>
                        <?php
                        echo $this->Form->control('ingredients', [
                            'label' => "",
                            'placeholder' => "Enter seperate words with commas between: eg: bananas,strawberries,blueberries"
                        ]);
                        ?>
                    </div>
                </div>

                <div class="ui divider teal">

                </div>
                <div class="ui fields">
                    <div class="field">
                        <label>Description / Summary</label>
                        <div class="bioContainer">
                            <?php
                            echo $this->Form->control('body', [
                                'label' => "",
                                'placeholder' => "write a few lines or a couple paragraphs about your recipe."
                            ]);
                            ?>
                        </div>
                    </div>
                    <div class="field">
                        <label>Directions</label>
                        <div class="bioContainer">
                            <?php
                            echo $this->Form->control('directions', [
                                'label' => "",
                                'placeholder' => "Enter these one by one and new lines"
                            ]);
                            ?>
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <div class="field">
                        <label>Search Tags</label>
                        <?php
                        echo $this->Form->control('tag_string', ['label' => "", 'placeholder' => "Enter tags with commas between: eg: (peanutbutter,chocolate,strawberries,yum)"], ['type' => 'text']);
                        ?>
                    </div>
                </div>
                <div class="ui fields">
                    <div class="field">
                        <label>Image Upload</label>
                        <?php
                        echo $this->Form->control('image_file', ['type' => 'file', 'class' => "", 'label' => ""]);

                        ?>
                    </div>

                </div>

                <!-- end testing -->
                <?php
                echo "<br>";
                echo $this->Form->button(__('Save Recipe'), ['class' => 'ui button teal circular fluid']);

                echo $this->Form->end();
                ?>
            </div>
        </div>
    </div>
    <br>