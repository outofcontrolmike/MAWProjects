import React from "react";
import { NavLink } from "react-router-dom";

export default function HikeNavigation() {
  return (
    <div className="ui four item menu secondary pointing center aligned">
        <a className="item">
          <NavLink to="/hikes" style={{ color: "black" }}>
            Hikes
          </NavLink>
        </a>

        <a className="item">
          <NavLink
            activeClassName="selected"
            to="/hikes"
            style={{ color: "black" }}
          >
           Gallery
          </NavLink>
        </a>
        <a className="item">
          <NavLink
            activeClassName="selected"
            to="/hikes"
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
            Projects
          </NavLink>
        </a>
      </div>
  );
}
