import React from "react";
import HikeCard from "./HikeCard";

//Container for Hiking card
export default function HikeContent(props) {
  return (
    <div className="ui column" id="hikeContent">
      <HikeCard hikes={props} />
    </div>
  );
}
