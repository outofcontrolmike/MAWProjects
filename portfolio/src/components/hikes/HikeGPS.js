import React from "react";

export default function HikeGPS(props) {
  console.log("props GPS", props.data[0]);
  return (
    <div className="ui column" id="hikeMap">
      {props.data[0].map}
    </div>
  );
}
