import React from "react";
import { NavLink } from "react-router-dom";

//Navigation menu for project
export default function HikeNavigation() {
  return (
    <div className="ui five item secondary pointing menu center aligned stackable" id="hikeNavigation">
      <a className="item">

        <NavLink          
        activeClassName="hikeSelected"
          to="/hikes" style={{ color: "black" }}>
          Hikes
        </NavLink>
      </a>

      <a className="item">
        <NavLink
          activeClassName="hikeSelected"
          to="/hikeGallery"
          style={{ color: "black" }}
        >
          Hike
          Gallery
        </NavLink>
      </a>
      <a className="item">
        <NavLink
          activeClassName="hikeSelected"
          to="spfGallery"
          style={{ color: "black" }}
        >
          Springfield Gallery
        </NavLink>
      </a>
      <a className="item">
        <NavLink
          activeClassName="hikeSelected"
          to="/hikeContact"
          style={{ color: "black" }}
        >
          Contact
        </NavLink>
      </a>
      <a className="item">
        <NavLink
          activeClassName="hikeSelected"
          to="/projects"
          style={{ color: "black" }}
        >
          Projects
        </NavLink>
      </a>
    </div>
    
  );
}
