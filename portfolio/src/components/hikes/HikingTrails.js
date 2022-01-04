import React from "react";

export default function HikingTrails(props) {
  console.log("props from hking trails", props);
  function changeMe(e) {
    console.log("hello!!!", e);
    if (e.target.id === "busiek") {
      document.getElementById("busiek").style.color = "teal";
      document.getElementById("hikeMap").innerHTML = props.data.map[0];
    }
  }

  return (
    <div className="ui column">
      <div className="ui container segment piled raised">
        <div className="ui list" style={{ fontSize: "2rem" }}>
          <div onClick={changeMe} id="busiek" className="item">
            Busiek State Forest
          </div>
          <div className="item">Hercules Glades Wilderness</div>
          <div className="item">Piney Creek Wilderness</div>
          <div className="item">Two Rivers Mountain Bike Park</div>
        </div>
      </div>
    </div>
  );
}
