import React, { useState } from "react";

export default function HikingTrails(props) {
  return (
    <div className="ui column">
      <div className="ui container segment piled raised">
        <div className="ui list" style={{ fontSize: "1.5rem" }}>
          <div  style={{color: "teal" }}id="busiek" className="item">
            Busiek State Forest
          </div>
          <div className="item" id="hercules">Hercules Glades Wilderness</div>
          <div className="item" id="piney">Piney Creek Wilderness</div>
          {/* <div className="item" id="twoRivers">Two Rivers Mountain Bike Park</div> */}
        </div>
      </div>   
       </div>
  );
}
