import React from "react";
import { useState } from "react";

//Sets up and displays Jokes
const JokesCard = ({ jokeData, jokeCount, addJokes }) => {
  //Hooks for the card mainly
  const [jokeType, setJokeCategory] = useState(
    "If you hover this card you will see the punchline.  Of course you need to fetch a joke first. "
  );

  const [jokeQuantity, setJokeQuantity] = useState("random");
  const [jokeId, setJokeId] = useState("");
  const [jokeText, setJokeText] = useState(
    "I'm not good at coming up with jokes, but this API is."
  );

  const [punchlineText, setPunchlineText] = useState(
    "Punch line will be here once you fetch a joke.  :)"
  );

  //somewhat gloabl variables

  let jokesData = jokeData;
  let jokeTextValue = "";
  let typeParam = "";
  let quantityParam = "";

  //Original button click
  function handleClick() {
    setJokeType();
    fetchJoke();

    //Increment counter state
    addJokes((jokeCount += 1));
  }

  //Sets up category param for fetch and jokeType for card
  function setJokeType() {
    //JokeType
    let jokeGeneral = document.getElementById("jokeGeneral");
    let jokeKnock = document.getElementById("jokeKnock");
    let jokeProgramming = document.getElementById("jokeProgramming");

    if (jokeGeneral.checked) {
      setJokeCategory("General");
      typeParam = "general";
    }
    if (jokeKnock.checked) {
      setJokeCategory("Knock-Knock");
      typeParam = "knock-knock";
    }
    if (jokeProgramming.checked) {
      setJokeCategory("Programming");
      typeParam = "programming";
    }
  }

  //The actual fetch - doesn't need to accept any parameters
  function fetchJoke() {
    let url =
      "https://nova-joke-api.netlify.app/.netlify/functions/index/api" +
      "/" +
      typeParam +
      "/" +
      jokeQuantity;
    fetch(url)
      .then((response) => response.json())
      .then((jokeData) => {
        jokeData.map((joke) => {
          createCard(joke);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  //Sets up the state and ui for card
  function createCard(joke) {
    setJokeText(joke.setup);
    setJokeId("#" + joke.id);
    jokeTextValue = joke.punchline;
    setPunchlineText(joke.punchline);
    resetJokeCategory();
  }

  //Fix for radio fields being reset to default because of setting state
  function resetJokeCategory() {
    if (typeParam === "programming") {
      document.getElementById("jokeGeneral").checked = "false";
      document.getElementById("jokeProgramming").checked = "true";
    }
    if (typeParam === "knock-knock") {
      document.getElementById("jokeGeneral").checked = "false";
      document.getElementById("jokeKnock").checked = "true";
    }
  }

  //Just a jsx element for initial page load
  const jokeButton = (
    <button
      id="jokeButton"
      onClick={handleClick}
      className="ui button massive blue"
    >
      Request Joke
    </button>
  );

  return (
    <div className="ui container " id="jokesContainer">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2 style={{ float: "left" }}>{jokeId}</h2>
            <h1 className="ui text">{jokeText}</h1>
            <h5> {jokeType}</h5>
          </div>
          <div className="flip-card-back">
            <h2 style={{ float: "right" }}>{jokeId}</h2>
            <h1>{punchlineText}</h1>
          </div>
        </div>
      </div>
      <div className="ui container center aligned" id="jokesButtonContainer">
        {jokeButton}
      </div>
    </div>
  );
};

export default JokesCard;
