import { NavLink } from "react-router-dom";

//Navigation menu component
function Navigation(props) {
  return (
    <div
      className="ui menu secondary stackable"
      id="navigation"
      style={{ backgroundColor: "black" }}
    >
      <div className="ui container navContainer" id="navContainer">
        <a className="item">
          <NavLink id="goldText" to="/">
            Home
          </NavLink>
        </a>
        <a className="item">
          <NavLink activeClassName="selected" id="goldText" to="/about">
            About
          </NavLink>
        </a>
        <a className="item">
          <NavLink activeClassName="selected" id="goldText" to="/resume">
            Resume
          </NavLink>
        </a>
        <a className="item">
          <NavLink activeClassName="selected" id="goldText" to="/projects">
            Projects
          </NavLink>{" "}
        </a>
        <a className="item">
          <NavLink activeClassName="selected" id="goldText" to="/comments">
            Comments
          </NavLink>
        </a>
        <a className="item">
          <NavLink activeClassName="selected" id="goldText" to="/contact">
            Contact
          </NavLink>
        </a>
        <a className="item">
          <NavLink activeClassName="selected" id="goldText" to="/faq">
            FAQ
          </NavLink>
        </a>
      </div>
    </div>
  );
}

export default Navigation;
