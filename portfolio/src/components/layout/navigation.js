import { NavLink } from "react-router-dom";

//Navigation menu component
function Navigation(props) {
  return (
    <div
      className="ui menu secondary stackable five item"
      id="portfolioNavigation"
    >
      <div className="ui container navContainer" id="navContainer">
        <a className="item" id="mainNavigationItem">
          <NavLink activeClassName="portfolioSelected" id="goldText" to="/home">
            Home
          </NavLink>
        </a>
        <a className="item" id="mainNavigationItem">
          <NavLink
            activeClassName="portfolioSelected"
            id="goldText"
            to="/skills"
          >
            Skills
          </NavLink>
        </a>
        <a className="item" id="mainNavigationItem">
          <NavLink
            activeClassName="portfolioSelected"
            id="goldText"
            to="/projects"
          >
            Projects
          </NavLink>{" "}
        </a>

        <a className="item" id="mainNavigationItem">
          <NavLink
            activeClassName="portfolioSelected"
            id="goldText"
            to="/resume"
          >
            Resume
          </NavLink>
        </a>

        <a className="item" id="mainNavigationItem">
          <NavLink
            activeClassName="portfolioSelected"
            id="goldText"
            to="/contact"
          >
            Contact
          </NavLink>
        </a>

        {/* <a className="item" id="mainNavigationItem">
          <NavLink
            activeClassName="portfolioSelected"
            id="goldText"
            to="/comments"
          >
            Comments
          </NavLink>
        </a> */}
        {/* <a className="item" id="mainNavigationItem">
          <NavLink activeClassName="portfolioSelected" id="goldText" to="/faq">
            FAQ
          </NavLink>
        </a> */}
      </div>
    </div>
  );
}

export default Navigation;
