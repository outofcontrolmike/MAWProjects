<div class="users form container content">
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

    <?= $this->Html->link("If you don't have an account yet, Please sign up!", ['action' => 'add']) ?>
</div>