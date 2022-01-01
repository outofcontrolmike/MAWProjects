import { Link } from "react-router-dom";

//Navigation menu component
function Navigation(props) {
  return (
    <div
      className="ui menu secondary stackable"
      id="navigation"
      style={{ backgroundColor: "black" }}
    >
      <div className="ui container">
        <a className="active item">
          <Link id="goldText" to="/">
            Home
          </Link>
        </a>
        <a className="item">
          <Link id="goldText" to="/about">
            About
          </Link>
        </a>
        <a className="item">
          <Link id="goldText" to="/resume">
            Resume
          </Link>
        </a>
        <a className="item">
          <Link id="goldText" to="/projects">
            Projects
          </Link>{" "}
        </a>
        <a className="item">
          <Link id="goldText" to="/comments">
            Comments
          </Link>
        </a>
        <a className="item">
          <Link id="goldText" to="/contact">
            Contact
          </Link>
        </a>
        <a className="item">
          <Link id="goldText" to="/faq">
            FAQ
          </Link>
        </a>
      </div>
    </div>
  );
}

export default Navigation;
