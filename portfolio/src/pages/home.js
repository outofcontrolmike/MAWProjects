import picture from '../assets/img/landingPage.jpg';

function Home() {
    return(
  <div class="column">
        <img src={picture} className="ui image fluid" id="landingpageImage"></img>
  </div>
    )
}

export default Home;