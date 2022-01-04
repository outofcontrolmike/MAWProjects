import React from "react";
import HikeCard from "./HikeCard";
export default function HikeContent(props) {
  console.log("props", props);

  return (
    <div className="ui column" id="hikeContent">
      <HikeCard hikes={props} />
    </div>
  );
}
