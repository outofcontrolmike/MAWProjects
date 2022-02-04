import React from "react";
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
export default function Jokes() {
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div className="ui container fluid stackable grid container">
        <div className="ui menu four item stackable grid"></div>
      </div>
    </div>
  );
}
