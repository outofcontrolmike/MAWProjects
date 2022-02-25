import React from "react";
import JokesMenu from "../../../components/jokes/JokesMenu";
import JokesCard from "../../../components/jokes/JokesCard";
import JokesFooter from "../../../components/jokes/JokesFooter";

import { useState } from "react";

//Programming Related Jokes
export default function Jokes(props) {
  let [jokeQuantity, setJokeQuantity] = useState(0);

  document.title = "Random Jokes";
  return (
    <div id="jokesApp" style={{ color: "black" }}>
      <div
        className="ui fluid stackable grid center aligned"
        id="jokesAppContainer"
      >
        <div className="ui item center aligned"></div>
        <JokesMenu addJokes={setJokeQuantity} jokeQuantity={jokeQuantity} />
        <div className="ui container" id="jokesContent">
          <JokesCard addJokes={setJokeQuantity} jokeCount={jokeQuantity} />
          <div className="ui container fluid" id="jokesList"></div>
        </div>
        <JokesFooter />
      </div>
    </div>
  );
}
