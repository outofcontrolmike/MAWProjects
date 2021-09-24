import picture from '../assets/img/Yosemite.jpg';
import { Link } from "react-router-dom";


function Home() {
    return(
        <div id="overlay">
            <img className="ui image fluid" id="landingPage" src={picture}/>
            <a>
                <Link to="/about">
        <h1 id="landingPageText">You and I both looking to reach milestones. Let's do this together</h1>
            </Link></a>
        </div>
    
    )
}

export default Home;