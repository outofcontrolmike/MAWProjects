import React from "react";

//Dog Footer
export default function DogFooter() {
  return (
    <div
      className="ui two column doubling stackable grid relaxed"
      id="dogFooter"
    >
      <div className="ui column center aligned" id="dogCreds">
        <a target="_blank" href="https://dog.ceo">
          Dog images and dataset provided by - Dog API
        </a>
      </div>
      <div className="ui column center aligned" id="dogText">
        <a href="/projects">Back to Projects</a>
      </div>
    </div>
  );
}
