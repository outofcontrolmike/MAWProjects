import React from "react";

//Cat Footer
export default function CatFooter() {
  return (
    <div
      className="ui two column doubling stackable grid relaxed"
      id="catFooter"
    >
      <div className="ui column center aligned" id="catCreds">
        <a target="_blank" href="https://catfact.ninja">
          Cat data set provided by - Cat Fact Ninja
        </a>
      </div>
      <div className="ui column center aligned" id="catText">
        <a href="/projects">Back to Projects</a>
      </div>
    </div>
  );
}
