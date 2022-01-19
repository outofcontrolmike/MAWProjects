import React from "react";
import { NavLink } from "react-router-dom";

export default function ReMenu(props) {
  console.log("props in reMenu", props);

  function assignListeners() {
    let reMenuItems = document.querySelectorAll(".reMenuItem");
    console.log("reMenuItems", reMenuItems);
    reMenuItems.forEach((item) => {
      item.addEventListener("click", imageSwap);
    });
  }

  function imageSwap(e) {
    let imageToSwap = document.getElementById("resPortrait");
    console.log("e from reMenu", e);
    if (e.target.id === "jill") {
      console.log("hello this is jill");
      imageToSwap.src = props.imgs[3].src;
    }
  }

  assignListeners();
  return (
    <div
      className="ui four item secondary pointing menu center aligned stackable"
      id="reMenu"
    >
      <a
        activeClassName="reSelected"
        className="item reMenuItem"
        id="chris"
        style={{ color: "white" }}
      >
        Chris Redfield
      </a>
      <a
        activeClassName="reSelected"
        id="jill"
        style={{ color: "white" }}
        className="item reMenuItem"
      >
        Jill Valentine
      </a>
      <a
        className="item reMenuItem"
        activeClassName="reSelected"
        id="leon"
        style={{ color: "white" }}
      >
        Leon S. Kennedy
      </a>
      <a
        className="item"
        activeClassName="reSelected"
        style={{ color: "white" }}
      >
        <NavLink
          activeClassName="reSelected"
          to="/projects"
          style={{ color: "grey" }}
        >
          Projects
        </NavLink>
      </a>
    </div>
  );
}
