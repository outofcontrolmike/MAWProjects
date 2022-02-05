import React from "react";

//Sets up and displays jokes
export default function JokesCard(props) {
  console.log(props);
  return (
    <div className="ui container segment center aligned" id="jokesContainer">
      <h1 className="ui text">
        I'm not good at coming up with jokes, but this API is.
      </h1>
      <p> - This will be the type of joke -</p>
      <button className="ui button massive blue">Request Joke</button>
    </div>
  );
}
