    <div class="ui fluid container center aligned" id="loginFormContainer">
        <br>
        <div class="ui container segment very padded relaxed raised" id="loginForm">
            <?= $this->Flash->render() ?>
            <span class="ui text big teal">Account Login</span>
            <?= $this->Form->create() ?>

            <div class="ui form big">

                <p style="font-size: 16px;"><?= __('Please enter your email and password') ?></p>
                <div id="loginFormInputsGroup">
                    <?= $this->Form->control('email', ['class' => "ui ", 'placeholder' => "Email address", 'label' => "", 'required' => true]) ?>
                    <br>
                    <?= $this->Form->control('password', ['label' => "", 'placeholder' => "Password", 'required' => true]) ?>
                </div>
                <br>
                <?php echo $this->Form->button('Login to your account', ['type' => 'submit', 'class' => 'ui button teal fluid circular raised loginButton']) ?>

            </div>
            <?= $this->Form->end() ?>
            <br>
            <p>No Account? No Problem, just click below.</p>
            <a href="/users/add"><i class="utensils icon big teal "></i></a>
            </i>
        </div>
    </div>

    </div>