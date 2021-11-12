import Images from "./Images";
import background from "./images/background.jpg";

import starOn from "./images/on.png";
import marioRunPic from "./images/mariorun.png";
import yoshirun from "./images/yoshirun.png";

export default function GreatRace() {
 
    setTimeout(runScript, 5);
    function runScript()
    {
    // Declaring variables for events
    var marioRun = document.getElementById("mario");
    var yoshiRun = document.getElementById("yoshi");
    var yoshiWin = document.getElementById("yoshiWin");
    var marioWin = document.getElementById("winMario");
    var star = document.getElementById('star');
    var header = document.getElementById('header');
    
    var marioTotal = document.getElementById('marioScore');
    var yoshiTotal = document.getElementById('yoshiScore');
    var marioScore = 0;
    var yoshiScore = 0;
    
    // onlick event for starting race by clicking stopLight variable
    document.getElementById("star").addEventListener("click", startRace);
    yoshiWin.addEventListener("click", restartRace);
    marioWin.addEventListener("click", restartRace);
    
    
    //get flag position
    var flagPosition = document.getElementById("flag");
    var stopper = flagPosition.getBoundingClientRect();
    console.log(stopper);
    var myTime;
    
    // handle starting the race
    function startRace() {
      star.src = {starOn};
      star.removeEventListener("click",startRace);
      marioRun = document.getElementById("mario");
      marioRun.src = "/img/mariorun.png";
      yoshiRun = document.getElementById("yoshi").src = "/img/yoshirun.png";
      document.getElementById("mario").style.left = "0px";
      document.getElementById("yoshi").style.left = "0px";
      console.log("testing");
      myTime = setInterval(takeOff, 6);
      takeOff();
    
    }
      function takeOff() {
        var rand = Math.round(Math.random() * 20);
        var rand2 = Math.round(Math.random() * 20);
        var marioRacer = document.getElementById("mario").style.left;
        var yoshiRacer = document.getElementById("yoshi").style.left;
    
        marioRacer = document.getElementById("mario").style.left =
          parseInt(document.getElementById("mario").style.left) + rand + "px";
        yoshiRacer = document.getElementById("yoshi").style.left =
          parseInt(document.getElementById("yoshi").style.left) + rand2 + "px";
    
        //if statment to stop racer at finsh point
        if (parseInt(marioRacer) >= 1600) {
          myStop();
          document.getElementById("yoshi").style.visibility = "hidden";
          document.getElementById("mario").style.visibility = "hidden";
          document.getElementById("winMario").style.visibility = "visible";
          marioScore++;
          marioTotal.innerHTML = marioScore;
        } else if (parseInt(yoshiRacer) >= 1600) {
          myStop();
          document.getElementById("yoshi").style.visibility = "hidden";
          document.getElementById("mario").style.visibility = "hidden";
          document.getElementById("yoshiWin").style.visibility = "visible";
          yoshiScore++;
          yoshiTotal.innerHTML = yoshiScore;
        }
    
        yoshiWin.addEventListener("click", revealImages);
        marioWin.addEventListener("click", revealImages);
        header.innerHTML = "Click the winner to restart the race";
      }
    
    
      // function that reveals images
      function revealImages() {
        document.getElementById("yoshi").style.visibility = "visible";
        document.getElementById("mario").style.visibility = "visible";
        document.getElementById("winMario").style.visibility = "hidden";
        document.getElementById("yoshiWin").style.visibility = "hidden";
        document.getElementById("star").src = "off.png";
        header.innerHTML = 'ready for another round?';
    
      }
    
      // This stops the interval
      function myStop() {
        clearInterval(myTime);
    
      }
    
      // this function will style the oriiginal back to the left and insert the running images.
    
    function restartRace() {
      document.getElementById("mario").src = "mariorun.png";
      document.getElementById("yoshi").src = "yoshirun.png";
      document.getElementById("star").src = "on.png";
      document.getElementById("mario").style.left = "0px";
      document.getElementById("yoshi").style.left = "0px";
      document.getElementById("star").addEventListener("click", startRace);
      takeOff();
    
    }
    
    }
    return(
    
        <div id="greatRaceBg" style={{ backgroundImage: `url(${background})`}}>
            <div className="ui fluid"> 
            <h1 id="header" className="ui massive" style={{color: "black"}}>The Great Race!  Click on the star to get started.</h1>
      <div id="scores" className="ui container segment" style={{textAlign: "left", height: "200px", width :"150px", float: "left"}}>
      <p>Mario:<span id="marioScore" class="ui red text large" style={{paddingLeft: "10px"}}></span> </p>
      <p>Yoshi:<span id="yoshiScore" class="ui green text large"style={{paddingLeft: "10px"}}></span> </p>
      <hr />
        <a href="/projects"><span class="ui text blue medium">Home</span></a>
        
      </div>
      <Images />

            </div>
        </div>
    )
}
