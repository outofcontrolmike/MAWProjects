<!--Author: Michael Wilson
    Project: Earth Fire Water
    Purpose: Learning experience with how to write a game in php.
    Date started: 02/10/2021
    -->
<?php
 
//Runs game logic as long as Reset button isn't clicked. $sumibtted technically changes when the action method is called on button click
if(isset($_POST['submitted']) == '1')
{
    //Get variables
    $throwcount = $_POST['throwcount'];
    $playerchoice = $_POST['playerchoice'];
    $percentagecalc = $_POST['percentagecalc'];
    $wins = $_POST['wins'];
    $losses = $_POST['losses'];
    $draws = $_POST['draws'];

    //Generate/Determine computer throw
    $randomthrow = rand(1,3);
    if($randomthrow == 1) {
        $computerchoice = "Earth";
    }
    if($randomthrow == 2)
    {
        $computerchoice = "Fire";
    }
    if($randomthrow == 3)
        {
      $computerchoice = "Water";
    }

    //Set image for player 
    
    if($playerchoice == 'Earth') {
        $playerImage = 'forest.jpg';

    }
    else if($playerchoice == "Water") {
        $playerImage = "water.jpg";

    }
    else {
        $playerImage = "fire.jpg";
    }

    //set image for computer

    if($computerchoice == 'Earth') {
        $computerImage = 'forest.jpg';

    }
    else if($computerchoice == "Water") {
        $computerImage = "water.jpg";

    }
    else {
        $computerImage= "fire.jpg";
    }

    //*****Write out game logic / Compare throws*****

    //Draw scenario
    if($computerchoice == $playerchoice)
    {
        $draws++;
        $throwcount++;
        $status = "Draw!";
        
    }

    //Player wins
    if($playerchoice == "Earth" && $computerchoice == "Water")
    {
        $playerImage = 'forest.jpg';
        $wins++;
        $throwcount++;
        $status = "Winning!";
    }
    if($playerchoice == "Fire" && $computerchoice =="Earth")
    {
        $wins++;
        $throwcount++;
        $status = "Winning!";
        $playerImage = 'fire.jpg';

    }
    if($playerchoice == "Water" && $computerchoice =="Fire")
    {
        $wins++;
        $throwcount++;
        $status = "Winning!";
        $playerImage = 'water.jpg';


    }

    //Computer Wins
    if($computerchoice == "Earth" && $playerchoice == "Water")
    {
        $losses++;
        $throwcount++;
        $status = "Losing!!";
    }
    if($computerchoice == "Fire" && $playerchoice =="Earth")
    {
        $losses++;
        $throwcount++;
        $status = "Losing!!";

    }
    if($computerchoice == "Water" && $playerchoice =="Fire")
    {
        $losses++;
        $throwcount++;
        $status = "Losing!!";

    }
    $percentagecalc = round(($wins / $throwcount) * 100,2); 


}
//initial variables (basically a game reset
else {
$throwcount = 0;
$playerchoice = "";
$choice = "";
$computerchoice = "";
$wins = 0;
$losses = 0;
$draws = 0;
$status = "";
$percentage = 0;
$percentagecalc = 0;
$playerImage = "water.jpg";
$computerImage = "fire.jpg";
}
?>
<html>
<head>
    <!-- You MUST include jQuery before Fomantic -->
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.css"
  />
  <script src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.js"></script>
  <link rel="stylesheet" href="styles.css">
  <!--using google fonts-->
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Reggae+One&display=swap" rel="stylesheet">
<!--application of google fonts-->
<style>
.ui, h1,h2,h3 {
font-family: 'Reggae One', cursive;
}
</style>
</head>
<!--Header-->
<div class="ui segment container" style=" text-align: -webkit-center; margin-top: 20px;">
    <h1 class="ui centered text" style="display: inline;"><span class="ui text green huge">Earth </span><span class="ui red text huge"> Fire</span><span class="blue text ui huge"> Water <span></h1>
</div>
<!--Game Display-->
<div class="ui segment container">
<div class="ui segment">
  <div class="ui two column very relaxed grid">
    <div class="column">
        <h2>Player</h2>
        <hr>
    <img class="ui medium circular image" style="" src="<?php echo $playerImage;?>">
    </div>
    <div class="column">
      <h2>Computer</h2>
      <hr>
      <img class="ui medium circular image" src="<?php echo $computerImage;?>">
    </div>
  </div>
  <div class="ui vertical divider">
    VS
  </div>
</div>
<p><?php echo 'Game Status: ' . $status ?> </p>

<form action="" method="post" style="text-align:center">
<input name ="submitted" type="hidden" value="1">
<input name="throwcount" type="hidden" value="<?php echo $throwcount; ?>" />
<input name="percentagecalc" type="hidden" value="<?php echo $percentagecalc; ?>" />
<input name ="status" type="hidden" value="<?php echo $status; ?>" />
<input name="wins" type="hidden" value="<?php echo $wins; ?>" /> 
<input name="losses" type="hidden" value="<?php echo $losses; ?>" />
<input name="draws" type="hidden" value="<?php echo $draws; ?>" />
<div class="ui three buttons">
    <input class="ui button medium green inverted" type="submit" name="playerchoice" value="Earth">
    <input class="ui button medium red inverted" type="submit" name="playerchoice" value="Fire">
    <input class="ui button medium blue inverted" type="submit" name="playerchoice" value="Water">
    </div>
</form>
</div>
<!--End Game Display-->

<!-- Stats Container-->
<div class="ui segment container">
    <?php 
        echo '<h3>Game stats</h3>';
    ?>
    <p><?php echo 'Your wins: ' . $wins ?> </p>
    <p><?php echo 'Your loses: ' . $losses ?> </p>
    <p><?php echo 'Draws: ' . $draws ?> </p>
    <p><?php echo 'Rounds Played: ' . $throwcount; ?>
    <p><?php echo 'Winning ratio: ' . $percentagecalc;?> %</p>
</div>
<!-- End stats-->
<!--Options Container-->
<div class="ui segment container">
<div class="ui buttons two">
    <FORM METHOD="GET" ACTION="main.php">
<INPUT class="ui button black medium"TYPE="submit" VALUE="RESET COUNT">
</FORM>
<button class="ui button purple medium rules inverted">Rules</button>
</div>
<!-- End options-->
   <!--Modal-->
   <div class="ui longer modal">
      <i class="close icon"></i>
      <div class="header">
        <h2 id="name">Rules</h2>
      </div>
      <div class="image content">
        <div class="ui medium image">
            <image src="rockpaperscissors.jpg">
        </div>
        <div class="description">
        <div class="rules">
    <h3 class="header">Earth, Fire & Water rules</h3>
    <p>This is basically the same concept as rock paper scissors, but based on elements</p>
    <p> You choose either one of the three options and hope that your oppenent chooses the elemental weakness of your element<p>
    <ul>    
    <li> <span>Earth soaks up Water</span></li>
        <li> <span>Fire burns down Earth</span></li>
        <li> <span>Water puts out Fire</span></li>
</ul>
    <p>The player stats keep track of how many games you've played along with the amount of wins,losses and draws you've had</p>
</div><!-- end stats-->
        </div>
      </div>
    </div>
    </html>
<script>
//Fomatic Jquery for showing of modal
$('.rules').click((e) => {
    $('.ui.longer.modal')
  .modal('show')
  }); 
</script>
<?php 
echo "<script type='text/javascript'>
alert('Javascript is working');
</script>"
?>