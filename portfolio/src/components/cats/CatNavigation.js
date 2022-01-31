import React from 'react';
import { NavLink } from "react-router-dom";


//Navigation Menu
export default function CatNavigation(props) {
  return (
    <div className="ui five item menu secondary pointing center aligned stackable" id="catNavigationMenu">
      <div className='header item'  style={{ color: "white", fontSize: "1.5rem" }}>
        Cat Facts
      </div>
      <a className="item">
        <NavLink
          activeClassName="catItemSelected"
          to="/cats" id="catNavItem" style={{ color: "white", fontSize: "1.5rem" }}>
          Random Fact
        </NavLink>
      </a>
      <a className="item">

        <NavLink
          activeClassName="catItemSelected"
          to="/catsList" id="catNavItem" style={{ color: "white", fontSize: "1.5rem" }}>
          Random Facts List
        </NavLink>
      </a>
      <a className="item">

        <NavLink
          activeClassName="catItemSelected"
          to="/breedsList" id="catNavItem" style={{ color: "white", fontSize: "1.5rem" }}>
          Breeds List
        </NavLink>
      </a>

      <a className="item">

        <NavLink
          activeClassName="catItemSelected"
          to="/projects" id="catNavItem" style={{ color: "black", fontSize: "1.5rem" }}>
          Back to Projects
        </NavLink>
      </a>
    </div>
  )
}
