import React from "react";
import { NavLink } from "react-router-dom";

//Navigation Menu
export default function CatNavigation() {
  //Changes non-selected main menu items
  function selectAllItems(e) {
    document.querySelectorAll(".catItemSelected").forEach((item) => {
      item.style.color = "thistle";
    });
  }

  selectAllItems();

  return (
    <div
      className="ui four item secondary pointing menu center aligned stackable"
      id="catNavigationMenu"
    >
      <a className="item">
        <NavLink
          activeClassName="catItemSelected"
          to="/cats"
          id="catNavItem"
          style={{ color: "beige", fontSize: "1.5rem" }}
        >
          Random Fact
        </NavLink>
      </a>
      <a className="item">
        <NavLink
          activeClassName="catItemSelected"
          to="/catsList"
          id="catNavItem"
          style={{ color: "beige", fontSize: "1.5rem" }}
        >
          Random Facts List
        </NavLink>
      </a>
      <a className="item">
        <NavLink
          activeClassName="catItemSelected"
          to="/breedsList"
          id="catNavItem"
          style={{ color: "beige", fontSize: "1.5rem" }}
        >
          Breeds List
        </NavLink>
      </a>

      <a className="item">
        <NavLink
          activeClassName="catItemSelected"
          to="/projects"
          id="catNavItem"
          style={{ color: "beige", fontSize: "1.5rem" }}
        >
          Back to Projects
        </NavLink>
      </a>
    </div>
  );
}
