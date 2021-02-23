
    <div class="ui">
    <h1 class="ui text">Add a Character</h1>
    <?php
        echo $this->Form->create($character);
        //Hard code for now
        echo $this->Form->control('id', ['type' => 'hidden', 'value' => 1]);
    echo $this->Form->control('name');
    echo $this->Form->control('description', ['rows' => '3']);
    echo $this->Form->control('age', ['rows' => '1']);
    echo $this->Form->control('race', ['rows' => '1']);
    echo $this->Form->control('religion', ['rows' => '1']);
    echo $this->Form->control('class', ['rows' => '1']);
    echo $this->Form->control('photo', ['rows' => '1']);
    echo $this->Form->control('createdBy', ['type' => 'hidden', 'value' => 1]);
    echo $this->Form->button(__('Save Character'));
    echo $this->Form->end();
    ?>
    </div>