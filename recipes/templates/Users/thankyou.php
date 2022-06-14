<?php include "templates\layout\header.php" ?>

<!-- Grab user ID to append to account settings -->
<?php
$userName = $_SESSION['Auth']['user_name'];
?>
<div class="ui" id="thankYouBackground">
    <div class="ui segment container" id="thankyouContainer">
        <h1>Thank you so much! <?php echo $userName ?></h1>

    </div>

</div>