import React from "react";
import { NavLink } from "react-router-dom";

//Navigation menu for project
export default function HikeNavigation() {
  return (
    <div className="ui five item secondary pointing menu center aligned stackable" id="hikeNavigation">
      <a className="item">

        <NavLink          
        activeClassName="hikeSelected"
          to="/hikes" id="hikeNavItem" style={{ color: "black", fontSize: "1.5rem"}}>
          Hikes
        </NavLink>
      </a>

      <a className="item">
        <NavLink
          activeClassName="hikeSelected"
          to="/hikeGallery"
          style={{ color: "black", fontSize: "1.5rem" }}
        >
          Hike
          Gallery
        </NavLink>
      </a>
      <a className="item">
        <NavLink
          activeClassName="hikeSelected"
          to="spfGallery"
          style={{ color: "black", fontSize: "1.5rem" }}
        >
          Springfield Gallery
        </NavLink>
      </a>
      <a className="item">
        <NavLink
          activeClassName="hikeSelected"
          to="/hikeContact"
          style={{ color: "black", fontSize: "1.5rem" }}
        >
          Contact
        </NavLink>
      </a>
      <a className="item">
        <NavLink
          activeClassName="hikeSelected"
          to="/projects"
          style={{ color: "black", fontSize: "1.5rem" }}
        >
          Projects
        </NavLink>
      </a>
    </div>
    
  );
}
