import React from "react";
import { NavLink } from "react-router-dom";

export default function HikeNavigation() {
  return (
    <div className="ui menu secondary pointing stackable">
      <div className="ui grid container center aligned" id="hikeNavigation">
        <a className="item">
          <NavLink to="/" style={{ color: "black" }}>
            Home
          </NavLink>
        </a>
        <a className="item">
          <NavLink
            activeClassName="selected"
            style={{ color: "black" }}
            to="/about"
          >
            About
          </NavLink>
        </a>
        <a className="item">
          <NavLink
            activeClassName="selected"
            to="/resume"
            style={{ color: "black" }}
          >
            Hikes Collection
          </NavLink>
        </a>
        <a className="item">
          <NavLink
            activeClassName="selected"
            to="/contact"
            style={{ color: "black" }}
          >
            Contact
          </NavLink>
        </a>
        <a className="item">
          <NavLink
            activeClassName="selected"
            to="/projects"
            style={{ color: "black" }}
          >
            Back to Projects
          </NavLink>
        </a>
      </div>
    </div>
  );
}
