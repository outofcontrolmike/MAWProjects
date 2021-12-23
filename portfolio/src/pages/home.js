import picture from "../assets/img/profilePic-removebg-preview.png";
function Home() {


  return (
    <div className="ui two column stackable grid" id="landingPage">
      <div className="ui column" style={{margin:"auto", textAlign: "center"}}>
        <span style={{ textAlign: "left", color: "gold" }} className="ui text gold massive">
          Michael A. Wilson
        </span>
    
    <h2 id="landingPageSub">Aspring Front End Developer Currently Working With React</h2>    
        <div>

          <button className="ui button massive inverted basic learnMore yellow" style={{marginTop: "2rem"}}>
              <a
                href="about"
                style={{color: "gold", outlineColor : "blue"}}
              >
                Learn More </a>
            
          </button>
        </div>
      </div>
      <div className="ui column">
        <img className="ui image big center aligned" style={{textAlign: "center", marginLeft: "15%"}}  src={picture}></img>
      </div>
    </div>
  );
}

export default Home;
