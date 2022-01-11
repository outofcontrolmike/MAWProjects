import React from "react";
import HikeCard from "./HikeCard";

//Container for Hiking card
export default function HikeContent(props) {
  return (
    <div className="ui column container segment" id="hikeContent">
      <HikeCard hikes={props} />
    </div>
  );
}
