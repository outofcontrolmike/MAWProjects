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
        $status = "You came to a draw";
        
    }

    //Player wins
    if($playerchoice == "Earth" && $computerchoice == "Water")
    {
        $playerImage = 'forest.jpg';
        $wins++;
        $throwcount++;
        $status = "You won!";
    }
    if($playerchoice == "Fire" && $computerchoice =="Earth")
    {
        $wins++;
        $throwcount++;
        $status = "You won!";
        $playerImage = 'fire.jpg';

    }
    if($playerchoice == "Water" && $computerchoice =="Fire")
    {
        $wins++;
        $throwcount++;
        $status = "You won!";
        $playerImage = 'water.jpg';


    }

    //Computer Wins
    if($computerchoice == "Earth" && $playerchoice == "Water")
    {
        $losses++;
        $throwcount++;
        $status = "You Lost!";
    }
    if($computerchoice == "Fire" && $playerchoice =="Earth")
    {
        $losses++;
        $throwcount++;
        $status = "You Lost!";

    }
    if($computerchoice == "Water" && $playerchoice =="Fire")
    {
        $losses++;
        $throwcount++;
        $status = "You Lost!";

    }
    $percentagecalc = ($wins / $throwcount) * 100; 


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
$playerImage = "";
$computerImage = "";
//grab percentage of games won
}

//generates a rounded number between 1 & 3    
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
</head>


<div class="ui segment container" style=" text-align: -webkit-center; margin-top: 20px;">
    <h1 class="ui header massive orange centered text" style="display: inline;">Welcome to Earth Fire Water</h1>
    <button class="button ui purple large rules" style="display: inline; float: right;">Rules</button>
</div>

</div>
<div class="ui segment container">
<div class="ui segment">
  <div class="ui two column very relaxed grid">
    <div class="column">
        <h2>Player</h2>
        <hr>
    <?php echo 'player threw: ' . $playerchoice ?>
    <img class="ui medium circular image" src="<?php echo $playerImage;?>">
    </div>
    <div class="column">
      <h2>Computer</h2>
      <hr>
      <?php echo 'computer threw: ' . $computerchoice ?>
      <img class="ui medium circular image" src="<?php echo $computerImage;?>">
    </div>
  </div>
  <div class="ui vertical divider">
    VS
  </div>
</div>
<p><?php echo 'Game: ' . $status ?> </p>

<form action="" method="post" style="text-align:center">
<input name ="submitted" type="hidden" value="1">
<input name="throwcount" type="hidden" value="<?php echo $throwcount; ?>" />
<input name="percentagecalc" type="hidden" value="<?php echo $percentagecalc; ?>" />
<input name ="status" type="hidden" value="<?php echo $status; ?>" />
<input name="wins" type="hidden" value="<?php echo $wins; ?>" /> 
<input name="losses" type="hidden" value="<?php echo $losses; ?>" />
<input name="draws" type="hidden" value="<?php echo $draws; ?>" />
    <input class="ui button large green" type="submit" name="playerchoice" value="Earth">
    <input class="ui button large red" type="submit" name="playerchoice" value="Fire">
    <input class="ui button large blue" type="submit" name="playerchoice" value="Water">
</form>
</div>
<div class="ui segment container">
    <?php 
        echo '<h3>Game stats</h3>';
    ?>
    <p><?php echo 'Your wins: ' . $wins ?> </p>
    <p><?php echo 'Your loses: ' . $losses ?> </p>
    <p><?php echo 'Draws...: ' . $draws ?> </p>
    <p><?php echo 'Rounds Played: ' . $throwcount; ?>
    <p><?php echo 'Winning ratio: ' . $percentagecalc;?> %</p>
<hr>
    <FORM METHOD="GET" ACTION="main.php">
<INPUT TYPE="submit" VALUE="RESET COUNT">
</FORM>

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
    <h3>Earth, Fire & Water rules</h3>
    <p>This is basically the same thing as rock paper scissors, but based on elemental weaknesses</p>
    <p> You choose either one of the three options and hope that your oppenent chooses the elemental weakness of your element<p>
    <ul>    
    <li> <span>Earth soaks up Water</span></li>
        <li> <span>Fire burns down Earth</span></li>
        <li> <span>Water puts out fire</span></li>
</ul>
    <p>The player stats keep track of how many games you've played along with the amount of wins,losses and draws you've had</p>
</div><!-- end stats-->
        </div>
      </div>
    </div>
    </html>
<script>
$('.rules').click((e) => {
    $('.ui.longer.modal')
  .modal('show')
  }); 
</script>