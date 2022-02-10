import React from "react";
//Jokes Menu
const JokesMenu = (props) => {
  //Grabs API Status
  console.log(props, "props joke menu");
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

  function displayStatus(message) {
    window.alert(message);
  }

  function requestTenJokes() {
    let url =
      "https://nova-joke-api.netlify.app/.netlify/functions/index/api/ten";
    fetch(url)
      .then((response) => response.json())
      .then((jokeData) => {
        document.getElementById('jokesContainer').innerHTML = ""

        // props.setJokes(10);
        jokeData.map((joke) => {
          createJokeList(joke);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function createJokeList(joke) {
    console.log("joke",joke);

    let jokeId = joke.id;
    let jokeType = joke.type;
    let jokeSetup = joke.setup;
    let jokePunchline = joke.punchline;

    let jokeIdP = document.createElement('p');
    let jokeTypeP = document.createElement('p');
    let jokePunchlineP = document.createElement('p');
    let jokeSetupP = document.createElement('p');

    let jokeDiv = document.createElement('div');

    jokeDiv.classList = "ui container stackable centered align segment"

    jokeIdP.innerHTML = jokeId;
    jokeTypeP.innerHTML = jokeType;
    jokeSetupP.innerHTML = jokeSetup;
    jokePunchlineP.innerHTML = jokePunchline;

    jokeDiv.append(jokeIdP, jokeTypeP,jokeSetup,jokePunchlineP,)
    document.getElementById('jokesContent').append(jokeDiv);
  }

  console.log("props", props);

  return (
    <div className="ui menu stackable">
      <div className="header item">
        <p style={{ fontSize: "5rem" }}>Random Jokes</p>
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
                />
                <label>General</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" id="jokeKnock" />
                <label>Knock Knock</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" id="jokeProgramming" />
                <label>Programming</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <button
          className="item 
      ui button huge basic orange"
          onClick={requestTenJokes}
        >
          Request List of Jokes
        </button>
        <button
          className="item 
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
