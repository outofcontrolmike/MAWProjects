<div class="ui container fluid" id="loginFormContainer">
    <div class="ui very padded relaxed raised column container segment stacked tall " id="loginForm">
        <?= $this->Flash->render() ?>
        <h3>Login</h3>
        <?= $this->Form->create() ?>
        <div class="ui form">
            <fieldset>
                <legend><?= __('Please enter your email and password') ?></legend>
                <?= $this->Form->control('email', ['required' => true]) ?>
                <?= $this->Form->control('password', ['required' => true]) ?>

            </fieldset>
            <br>
            <?php echo $this->Form->button('Submit Form', ['type' => 'submit', 'class' => 'ui button red fluid']) ?>
        </div>
        <?= $this->Form->end() ?>
        <h5>OR</h5>
        <?= $this->Html->link('Sign Up', ['action' => 'add'], ['class' => 'ui button teal fluid'], ['style' => 'width:']) ?>
    </div>
</div>