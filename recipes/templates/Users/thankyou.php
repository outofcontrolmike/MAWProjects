<?php include "templates\layout\header.php" ?>

    <!-- Grab user ID to append to account settings -->
    <?php
        $userName = $_SESSION['Auth']['user_name'];
    ?>
<div class="content container">
    
<h1>Thank you so much! <?php echo $userName ?></h1>

</div>