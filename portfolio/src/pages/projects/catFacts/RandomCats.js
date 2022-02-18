import React from "react";
import CatNavigation from "../../../components/cats/CatNavigation";
import CatFooter from "../../../components/cats/CatFooter";

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

      document.getElementById("catInput").remove();
      document.getElementById("catFactButton").remove();
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
    <div className="ui container fluid center aligned" id="randomCats">
      <CatNavigation />
      <div className="ui container center aligned" id="randomCatFactContainer">
        <div>
          <span id="catRandomFact" className="ui text">
            How many Seconds do you want between seeing a random cat fact?
            Please type in the amount below:
          </span>
        </div>
        <div class="ui action input" id="catInputMenu">
          <input id="catInput" className="ui" maxlength="2" type="text" />
          <button
            onClick={setTimer}
            id="catFactButton"
            className="ui button huge"
            data-tooltip="Meowwwww!!!  ... I mean click me to get started."
            data-inverted=""
            data-variation="large"
            data-position="top center"
          >
            <i class="cat icon huge"></i>
          </button>
        </div>
      </div>
      <button
        onClick={reloadWindow}
        id="catFactReset"
        className="ui button huge fluid"
        data-tooltip="Reset the page right meow."
        data-inverted=""
        data-variation="large"
        data-position="left center"
        style={{ visibility: "hidden" }}
      >
        <i class="cat icon huge"></i>
      </button>
      <div>
        <CatFooter />
      </div>
    </div>
  );
}
