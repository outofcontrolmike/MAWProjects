<?php include "templates\layout\header.php" ?>

<!-- Grab user ID to append to account settings -->
<?php
$userName = $_SESSION['Auth']['user_name'];
?>
<div class="ui container segment very padded raised">

    <h1>Thank you so much! <?php echo $userName ?></h1>

</div>