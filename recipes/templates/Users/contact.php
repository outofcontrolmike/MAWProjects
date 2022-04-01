<div class="form container content" id="contactForm">
    <?= $this->Flash->render() ?>
    <?= $this->Form->create() ?>
    <fieldset>
        <legend><?= __('Got any Questions or Suggestions? Go ahead and submit this form.') ?></legend>
        <?= $this->Form->control('body', ['label' => "Description/Summary"],['rows' => '5']) ?>
        <?= $this->Form->control('password', ['required' => true]) ?>
    </fieldset>
    <?= $this->Form->submit(__('Login'), ['action' => ['add']]); ?>
    <?= $this->Form->end() ?>
</div>