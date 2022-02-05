import React from "react";

//Jokes Menu
export default function jokesMenu(props) {
  //This needs to check some shit - what Type of joke was selected, and quantity
  function handleClick() {}

  function fetchJoke(type, quantity) {
    let url = "";
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
        <div className="ui form" style={{ fontSize: "24px" }}>
          <div className="inline fields">
            <label>Type of Joke?</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" checked="checked" />
                <label>Any</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>General</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Knock Knock</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Programming</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="ui form" style={{ fontSize: "24px" }}>
          <div className="inline fields">
            <label>Quantity</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="quantity" checked="checked" />
                <label>One</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="quantity" />
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
