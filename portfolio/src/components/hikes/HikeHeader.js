import React from "react";

//Header for hikes project
function HikeHeader() {
  return (
    <div className="ui">
      <h1
        className="ui text header center aligned massive"
        id="hikeHeader"
        style={{ fontSize: "3rem", paddingTop: "2rem", color: "forestgreen" }}
      >
        417 Missouri Hikes
      </h1>
    </div>
  );
}

export default HikeHeader;
