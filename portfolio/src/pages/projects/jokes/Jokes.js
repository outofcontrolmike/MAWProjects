import React from "react";
import JokesMenu from "../../../components/jokes/JokesMenu";
import JokesCard from "../../../components/jokes/JokesCard";
import JokesFooter from "../../../components/jokes/JokesFooter";

import { useState } from "react";

//nova-joke-api.netlify.app/.netlify/functions/index/api/random

/*  ALL ENDPOINTS
One Random - https://nova-joke-api.netlify.app/.netlify/functions/index/api/random
Ten Random - https://nova-joke-api.netlify.app/.netlify/functions/index/api/ten


// Categories to request - >  general, knock-knock, programming

One Cateogry type Joke - https://nova-joke-api.netlify.app/.netlify/functions/index/api/jokes/[type]/random
Ten random jokes based on category - https://nova-joke-api.netlify.app/.netlify/functions/index/api/jokes/[type]/ten


//Status of API (like how many jokes are in the dataset) - > https://nova-joke-api.netlify.app/.netlify/functions/index/status
*/

//Programming Related Jokes
export default function Jokes(props) {
  let [jokeQuantity, setJokeQuantity] = useState(0);

  return (
    <div id="jokesApp" style={{ backgroundColor: "white", color: "black" }}>
      <div className="ui fluid stackable grid center aligned">
        <JokesMenu addJokes={setJokeQuantity} jokeQuantity={jokeQuantity} />
        <div
          className="ui container fluid"
          style={{ backgroundColor: "" }}
          id="jokesContent"
        >
          <JokesCard addJokes={setJokeQuantity} jokeCount={jokeQuantity} />
          <div className="ui container fluid" id="jokesList"></div>
        </div>
        <JokesFooter />
      </div>
    </div>
  );
}
