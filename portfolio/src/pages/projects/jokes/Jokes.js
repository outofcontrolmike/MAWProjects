import React from "react";
import JokesMenu from "../../../components/jokes/JokesMenu";
import JokesCard from "../../../components/jokes/JokesCard";
import JokesFooter from "../../../components/jokes/JokesFooter";
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
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div className="ui container fluid stackable container">
        <JokesMenu data={props} />
        <div
          className="ui container fluid"
          style={{ height: "100vh", backgroundColor: "" }}
        >
          <JokesCard data={props} />
        </div>
        <JokesFooter />
      </div>
    </div>
  );
}
