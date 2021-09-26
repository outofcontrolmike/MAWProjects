import picture from '../assets/img/Yosemite.jpg';
import { Link } from "react-router-dom";


function Home() {
    return(
        <div id="overlay">
            <img className="ui image fluid" id="landingPage" src={picture}/>
            <a id="landingPageText">
                <Link to="/about">
        <h1>You and I are both working to complete projects.  Why not accomplish these things together?</h1>
        <p id="clickHere">Click here to learn more</p>
            </Link></a>
        </div>
    
    )
}

export default Home;