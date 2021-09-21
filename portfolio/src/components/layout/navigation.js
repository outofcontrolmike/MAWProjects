import { Link } from "react-router-dom";

function Navigation(props) {
    return (
<div className="ui secondary pointing menu" id="navigation">
  <div className="ui container">
      <a className="active item">
          <Link to="/">
              Home
              </Link>
      </a>
      <a className="item">
      <Link to="/about">
              About
              </Link>
      </a>
      <a className="item">
      <Link to="/projects">
              Projects
              </Link>      </a>
      <a className="item">
      <Link to="/contact">
              Contact
              </Link>
      </a>
  </div>
</div>
    )     
}

export default Navigation;
