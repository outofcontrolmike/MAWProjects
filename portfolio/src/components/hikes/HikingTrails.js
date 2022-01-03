import React from "react";

export default function HikingTrails() {
  function changeMe(e) {
    console.log("hello!!!");
    document.getElementById("busiek").style.color = "teal";
    swapHikeInfo();
  }

  function swapHikeInfo() {
    console.log("working form here inside swaphikeinfo");
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
