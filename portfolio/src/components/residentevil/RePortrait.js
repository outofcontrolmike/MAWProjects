import React from "react";
import ReGames from "../../components/residentevil/ReGames";

export default function RePortrait(props) {
  return (
    <div className="ui column">
      <img
        className="ui image huge centered rounded"
        id="resPortrait"
        alt={"res Character"}
        src={"img/residentEvil/res1_chris.png"}
      ></img>
      <div className="ui">
        <ReGames data={props} />
      </div>
    </div>
  );
}
