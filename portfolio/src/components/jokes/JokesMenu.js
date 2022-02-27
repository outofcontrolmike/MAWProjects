import React from "react";
import { useState } from "react";

//Jokes Menu
const JokesMenu = ({ jokeQuantity, addJokes }) => {
  //Grabs API Status
  function requestStatus() {
    let url =
      "https://nova-joke-api.netlify.app/.netlify/functions/index/status";
    fetch(url)
      .then((response) => response.json())
      .then((status) => {
        console.log(status);
        displayStatus(status.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  //Message from api
  function displayStatus(message) {
    window.alert(message);
  }

  //Resets the jokes container
  function resetJokes() {
    document.getElementById("resetJokes").classList.add("disabled");
    document.getElementById("jokesList").innerHTML = "";
    document.getElementById("jokesContainer").style.visibility = "visible";
    document.getElementById("jokesContainer").style.height = "fit-content";
    document.getElementById("flip-card").style.marginTop = "12%";

  }

  //Handles requesting Ten Jokes
  function requestTenJokes() {
    document.getElementById("resetJokes").classList.remove("disabled");
    let url =
      "https://nova-joke-api.netlify.app/.netlify/functions/index/api/ten";
    fetch(url)
      .then((response) => response.json())
      .then((jokeData) => {
        document.getElementById("jokesContainer").style.visibility = "hidden";
        document.getElementById("jokesContainer").style.height = "0px";
        document.getElementById("flip-card").style.marginTop = "0px";

        addJokes((jokeQuantity += 10));
        jokeData.map((joke) => {
          createJokeList(joke);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  //Create div elements for list and prepend
  function createJokeList(joke) {
    let jokeId = joke.id;
    let jokeType = joke.type;
    let jokeSetup = joke.setup;
    let jokePunchline = joke.punchline;

    let jokeIdP = document.createElement("p");
    let jokeTypeP = document.createElement("p");
    let jokePunchlineP = document.createElement("p");
    let jokeSetupP = document.createElement("p");

    let jokeDiv = document.createElement("div");
    jokeDiv.id = "jokeDiv";

    jokeDiv.classList = "ui container stackable centered align segment";

    jokeIdP.innerHTML = "# " +  jokeId;
    jokeTypeP.innerHTML = "Category: " +  jokeType;
    jokeSetupP.innerHTML = "Setup: " + jokeSetup;
    jokePunchlineP.innerHTML = "Punchline: " + jokePunchline;

    jokeDiv.append(jokeIdP, jokeTypeP, jokeSetupP, jokePunchlineP);
    document.getElementById("jokesList").prepend(jokeDiv);
  }
  return (
    <div className="ui three item menu stackable" id="jokesMenu">
      <div className="item center aligned">
        {" "}
        <div className="ui form" id="jokeType" style={{ fontSize: "1.5rem" }}>
          <div className="inline fields container">
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="frequency"
                  id="jokeGeneral"
                  checked="checked"
                />
                <label id="jokeCategoryLabel">General</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" id="jokeKnock" />
                <label id="jokeCategoryLabel">Knock Knock</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" id="jokeProgramming" />
                <label id="jokeCategoryLabel">Programming</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item center aligned">
        <h1 id="jokeQuantity">{jokeQuantity}</h1>
      </div>
      <div className="right item menu stackable" id="jokeBtnGroup">
        <button
          className="
      ui button huge circular disabled"
          id="resetJokes"
          onClick={resetJokes}
        >
          Fetch Random Joke
        </button>
        <button
          className=" 
      ui button huge circular"
          id="tenJokes"
          onClick={requestTenJokes}
        >
          Request List of Jokes
        </button>
        <button
          className=" 
      ui button huge circular"
          id="jokeStatusBtn"
          onClick={requestStatus}
        >
          API Status
        </button>
      </div>
    </div>
  );
};

export default JokesMenu;
