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

    <div className="ui two column stackable grid" id="landingPage">
      <div className="ui column" style={{margin:"auto", textAlign: "center"}}>
        <span style={{ textAlign: "left", color: "gold" }} className="ui text gold massive">
          Michael A. Wilson
        </span>
        <h2>Yada yada yada ....</h2>
        
        <div>

          <button className="ui button massive basic yellow" style={{marginTop: "2rem"}}>
              <a
                href="about"
                style={{color: "gold"}}
              >
                Let's build some shit              </a>
            
          </button>
        </div>
      </div>
      <div className="ui column">
        <img className="ui image huge middle aligned " style={{textAlign: "center"}}  src={picture}></img>
      </div>
    </div>
  );
}

export default Home;
