import React from "react";
import { NavLink } from "react-router-dom";

//Main Navigation menu component
export default function ReMenu(props) {
  console.log("props in reMenu", props.imgs);
  //assign click events to navigation menu
  function assignListeners() {
    let reMenuItems = document.querySelectorAll(".reMenuItem");
    reMenuItems.forEach((item) => {
      item.addEventListener("click", imageSwap);
    });
  }

  //controls swapping image back to first game for character
  function imageSwap(e) {
    let imageToSwap = document.getElementById("resPortrait");
    if (e.target.id === "chris") {
      imageToSwap.src = props.imgs[0].src;
    }
    if (e.target.id === "jill") {
      imageToSwap.src = props.imgs[1].src;
    }
    if (e.target.id === "leon") {
      imageToSwap.src = props.imgs[2].src;
    }
  }
  //Listener events for navigation items
  setTimeout(() => {
    assignListeners();
  }, 10);

  return (
    <div
      className="ui four item secondary pointing menu center aligned stackable"
      id="reMenu"
      style={{}}
    >
      <a
        activeClassName="reSelected"
        className="item reMenuItem"
        id="chris"
        style={{ color: "crimson" }}
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
