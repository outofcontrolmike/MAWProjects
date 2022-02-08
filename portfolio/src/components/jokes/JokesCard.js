import React from "react";
import { useState } from "react";

//Sets up and displays jokes
export default function JokesCard(props) {
  const [jokeType, setJokeCategory] = useState(null);
  const [jokeQuantity, setJokeQuantity] = useState("random");
  const [jokeId, setJokeId] = useState("ID of Joke")
  const [jokeText, setJokeText] = useState("I'm not good at coming up with jokes, but this API is.");
  const [punchLineText, setPunchLineText] = useState("blah for now");

  const [buttonText, setButtonText] = useState("Fetch Joke");
  //Create some refs...
  
let jokejoke = "";
let quantity = "";

  function handleClick() {
    setJokeType();
    setQuantity();
    fetchJoke();
  }

  function setJokeType() {

    //JokeType  
    let jokeGeneral = document.getElementById('jokeGeneral');
    let jokeKnock = document.getElementById('jokeKnock');
    let jokeProgramming = document.getElementById('jokeProgramming');

    if(jokeGeneral.checked) {
      setJokeCategory("general")
      jokejoke = "general"
    }
    if(jokeKnock.checked) {
      setJokeCategory("knock-knock")
      jokejoke = "knock-knock";
    }
    if(jokeProgramming.checked) {
      setJokeCategory("programming")
      jokejoke = "programming";
    }
    
  }

  function setQuantity() {
    //Quantity
    let jokeQuantityOne = document.getElementById('jokeQuantityOne');
    jokeQuantityOne.checked ? setJokeQuantity("random") : setJokeQuantity("ten");
  }

  function fetchJoke() {
    let url = "https://nova-joke-api.netlify.app/.netlify/functions/index/api" + "/" + jokejoke  + "/" + jokeQuantity;
    fetch(url)
    .then((response) => response.json())
    .then((jokeData) => {
      console.log(jokeData);
      createCard(jokeData);
      // })
  })
    .catch((error) => {
      console.error("Error:", error);
    });
}

  //create card based on data
  function createCard(joke) {
    document.getElementById('jokeText').innerHTML = joke[0].setup;
    setJokeId(joke.id);
    setButtonText("Retrieve Punchlne")
    let jokeButton = document.getElementById('jokeButton');
    jokeButton.removeEventListener("onClick", handleClick);
    showPunchLine(joke);
  }



  //inserts new info into card
  function showPunchLine(joke) {
    console.log("punchling joke", joke[0].punchline);
    // console.log(jokeButton, "jokeButton after removing eventListenr")

  }
  return (
    <div className="ui container segment center aligned" id="jokesContainer">
      <h1 className="ui text" id="jokeText">
        {jokeText}
      </h1>
      <p> {jokeType}</p>
      <button id="jokeButton" onClick={handleClick} className="ui button massive blue">{buttonText}</button>
    </div>
  );
}
