<?php include "templates\layout\header.php" ?>

<!-- Grab user ID to append to account settings -->
<?php
$userName = $_SESSION['Auth']['user_name'];
?>
<div class="ui" id="thankYouBackground">
    <div class="ui container fluid center aligned " id="thankyouContainer">

        <p>
            <span class="ui text huge">Thank you for reaching out to us, <span class="ui text ">
                    <?php if ($userName) echo $userName . "!" ?>
                </span>
        </p></span>
        </p>
        <br>
        <p>
            <span class="ui text big">We will reply back to you as soon as we can.</span>
        </p>
        <br>
        <a class=" item" href="<?= $this->Url->build('/recipes') ?>"> <i id="thankyouUtensils" class="ui utensils icon black huge circular " ?></i></a>


    </div>

</div>