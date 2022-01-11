import React from "react";
import { NavLink } from "react-router-dom";

//Navigation menu for project
export default function HikeNavigation() {
  return (
    <div className="ui five item menu secondary pointing center aligned">
        <a className="item">
          <NavLink to="/hikes" style={{ color: "black" }}>
            Hikes
          </NavLink>
        </a>

        <a className="item">
          <NavLink
            activeClassName="selected"
            to="/hikeGallery"
            style={{ color: "black" }}
          >
           Gallery
          </NavLink>
        </a>
        <a className="item">
          <NavLink
            activeClassName="selected"
            to="/hikeContact"
            style={{ color: "black" }}
          >
            Contact
          </NavLink>
        </a>
        <a className="item">
          <NavLink
            activeClassName="selected"
            to="spfGallery"
            style={{ color: "black" }}
          >
            Springfield Gallery
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
