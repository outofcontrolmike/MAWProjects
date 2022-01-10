import React from "react";
import HikeCard from "./HikeCard";
export default function HikeContent(props) {
  return (
    <div className="ui column container segment" id="hikeContent">
      <HikeCard hikes={props} />
    </div>
  );
}
