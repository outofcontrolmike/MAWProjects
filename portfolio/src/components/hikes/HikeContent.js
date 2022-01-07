import React from "react";
import HikeCard from "./HikeCard";
export default function HikeContent(props) {
  return (
    <div className="ui column" id="hikeContent">
      <HikeCard hikes={props} />
    </div>
  );
}
