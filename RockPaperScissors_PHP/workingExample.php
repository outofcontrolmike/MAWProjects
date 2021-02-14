<?php
if (isset($_POST["submitted"])==1) {

//get variables
$throwcount = $_POST["throwcount"];
$wincount = $_POST["wincount"];
$losscount = $_POST["losscount"];
$drawcount = $_POST["drawcount"];
$playerthrow = $_POST["playerthrow"];

//randomize computer throw
$randomcomp = rand(1,3);
if ($randomcomp == 1) {
$computerthrow = "ROCK";}
if ($randomcomp == 2) {
$computerthrow = "PAPER";}
if ($randomcomp == 3) {
$computerthrow = "SCISSORS";}

//compare throws
if ($computerthrow == $playerthrow) {
$winlossdraw = "DRAW";
$drawcount++;}

if ($computerthrow == "ROCK" && $playerthrow == "PAPER") {
$winlossdraw = "WIN";
$wincount++;}

if ($computerthrow == "PAPER" && $playerthrow == "SCISSORS") {
$winlossdraw = "WIN";
$wincount++;}

if ($computerthrow == "SCISSORS" && $playerthrow == "ROCK") {
$winlossdraw = "WIN";
$wincount++;}

if ($computerthrow == "SCISSORS" && $playerthrow == "PAPER") {
$winlossdraw = "LOSS";
$losscount++;}

if ($computerthrow == "PAPER" && $playerthrow == "ROCK") {
$winlossdraw = "LOSS";
$losscount++;}

if ($computerthrow == "ROCK" && $playerthrow == "SCISSORS") {
$winlossdraw = "LOSS";
$losscount++;}

$throwcount++;

} else {

//set initial variables
$throwcount = 0;
$wincount = 0;
$losscount = 0;
$drawcount = 0;
$winlossdraw = "No games played yet";
$playerthrow = "N/A";
$computerthrow = "N/A";
}
?>

<!DOCTYPE html>
<html>
<head>
<title>Rock Paper Scissors Tutorial</title>
</head>
<body>

<form action="" method="post" style="">

<input name="submitted" type="hidden" value="1" />

<input name="throwcount" type="hidden" value="<?php echo $throwcount; ?>" />

<input name="wincount" type="hidden" value="<?php echo $wincount; ?>" />

<input name="losscount" type="hidden" value="<?php echo $losscount; ?>" />

<input name="drawcount" type="hidden" value="<?php echo $drawcount; ?>" />

<label><input type="submit" name="playerthrow" value="ROCK" id="throw_1"></label>

<label><input type="submit" name="playerthrow" value="PAPER" id="throw_2"></label>

<label><input type="submit" name="playerthrow" value="SCISSORS" id="throw_3"></label>

</form>

<p>CURRENT GAME STATUS: <?php echo $winlossdraw; ?></p>

<p>You threw: <?php echo $playerthrow; ?></p>

<p>Computer threw: <?php echo $computerthrow; ?></p>

<p>Total Throws: <?php echo $throwcount; ?></p>

<p>Wins: <?php echo $wincount; ?></p>

<p>Losses: <?php echo $losscount; ?></p>

<p>Draws: <?php echo $drawcount; ?></p>

<FORM METHOD="GET" ACTION="http://www.YOUR-URL.com/rps.php/">
<INPUT TYPE="submit" VALUE="RESET COUNT">
</FORM>

</body>
</html>