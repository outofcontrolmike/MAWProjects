
<div class="users form container content" id="loginForm">
    <?= $this->Flash->render() ?>
    <h3>Login</h3>
    <?= $this->Form->create() ?>
    <fieldset>
        <legend><?= __('Please enter your email and password') ?></legend>
        <?= $this->Form->control('email', ['required' => true]) ?>
        <?= $this->Form->control('password', ['required' => true]) ?>
    </fieldset>
    <?= $this->Form->submit(__('Login'), ['action' => ['add']]); ?>
    <?= $this->Form->end() ?>
    <h5>OR</h5>
    <?= $this->Html->link('Sign Up', ['action' => 'add'], ['class' => 'button'], ['style' => 'width:']) ?>
</div>