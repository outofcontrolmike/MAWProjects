import picture from "../assets/img/guitar.png";
import { Link } from "react-router-dom";

function Home() {
  // function handleHover() {
  //     document.getElementById('landingPage').style.filter = "brightness(80%)";
  //     document.getElementById('blink').style.animation = "blinker 0s linear infinite"
  // }
  // function handleLeave() {
  //     document.getElementById('landingPage').style.filter = "brightness(50%)";
  //     document.getElementById('blink').style.animation = "blinker 10s linear infinite"

  // }

  return (
    // <div id="overlay">
    //     <img className="ui image fluid" id="landingPage" src={picture}/>
    //     <a id="landingPageText" className="ui">
    //         <Link id="link"to="/about">
    // <h1><span className="ui text large" id="blink" onMouseOver={handleHover} onMouseLeave={handleLeave} >Let's Achieve Goals Together!</span></h1>
    //     </Link></a>
    // </div>

    <div className="ui" style={{ backgroundColor: "black" }}>
      <div className="ui column">
        <a className="item">
          <Link to="/resume">
            {" "}
            <h1 style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
              Resume
            </h1>
          </Link>
        </a>
      </div>
      <div className="ui two column grid">
        <div className="ui column">
          <a className="item">
            <Link to="/about">
              {" "}
              <h1>About</h1>
            </Link>
          </a>
        </div>
        <div className="ui column">
          <a className="item">
            <Link to="/projects">
              {" "}
              <h1>Projects</h1>
            </Link>
          </a>{" "}
        </div>
      </div>

      <div className="ui two column grid">
        <div className="ui column">
          <a className="item">
            <Link to="/">
              <h1 style={{ textAlign: "left" }}>Home</h1>
            </Link>
          </a>
        </div>
        <div className="ui column">
          <a className="item">
            <Link to="/contact">
              <h1 style={{ textAlign: "right" }}>Contact</h1>
            </Link>
          </a>
        </div>
      </div>
      <div className="ui three column grid stackable">
        <div className="ui column">
          <h1 style={{ textAlign: "left" }}>About section 1</h1>
        </div>
        <div className="ui column">
          <img className="ui image large circular" src={picture}></img>
        </div>
        <div className="ui column">
          <h1>About section 2</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
