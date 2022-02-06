import React from "react";
import { useState } from "react";
//Jokes Menu
export default function JokesMenu(props) {

  const [jokeType, setType] = useState("/general");
  const [jokeQuantity, setJokeQuantity] = useState("/random");

  
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
    console.log(url);
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

  function displayStatus(message) {
    window.alert(message);
  }

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
                <input type="radio" name="frequency" id="jokeAny" checked="checked" />
                <label>Any</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" id="jokeGeneral" />
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
        <div className="ui form" id="jokeQuantity" style={{ fontSize: "24px" }}>
          <div className="inline fields">
            <label>Quantity</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="quantity" id="jokeQuantityOne" checked="checked" />
                <label>One</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="quantity" id="jokeQuantityTen" />
                <label>Ten</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="item 
      ui button huge basic red"
        onClick={handleClick}
      >
        Go
      </button>
      <button
        className="item 
      ui button huge basic blue"
        onClick={requestStatus}
      >
        API Status
      </button>
    </div>
  );
}
