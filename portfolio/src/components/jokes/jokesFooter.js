import React from "react";

//Footer component
export default function jokesFooter() {
  return(
  <div
  className="ui two column doubling stackable grid relaxed"
  id="jokesFooter"
>
  <div className="ui column center aligned" id="jokeFooterLeft">
    <a target="_blank" href="https://nova-joke-api.netlify.app/.netlify/functions/index/api">
      Jokes Data Provided by Nova Joke API
    </a>
  </div>
  <div className="ui column center aligned" id="">
    <a href="/projects">Back to Projects</a>
  </div>
</div>

  )}
