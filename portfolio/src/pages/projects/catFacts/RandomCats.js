import React from "react";
import CatNavigation from "../../../components/cats/CatNavigation";

//Random Cats Facts - Needs two options
export default function RandomCats(props) {
  // Get Random Cat Fact
  function requestFact(time) {
    let url = "https://catfact.ninja/fact";
    console.log(time);
    fetch(url)
      .then((response) => response.json())
      .then((catFact) => {
        document.getElementById("catRandomFact").innerHTML = catFact.fact;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function setTimer() {
    let time = document.getElementById("catInput").value;
    if (time <= 0) {
      window.alert("Enter an amount more than 0 seconds");
    } else {
      //initial call
      requestFact();
      //convert Time to milliseconds
      time *= 1000;
      let resetBtn = document.createElement("button");

      document.getElementById("catInput").style.visibility = "hidden";
      document.getElementById("catFactButton").style.visibility = "hidden";
      document.getElementById("catFactReset").style.visibility = "visible";
      setInterval(() => {
        requestFact();
      }, time);
    }
  }

  function reloadWindow() {
    window.location.reload();
  }

  return (
    <div>
      <CatNavigation />
      <div
        className="ui container padded relaxed center aligned ui text huge"
        id="randomCatFactContainer"
      >
        <div>
          <span id="catRandomFact" className="ui text">
            How many Seconds do you want between seeing a random cat fact?
            Please type in the amount below:
          </span>
        </div>
        <div class="ui action input" id="catInputMenu">
          <input id="catInput" type="text" placeholder="Seconds" />
          <button
            onClick={setTimer}
            id="catFactButton"
            className="ui button red huge"
          >
            Go
          </button>
        </div>
      </div>
      <div className="ui container center aligned">
        <button
          onClick={reloadWindow}
          id="catFactReset"
          className="ui button yellow huge basic"
          style={{ visibility: "hidden" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
