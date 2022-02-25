import Images from "./Images";

//Great Race Project in React
export default function GreatRace() {
  document.title = "Great Race";

  //Loads script after initial render
  setTimeout(runScript, 5);

  //Main Game script
  function runScript() {
    // Declaring variables for events
    var marioRun = document.getElementById("mario");
    var yoshiRun = document.getElementById("yoshi");
    var yoshiWin = document.getElementById("yoshiWin");
    var marioWin = document.getElementById("winMario");
    var star = document.getElementById("star");
    var header = document.getElementById("header");

    var marioTotal = document.getElementById("marioScore");
    var yoshiTotal = document.getElementById("yoshiScore");
    var marioScore = 0;
    var yoshiScore = 0;

    // onclick event for starting race by clicking stopLight variable
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
      star.src = "img/greatRace/on.png";
      star.removeEventListener("click", startRace);
      marioRun = document.getElementById("mario");
      marioRun.src = "/img/greatRace/mariorun.png";
      yoshiRun = document.getElementById("yoshi").src =
        "/img/greatRace/yoshirun.png";
      document.getElementById("mario").style.left = "0px";
      document.getElementById("yoshi").style.left = "0px";
      console.log("testing");
      myTime = setInterval(takeOff, 6);
      takeOff();
    }

    function takeOff() {
      var rand = Math.round(Math.random() * 10);
      var rand2 = Math.round(Math.random() * 10);
      var marioRacer = document.getElementById("mario").style.left;
      var yoshiRacer = document.getElementById("yoshi").style.left;

      marioRacer = document.getElementById("mario").style.left =
        parseInt(document.getElementById("mario").style.left) + rand + "px";
      yoshiRacer = document.getElementById("yoshi").style.left =
        parseInt(document.getElementById("yoshi").style.left) + rand2 + "px";

      header.innerHTML = "Who is going to win this match? ";

      //check who won
      if (parseInt(marioRacer) >= 1600) {
        myStop();
        document.getElementById("yoshi").style.visibility = "hidden";
        document.getElementById("mario").style.visibility = "hidden";
        document.getElementById("winMario").style.visibility = "visible";
        header.innerHTML = "Mario won this match! Click him to start again.";
        marioScore++;
        marioTotal.innerHTML = marioScore;
      } else if (parseInt(yoshiRacer) >= 1600) {
        myStop();
        document.getElementById("yoshi").style.visibility = "hidden";
        document.getElementById("mario").style.visibility = "hidden";
        document.getElementById("yoshiWin").style.visibility = "visible";
        header.innerHTML = "Yoshi won this match! Click him to line back up";
        yoshiScore++;
        yoshiTotal.innerHTML = yoshiScore;
      }

      yoshiWin.addEventListener("click", revealImages);
      marioWin.addEventListener("click", revealImages);
    }

    // function that reveals images
    function revealImages() {
      document.getElementById("yoshi").style.visibility = "visible";
      document.getElementById("mario").style.visibility = "visible";
      document.getElementById("winMario").style.visibility = "hidden";
      document.getElementById("yoshiWin").style.visibility = "hidden";
      document.getElementById("star").src = "/img/greatRace/off.png";
      header.innerHTML = "Click the star for another round";
    }

    // This stops the interval
    function myStop() {
      clearInterval(myTime);
    }

    //Resets race positions
    function restartRace() {
      document.getElementById("mario").src = "/img/greatRace/mario.png";
      document.getElementById("yoshi").src = "/img/greatRace/yoshi.png";
      document.getElementById("star").src = "/img/greatRace/on.png";
      document.getElementById("mario").style.left = "0px";
      document.getElementById("yoshi").style.left = "0px";
      document.getElementById("star").addEventListener("click", startRace);
      takeOff();
    }
  }

  return (
    <div id="greatRaceBg">
      <div className="ui fluid">
        <h1
          id="header"
          className="ui large message"
          style={{ color: "black", backgroundColor: "lightgreen" }}
        >
          Welcome to The Great Race! Can you guess who will win??? Click on the
          star to get started.
        </h1>
        <div
          id="scores"
          className="ui container segment relaxed padded very"
          style={{
            textAlign: "left",
            height: "200px",
            width: "150px",
            float: "left",
            marginLeft: "1rem",
          }}
        >
          <p style={{ color: "red", fontSize: "1.3rem" }}>
            Mario:
            <span
              id="marioScore"
              class="ui red text large"
              style={{ paddingLeft: "10px" }}
            ></span>{" "}
          </p>
          <p style={{ color: "green", fontSize: "1.3rem" }}>
            Yoshi:
            <span
              id="yoshiScore"
              class="ui green text large"
              style={{ paddingLeft: "10px" }}
            ></span>{" "}
          </p>
          <hr style={{ borderColor: "black" }} />
          <a style={{ color: "black" }} href="/projects">
            <span class="ui text info small">Projects</span>
          </a>
        </div>
        <Images />
      </div>
    </div>
  );
}
