import React from "react";
import { useState } from "react";

//Sets up and displays Jokes
export default function JokesCard(props) {
  //Hooks for the card mainly
  const [jokeType, setJokeCategory] = useState("Type of Joke");
  const [jokeQuantity, setJokeQuantity] = useState("random");
  const [jokeId, setJokeId] = useState("ID of Joke");
  const [jokeText, setJokeText] = useState(
    "I'm not good at coming up with jokes, but this API is."
  );

  const [punchlineText, setPunchlineText] = useState("Testing for now");

  let jokesData = props.jokeData;
  //somewhat gloabl variables
  let jokeTextValue = "";
  let typeParam = "";
  let quantityParam = "";

  function pageLoadJoke() {
    let url =
      "https://nova-joke-api.netlify.app/.netlify/functions/index/api/random/";
    fetch(url)
      .then((response) => response.json())
      .then((jokeData) => {
        console.log("jokeData", jokeData);
        setJokeText(jokeData.setup);
        setJokeCategory(jokeData.type);
        console.log(jokeData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  setTimeout(() => {
    pageLoadJoke();
  }, 10000);

  //Original button click
  function handleClick() {
    setJokeType();
    // setQuantity();
    fetchJoke();
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
    return;
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

  //Create card based on data - accepts joke data as a parameter
  function createCard(joke) {
    // props.data += 1;
    setCardState(joke);
    createButton(showPunchLine, "Show Punchline");
    let jokeButton = document.getElementById("jokeButton");
    jokeButton.remove();
  }

  //Handles creating a new button element and appending to dom
  function createButton(functionCall, buttonText) {
    let button = document.createElement("button");
    button.classList = "ui button massive blue";
    button.id = "jokeButton";
    button.innerHTML = buttonText;
    button.addEventListener("click", functionCall);
    document.getElementById("jokesContainer").append(button);
  }

  //Setting Hook States
  function setCardState(joke) {
    setJokeText(joke.setup);
    setJokeId(joke.id);
    jokeTextValue = joke.punchline;
  }

  //Swaps out old button for new to basically reset program
  function showPunchLine() {
    document.getElementById("jokeButton").remove();
    createButton(handleClick, "Request a new joke");
    setJokeText(jokeTextValue);
  }

  //Just a jsx element for initial page load
  const jokeButton = (
    <button
      id="jokeButton"
      onClick={handleClick}
      className="ui button massive blue"
    >
      Request Punchline
    </button>
  );

  return (
    <div className="ui container " id="jokesContainer">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1 className="ui text">{jokeText}</h1>
            <p> {jokeType}</p>
            {jokeButton}
          </div>
          <div className="flip-card-back">
            <h1 className="ui text">"PunchLine should go here!</h1>
            {punchlineText}
          </div>
        </div>
      </div>
    </div>
  );
}
