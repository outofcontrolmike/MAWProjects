import picture from '../assets/img/Yosemite.jpg';
import { Link } from "react-router-dom";


function Home() {

    function handleHover() {
        document.getElementById('landingPage').style.filter = "brightness(100%)";
        document.getElementById('blink').style.animation = "blinker 0s linear infinite"
    }
    function handleLeave() {
        document.getElementById('landingPage').style.filter = "brightness(50%)";
        document.getElementById('blink').style.animation = "blinker 10s linear infinite"

    }

    return(
        <div id="overlay">
            <img className="ui image fluid" id="landingPage" src={picture}/>
            <a id="landingPageText"className="ui">
                <Link to="/about">
        <h1><span className="ui text large" id="blink" onMouseOver={handleHover} onMouseLeave={handleLeave} >Let's Acheive Goals Together!</span></h1>
            </Link></a>
        </div>
    
    )
}

export default Home;