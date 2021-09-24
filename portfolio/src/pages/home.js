import picture from '../assets/img/Yosemite.jpg';
import { Link } from "react-router-dom";


function Home() {
    return(
        <div id="overlay">
            <img className="ui image fluid" id="landingPage" src={picture}/>
            <a>
                <Link to="/about">
        <h1 id="landingPageText">What do business owners and developers have in common?  We both strive for adventure...Click here to start again</h1>
            </Link></a>
        </div>
    
    )
}

export default Home;