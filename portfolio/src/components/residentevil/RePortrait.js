import picture from "../../assets/img/res1_chris.png"
import React from 'react'
import ReGames from "../../components/residentevil/ReGames"

export default function RePortrait(props) {
    console.log("props from portrait", props);

    return (
        <div className="ui column">
        <img
          className="ui image medium centered rounded"
          style={{ marginTop: "6rem" }}
          alt={"Me"}
          src={picture}
        ></img>
        <div className="ui">
            <ReGames data={props} />
        </div>
      </div>
    )
}
