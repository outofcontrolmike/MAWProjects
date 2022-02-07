import React from "react";
import { useState } from "react";

//Sets up and displays jokes
export default function JokesCard(props) {
  const [jokeType, setJokeCategory] = useState("programming");
  const [jokeQuantity, setJokeQuantity] = useState("random");
  const [jokeId, setJokeId] = useState("ID of Joke")
  const [jokeText, setJokeText] = useState("I'm not good at coming up with jokes, but this API is.");
  const [punchLineText, setPunchLineText] = useState("blah for now");
  //Create some refs...
  
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
    }
    if(jokeKnock.checked) {
      setJokeCategory("knock-knock")
    }
    if(jokeProgramming.checked) {
      setJokeCategory("programming")
    }

    console.log(jokeType, "jokeType")
    return;
  }

  function setQuantity() {
    //Quantity
    let jokeQuantityOne = document.getElementById('jokeQuantityOne');
    jokeQuantityOne.checked ? setJokeQuantity("random") : setJokeQuantity("ten");
    console.log(jokeQuantity, "jokeQuantity");
  }

  function fetchJoke() {
    console.log(jokeType,jokeQuantity);
    let url = "https://nova-joke-api.netlify.app/.netlify/functions/index/api" + "/" + jokeType + "/" + jokeQuantity;
    fetch(url)
    .then((response) => response.json())
    .then((jokeData) => {
      console.log(jokeData);
      jokeData.map((joke) => {
        createCard(joke);
      })
  })
    .catch((error) => {
      console.error("Error:", error);
    });
}

  //create card based on data
  function createCard(joke) {
    setJokeText(joke.setup); 
    // setJokeQuantity(joke.quantity);
    setJokeId(joke.id);
    setJokeCategory(joke.type);
  }

  //inserts new info into card
  function showPunchLine(joke) {}

  return (
    <div className="ui container segment center aligned" id="jokesContainer">
      <h1 className="ui text">
        {jokeText}
      </h1>
      <p> {jokeType}</p>
      <button onClick={handleClick} className="ui button massive blue">Request Joke</button>
    </div>
  );
}
