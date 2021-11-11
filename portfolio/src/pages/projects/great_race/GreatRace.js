import Images from "./Images";
import background from "./images/background.jpg";
export default function GreatRace() {
    return(
        <div id="greatRaceBg" style={{ backgroundImage: `url(${background})`}}>
            <div className="ui fluid container"> 
            <h1 id="header" className="ui massive">The Great Race!  Click on the star to get started.</h1>
      <div id="scores" className="ui container segment" style={{textAlign: "left", height: "200px", width :"150px", float: "left"}}>
      <p>Mario:<span id="marioScore" class="ui red text large" style={{paddingLeft: "10px"}}></span> </p>
      <p>Yoshi:<span id="yoshiScore" class="ui green text large"style={{paddingLeft: "10px"}}></span> </p>
      <hr />
        <a href="/projects"><span class="ui text blue medium">Home</span></a>
        
      </div>
      <Images />

            </div>
        </div>
    )
}
