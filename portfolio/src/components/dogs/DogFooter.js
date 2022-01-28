import React from "react";

//Dog Footer
export default function DogFooter() {
  return (
    <div
      className="ui two column doubling stackable grid relaxed"
      id="dogFooter"
    >
      <div className="ui column" id="dogCreds">
        <a href="/https://dog.ceo/dog-api/">
          Dog images and dataset provided by - Dog API
        </a>
      </div>
      <div className="ui column" id="dogText">
        <a href="/projects">Back to Projects</a>
      </div>
    </div>
  );
}
