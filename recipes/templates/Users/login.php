    <div class="ui fluid container center aligned" id="loginFormContainer">

        <div class="ui container segment padded relaxed raised stacked" id="loginForm">
            <p> <?php echo $this->Html->image('icon.png', array('alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'width' => "50", 'height' => '50')); ?></p>
            <?= $this->Flash->render() ?>
            <span class="ui text big teal">Account Login</span>
            <?= $this->Form->create() ?>
            <div class="ui form big">
                <p style="font-size: 16px;"><span class="ui text grey"><?= __('Please enter your email and password') ?></span></p>
                <div id="loginFormInputsGroup">
                    <?= $this->Form->control('email', ['class' => "ui ", 'placeholder' => "Email address", 'label' => "", 'required' => true]) ?>
                    <br>
                    <?= $this->Form->control('password', ['label' => "", 'placeholder' => "Password", 'required' => true]) ?>
                </div>
                <br>
                <?php echo $this->Form->button('Login', ['type' => 'submit', 'class' => 'ui button teal fluid circular raised loginButton']) ?>
            </div>
            <?= $this->Form->end() ?>
            <br>
            <p style="font-size: 16px;"><span class="ui text grey">Don't have an account yet? </span> <a href="/users/add"><span id="signUpLink" class="ui text link teal"> Sign Up </a></span> </p>

            </i>
        </div>
    </div>

    </div>