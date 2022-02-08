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

  const [punchLineText, setPunchLineText] = useState("blah for now");
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
    jokeButton.remove();
    let punchLineButton = document.createElement("button");
    punchLineButton.className = "ui button blue massive";
    punchLineButton.id = "punchLineButton";
    punchLineButton.addEventListener("click", showPunchLine);
    document.getElementById("jokesContainer").append(punchLineButton);
    punchLineButton.innerHTML = "Punch Line";
    console.log("joke", joke);
    jokeTextValue = joke.punchline;
  }

  function setCardState1(joke) {
    setJokeText(joke.setup);
    setJokeId(joke.id);
  }

  //inserts new info into card
  function showPunchLine() {
    setJokeText(jokeTextValue);
    setButtonText("Fetch New Joke");
  }

  return (
    <div className="ui container segment center aligned" id="jokesContainer">
      <h1 className="ui text">{jokeText}</h1>
      <p> {jokeType}</p>
      <button
        id="jokeButton"
        onClick={handleClick}
        className="ui button massive blue"
      >
        {buttonText}
      </button>
    </div>
  );
}
