import React from "react";

//Header for hikes project
function HikeHeader() {
  return (
    <div className="ui" style={{paddingTop: "1rem"}}>
      <h1
        className="ui text header center aligned massive"
        id="hikeHeader"
        style={{ fontSize: "2rem", paddingTop: "1rem"}}
      >
        417 Missouri Hikes
      </h1>
    </div>
  );
}

export default HikeHeader;
