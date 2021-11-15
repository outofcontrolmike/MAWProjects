import ButtonMenu from "../../../components/tmnt/TmntButtonMenu";
import TurtleSelect from "../../../components/tmnt/TurtleSelect";

export default function Tmnt(props) {
  //Functions here
  setTimeout(loadAll, 5000);

  function loadAll() {
    //Ninja Turtles array
    document.getElementById("project").style.backgroundColor = "";
    let turtles = [
      {
        name: "Leo",
        weapon: "Katana",
        color: "blue",
      },
      {
        name: "Mike",
        weapon: "Nunchuck",
        color: "orange",
      },
      {
        name: "Don",
        weapon: "Bo Staff",
        color: "neon purple",
      },
      {
        name: "Raph",
        weapon: "Si",
        color: "Red",
      },
    ];

    const staticProps = {
      players: ["1up", "2up"],

      heading: "today",
    };

    let variables = {
      name: "",
      score: 0,
      lives: 2,
    };

    let tName = document.getElementById("name");
    // let details = document.getElementById("showDetails");

    let leo = document.getElementById("leo");
    let mike = document.getElementById("mike");
    let don = document.getElementById("don");
    let raph = document.getElementById("raph");

    initiateVars();

    function initiateVars() {
      //grab elements by id
      let lives = document.getElementById("lives");
      let score = document.getElementById("score");
      let health = document.getElementById("health");
      let liveInc = document.getElementById("addLives");
      let addPoints = document.getElementById("addPoints");
      let minusPoints = document.getElementById("minusPoints");
      let resetStats = document.getElementById("resetStats");

      //add event listeners

      leo.addEventListener("click", changeLeo);
      mike.addEventListener("click", changeMike);
      don.addEventListener("click", changeDon);
      raph.addEventListener("click", changeRaph);
      liveInc.addEventListener("click", addLives);
      addPoints.addEventListener("click", addScore);
      minusPoints.addEventListener("click", minusScore);
      resetStats.addEventListener("click", () => clearStats(lives, score));

      //Mouse in
      leo.addEventListener(
        "mouseenter",
        function () {
          highlight(leo, "cadetblue");
        },
        false
      );
      mike.addEventListener(
        "mouseenter",
        function () {
          highlight(mike, "orange");
        },
        false
      );
      don.addEventListener(
        "mouseenter",
        function () {
          highlight(don, "violet");
        },
        false
      );
      raph.addEventListener(
        "mouseenter",
        function () {
          highlight(raph, "red");
        },
        false
      );

      //Mouse out
      leo.addEventListener(
        "mouseleave",
        function () {
          highlight(leo, "black");
        },
        false
      );
      mike.addEventListener(
        "mouseleave",
        function () {
          highlight(mike, "black");
        },
        false
      );
      don.addEventListener(
        "mouseleave",
        function () {
          highlight(don, "black");
        },
        false
      );
      raph.addEventListener(
        "mouseleave",
        function () {
          highlight(raph, "black");
        },
        false
      );

      playerInfo(lives, score, health);
    } //end of initiate Vars

    function clearStats(lives, score) {
      variables.lives = 2;
      let lifeReset = variables.lives;
      lifeReset = 2;
      lives.innerHTML = "" + lifeReset;
      variables.score = 0;
      score.innerHTML = 0;
    }

    function addLives(lives) {
      if (lives.innerHTML <= 11) lives.innerHTML = variables.lives += 1;
    }

    function addScore(score) {
      if (score.innerHTML <= 9999) score.innerHTML = variables.score += 200;
    }

    function minusScore(score) {
      if (score.innerHTML > 0) {
        score.innerHTML -= 200;
      }
    }

    //On page Load
    function highlight(turtle, color) {
      turtle.style.backgroundColor = color;
    }

    //Change player font
    function playerStyle(color, lives, health) {
      document.getElementById("pNum").style.color = color;
      lives.style.color = color;
      health.style.color = color;
    }

    //Toggle character select color
    function clearColors() {
      leo.style.backgroundColor = "black";
      mike.style.backgroundColor = "black";
      don.style.backgroundColor = "black";
      raph.style.backgroundColor = "black";
    }

    //Toggle names
    function changeName(name) {
      tName.innerHTML = name;
    }

    //
    function changeLeo() {
      clearColors();
      playerStyle("cadetblue");
      changeName(turtles[0].name);
      highlight(leo, "cadetblue");
    }

    function changeMike() {
      clearColors();
      playerStyle("orange");
      changeName(turtles[1].name);
      highlight(mike, "orange");
    }

    function changeDon() {
      clearColors();
      playerStyle("violet");
      changeName(turtles[2].name);
      highlight(don, "violet");
    }

    function changeRaph() {
      playerStyle("red");
      clearColors();
      changeName(turtles[3].name);
      highlight(raph, "red");
    }

    //set up player info
    function playerInfo(lives, score, health) {
      lives.innerHTML = "" + variables.lives;
      score.innerHTML = variables.score;
      let builder = "||||||||||||||";

      health.innerHTML = builder;
    }
    //end playerInfo

    //Handle Hiding Turtles - Should be on page load
    function hideTurtles() {
      let turtle = document.getElementsByClassName("turtle");
      console.log(turtle);
    }
  }
  return (
    <div>
      <div id="project" className="ui" style={{ height: "700px" }}>
        {/* // <!--Players--> */}
        <div
          class="ui two column doubling stackable grid container segment"
          style={{ marginTop: "50px;" }}
        >
          {/* <!-- first player--> */}
          <div class="column ui" id="players">
            <p id="pTurtle" id="pNum">
              1UP
            </p>
            <div id="playerDetails playerOne">
              <div class="ui two column grid container">
                <p id="pTurtle" class="column ui" id="name"></p>
                <p id="pTurtle" class="column ui" id="score"></p>
              </div>
              <div class="ui two column grid container">
                <div class="ui column">
                  <p id="pTurtle" id="lives"></p>
                </div>
                <div class="ui column" id="healthContainer">
                  <p id="pTurtle" id="health"></p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- second player--> */}
          <div class="column ui" id="players">
            <p id="pTurtle" id="pNum">
              2 UP
            </p>
            <div id="playerDetails">
              <p id="pTurtle" id="pBlink">
                Press Start to Play
              </p>
            </div>
          </div>
        </div>
        <ButtonMenu />

        {/* // <!--End Players--> */}
        <h1
          id="h1Turtle"
          style={{ textAlign: "center", backgroundColor: "black" }}
        >
          Select Your Turtle
        </h1>
        <TurtleSelect />
        <div className="ui container">
          <div className="ui column">
            <p>
              <audio controls autoplay style={{ backgroundColor: "black" }}>
                <source src="img/tmnt/TMNT4Select.mp3" type="audio/mpeg" />
              </audio>
            </p>
          </div>
          <footer>
            <div id="tFooter" className="ui">
              <p> *All images and song are not owned by me. </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
