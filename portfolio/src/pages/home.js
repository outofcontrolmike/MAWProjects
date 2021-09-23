import picture from '../assets/img/Yosemite.jpg';

function Home() {
    return(
        <div id="overlay">
            <img className="ui image fluid" id="landingPage" src={picture}/>
        <h1 id="landingPageText">Developing software is similar to adventuring. Sometimes you get lost, but you make it out stronger and alive.</h1>
        </div>
    
    )
}

export default Home;