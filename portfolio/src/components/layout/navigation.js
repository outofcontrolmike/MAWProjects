import { Link } from "react-router-dom";

function Navigation(props) {
    return (
<div className="ui fixed inverted menu stackable collapsable">
  <div className="ui container">
      <a className="header item">
          <img className="logo small" alt="logo" src="img/logo2.jpg"       
          />
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
