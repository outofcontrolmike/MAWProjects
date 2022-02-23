import React from "react";
import { useState } from "react";

//Jokes Menu
const JokesMenu = (props) => {

  const  [categorySelected, setSelected] = useState("");


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
    document.getElementById("jokesList").innerHTML = "";
    document.getElementById("jokesContainer").style.visibility = "visible";
    document.getElementById("jokesContainer").style.height = "fit-content";
  }

  function requestTenJokes() {
    let url =
      "https://nova-joke-api.netlify.app/.netlify/functions/index/api/ten";
    fetch(url)
      .then((response) => response.json())
      .then((jokeData) => {
        document.getElementById("jokesContainer").style.visibility = "hidden";
        document.getElementById("jokesContainer").style.height = "0px";

        jokeData.map((joke) => {
          createJokeList(joke);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function createJokeList(joke) {
    props.data();
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

    jokeIdP.innerHTML = jokeId;
    jokeTypeP.innerHTML = jokeType;
    jokeSetupP.innerHTML = jokeSetup;
    jokePunchlineP.innerHTML = jokePunchline;

    jokeDiv.append(jokeIdP, jokeTypeP, jokeSetup, jokePunchlineP);
    document.getElementById("jokesList").prepend(jokeDiv);
  }

  function handleSelected() {
    setSelected(this)
  }

  return (
    <div className="ui menu stackable fluid">
      <div className="header item">
        <p style={{ fontSize: "4rem" }}>Random Jokes</p>
      </div>
      <div className="item">
        {" "}
        <div className="ui form" id="jokeType" style={{ fontSize: "24px" }}>
          <div className="inline fields">
            <label>Type of Joke?</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="frequency"
                  id="jokeGeneral"
                  checked="checked"
                  onChange={handleSelected}
                />
                <label>General</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" id="jokeKnock"
                    onChange={handleSelected} />
                <label>Knock Knock</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" id="jokeProgramming"
                    onChange={handleSelected} />
                <label>Programming</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <button
          className="
      ui button huge basic green"
          onClick={resetJokes}
        >
          Fetch Random Joke
        </button>
        <button
          className=" 
      ui button huge basic orange"
          onClick={requestTenJokes}
        >
          Request List of Jokes
        </button>
        <button
          className=" 
      ui button huge basic blue"
          onClick={requestStatus}
        >
          API Status
        </button>
      </div>
      <div className="item">
        <h2>{props.setJokes}</h2>
      </div>
    </div>
  );
};

export default JokesMenu;
