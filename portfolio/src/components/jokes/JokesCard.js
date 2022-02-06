import React from "react";
import { useState } from "react";

//Sets up and displays jokes
export default function JokesCard(props) {
  const [jokeType, setType] = useState("/general");
  const [jokeQuantity, setJokeQuantity] = useState("/random");

  //Create some refs...
  
  function handleClick() {

    setQuantity();
    setJokeType();
    fetchJoke();
  }

  function setJokeType(jokeType) {

    //JokeType  
    // let jokeAny = document.getElementById('jokeAny');
    let jokeGeneral = document.getElementById('jokeGeneral');
    let jokeKnock = document.getElementById('jokeKnock');
    let jokeProgramming = document.getElementById('jokeProgramming');

    if(jokeGeneral.checked) {
      setType("/general")
    }
    else if(jokeKnock.checked) {
      setType("/knock-knock")
    }
    else if(jokeProgramming.checked) {
      setType("/programming")
    }
    else {
      setType("")
    }
    
  }

  function setQuantity(jokeQuantity) {
    //Quantity
    let jokeQuantityOne = document.getElementById('jokeQuantityOne');
    jokeQuantityOne.checked ? setJokeQuantity("/random") : setJokeQuantity("/ten");
  }

  function fetchJoke() {
    let url = "https://nova-joke-api.netlify.app/.netlify/functions/index/api" + jokeType + jokeQuantity;
    fetch(url)
    .then((response) => response.json())
    .then((joke) => {
      console.log(joke);
      // displayStatus(joke.message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

  //create card based on data
  function createCard(data, quantity) {}

  //inserts new info into card
  function showPunchLine(joke) {}
  return (
    <div className="ui container segment center aligned" id="jokesContainer">
      <h1 className="ui text">
        I'm not good at coming up with jokes, but this API is.
      </h1>
      <p> - Joke Type is random unless filtered -</p>
      <button onClick={handleClick} className="ui button massive blue">Request Joke</button>
    </div>
  );
}
