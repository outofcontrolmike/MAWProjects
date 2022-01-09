import React, { useState } from "react";

export default function HikingTrails(props) {
  return (
    <div className="ui column">
      <div className="ui container segment piled raised">
        <div className="ui list" id="hikeList" style={{ fontSize: "1.5rem" }}>
          <div style={{ color: "teal" }} id="busiek" className="item">
            Busiek State Forest - East
          </div>
          <div className="item" id="compton">Compton Hollow Conservation Area</div>
          <div className="item" id="hening">Hening Conservation Area</div>
          <div className="item" id="hercules">Hercules Glades Wilderness</div>
          <div className="item" id="lakeSpringfield">Lake Springfield Park</div>
          <div className="item" id="lostHill">Lost Hill Park</div>
          <div className="item" id="piney">Piney Creek Wilderness</div>
          <div className="item" id="pleasant">Pleasant Hope Conservation Area</div>
          <div className="item" id="springfieldNC">Springfield Nature Center</div>
          <div className="item" id="twoRivers">Two Rivers Mountain Bike Park</div>
          <div className="item" id="valleyWater">Valley Water Mill Park</div>
          <div className="item" id="wilsonsCreek">Wilson's Creek National Battlefield</div>
        </div>
      </div>
    </div>
  );
}
