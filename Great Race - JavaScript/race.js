

// Declaring variables for events
    let stopLight = document.getElementById('star');
    let marioRun = document.getElementById('mario');
    let yoshiRun = document.getElementById('yoshi');
    let yoshiWin = document.getElementById('yoshiWin');
    let marioWin = document.getElementById('winMario');




// onlick event for starting race by clicking stopLight variable
    document.getElementById('star').addEventListener("click", startRace);
    yoshiWin.addEventListener("click", restartRace);
    marioWin.addEventListener("click", restartRace);

//get flag position
var flagPosition = document.getElementById('flag');
    var stopper = flagPosition.getBoundingClientRect();
    console.log(stopper);

// function that runs the click event and swaps images and styles the racers to the left.
function startRace() 
{

    stopLight = document.getElementById('star').src = "on.png";
     marioRun = document.getElementById('mario').src = "mariorun.png";
     yoshiRun = document.getElementById('yoshi').src = "yoshirun.png";
     document.getElementById('mario').style.left = "0px";
     document.getElementById('yoshi').style.left = "0px";

     var myTime = setInterval(takeOff, 10); 

        function takeOff() 
    {

        var rand = Math.round(Math.random() * 20);
        var rand2 = Math.round(Math.random() * 20);
        let marioRacer = document.getElementById('mario').style.left
        let yoshiRacer = document.getElementById('yoshi').style.left
    
        marioRacer = document.getElementById('mario').style.left = (parseInt(document.getElementById('mario').style.left) + rand) + "px";
        yoshiRacer = document.getElementById('yoshi').style.left = (parseInt(document.getElementById('yoshi').style.left) + rand2) + "px";


    //if statment to stop racer at finsh point
        if (parseInt(marioRacer) >= 1600) {
        myStop();
        document.getElementById("yoshi").style.visibility = "hidden";
        document.getElementById('mario').style.visibility = "hidden";
        document.getElementById("winMario").style.visibility = "visible";
        return;

        }   else if (parseInt(yoshiRacer) >= 1600) 
        {
        myStop();
        document.getElementById("yoshi").style.visibility = "hidden";
        document.getElementById('mario').style.visibility = "hidden";
        document.getElementById('yoshiWin').style.visibility = "visible";
 
        }

    }

yoshiWin.addEventListener("click", revealImages);
marioWin.addEventListener("click", revealImages);

// function that reveals images
function revealImages()
{
    document.getElementById("yoshi").style.visibility = "visible";
    document.getElementById("mario").style.visibility = "visible";
    document.getElementById("winMario").style.visibility = "hidden";
    document.getElementById("yoshiWin").style.visibility = "hidden";
    document.getElementById('star').src = "off.png";

}

// This stops the interval
function myStop() 
{
    clearInterval(myTime)

}

// this function will style the oriiginal back to the left and insert the running images. 
document.getElementById('star').addEventListener("click", restartRace);

}
function restartRace()
{
    document.getElementById('mario').src = "mariorun.png";
     document.getElementById('yoshi').src = "yoshirun.png";
     document.getElementById('star').src = "on.png";
     document.getElementById('mario').style.left = "0px";
     document.getElementById('yoshi').style.left = "0px";

}


/*  Everything should be running well know.  I'd like to list out what I had struggles with;

1)  I had too many functions.  I've learned less is more :)

2)  I honestly had trouble with code structure, I had some brackets in the wrong places which made my code run with logic errors

3)  One last issue i still have is if the user cicks the star instead of the winning image and then
    clicks the winning image, the race will be at a much faster rate.  I figure the takeOff function
    keeps getting multipied each time the star is clicked.  

*/