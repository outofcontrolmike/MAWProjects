import React from "react";
import { useState } from "react";

//Sets up and displays jokes
export default function JokesCard(props) {
  const [jokeType, setJokeCategory] = useState("general");
  const [jokeQuantity, setJokeQuantity] = useState("random");
  const [jokeId, setJokeId] = useState("ID of Joke");
  const [jokeText, setJokeText] = useState(
    "I'm not good at coming up with jokes, but this API is."
  );
  const [buttonText, setButtonText] = useState("Fetch Joke");
  let jokeTextValue = "";

  let typeParam = "";
  let quantityParam = "";

  function handleClick() {
    setJokeType();
    setQuantity();
    fetchJoke();
  }

  function setJokeType() {
    //JokeType
    let jokeGeneral = document.getElementById("jokeGeneral");
    let jokeKnock = document.getElementById("jokeKnock");
    let jokeProgramming = document.getElementById("jokeProgramming");

    if (jokeGeneral.checked) {
      setJokeCategory("general");
      typeParam = "general";
    }
    if (jokeKnock.checked) {
      setJokeCategory("knock-knock");
      typeParam = "knock-knock";
    }
    if (jokeProgramming.checked) {
      setJokeCategory("programming");
      typeParam = "programming";
    }
    return;
  }

  function setQuantity() {
    //Quantity
    let jokeQuantityOne = document.getElementById("jokeQuantityOne");
    jokeQuantityOne.checked
      ? setJokeQuantity("random")
      : setJokeQuantity("ten");
  }

  function fetchJoke() {
    console.log(jokeType, jokeQuantity);
    let url =
      "https://nova-joke-api.netlify.app/.netlify/functions/index/api" +
      "/" +
      typeParam +
      "/" +
      jokeQuantity;
    fetch(url)
      .then((response) => response.json())
      .then((jokeData) => {
        console.log(jokeData);
        jokeData.map((joke) => {
          createCard(joke);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  //create card based on data
  function createCard(joke) {
    let jokeButton = document.getElementById("jokeButton");
    setCardState1(joke);
    createButton(showPunchLine, "Show Punchline")
    jokeButton.remove();
    jokeTextValue = joke.punchline;
  }

    //Use this to swap buttons out
    function createButton(functionCall, buttonText) {
      let button = document.createElement('button');
      button.classList = "ui button massive blue";
      button.id = "jokeButton";
      button.innerHTML = buttonText;
      button.addEventListener('click', functionCall);
      document.getElementById('jokesContainer').append(button);
    }

  function setCardState1(joke) {
    setJokeText(joke.setup);
    setJokeId(joke.id);
  }

  //inserts new info into card
  function showPunchLine() {
    document.getElementById('jokeButton').remove();
    createButton(handleClick,"Request a new joke");
    setJokeText(jokeTextValue);
  }


  const jokeButton = (
    <button
      id="jokeButton"
      onClick={handleClick}
      className="ui button massive blue"
    >
      {buttonText}
    </button>
  );

  return (
    <div className="ui container segment center aligned" id="jokesContainer">
      <h1 className="ui text">{jokeText}</h1>
      <p> {jokeType}</p>
      {jokeButton}
    </div>
  );
}
