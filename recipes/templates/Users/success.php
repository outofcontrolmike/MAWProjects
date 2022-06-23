<div class="ui" id="thankYouBackground">
    <div class="ui container fluid center aligned " id="thankyouContainer">
        <p>
            <span class="ui text huge">
                You Have Successfully Created An Account With Us!
            </span>
        </p>
        <br>
        <p>
            <span class="ui text big">Feel free to login and start creating recipes or keep browsing our site.</span>
        </p>
        <br>
        <br>
        <?= $this->Html->link(__('Account Login'), ['controller' => "Users", 'action' => 'login'], ['class' => 'ui button huge circular inverted', 'id' => "landingPageButton"]) ?>

        <?= $this->Html->link(__('Browse Recipes'), ['controller' => "Recipes", 'action' => '/'], ['class' => 'ui button inverted huge circular', 'id' => "landingPageButton"]) ?>

    </div>

</div>