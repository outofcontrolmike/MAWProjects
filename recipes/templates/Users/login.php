<div class="ui two column doubling grid stackable container fluid" id="loginPageContainer" style="width:100%;">
    <div class="ui column container center aligned">
        <div class="ui container segment very padded relaxed raised " id="loginForm">
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
    <div class="ui column container " id="loginPageFirstColumn">
        <h1>New Here?????</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi lorem, mollis sit amet auctor id, volutpat et dui. Aliquam erat volutpat. Maecenas euismod tincidunt vestibulum. Aliquam lacinia congue nisl, tincidunt eleifend neque pulvinar at. Duis porttitor odio sed neque mollis porttitor. Aenean molestie odio felis, eget condimentum quam molestie id. Nam urna eros, accumsan eget magna id, varius viverra lacus. Sed mi neque, ullamcorper eu faucibus quis, rutrum vitae nisl. Nunc vitae nisl vulputate, efficitur orci malesuada, bibendum libero. Morbi mattis, odio at iaculis aliquet, quam tellus tristique nisi, ullamcorper malesuada sem lorem quis risus. Aliquam condimentum arcu ut nulla ultricies ornare. Donec mattis faucibus urna in aliquet. In in sapien in libero faucibus varius.</p>
    </div>

</div>