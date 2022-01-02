import { Link } from "react-router-dom";

//Navigation menu component
function Navigation(props) {

function setupActive() {

  // Get the container element
var navContainer = document.getElementById("navContainer");

console.log("navContainer", navContainer);
// Get all buttons with class="btn" inside the container
var links = navContainer.getElementsByClassName("item");

console.log("links", links);
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
}

setTimeout(() => {
  setupActive()
}, 10);
  return (
    <div
      className="ui menu secondary pointing stackable"
      id="navigation"
      style={{ backgroundColor: "black" }}
    >
      <div className="ui container navContainer" id="navContainer">
        <a className="item">
          <Link id="goldText" to="/">
            Home
          </Link>
        </a>
        <a className="item active">
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
