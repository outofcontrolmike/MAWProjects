<h1>Add Article right now</h1>
<?php
    echo $this->Form->create($article);
    //hard code for user now...

    echo $this->Form->control('user_id', ['type' => 'hidden', 'value' => 1]);
    echo $this->Form->control('title');
    echo $this->Form->control('body', ['rows' => '5']);
    echo $this->Form->control('tags._ids', ['options' => $tags]);
    echo $this->Form->button(__('Save Article'));
    echo $this->Form->end();
?>