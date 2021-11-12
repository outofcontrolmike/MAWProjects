import mario from "./images/mario.png";
import yoshi from "./images/yoshi.png";
import marioWin from "./images/mariowin.png";
import yoshiWin from "./images/yoshiwin.png";

import star from "./images/off.png";
import flag from "./images/flag.png";

export default function Images() {
    return(
    <>
        <img
        className="ui image small centered"
        id="star"
        src={star}
        alt="blackstar"
      />
      <img
        className="ui image small" style={{marginTop: "100px"}}
        id="mario"
        src={mario}
        alt="mariostanding"
      />
      <img
        className="ui image small"
        id="yoshi"
        src={yoshi}
        alt="yoshistanding"
      />
      <img className="ui image medium" 
      id="flag" 
      src={flag} 
      alt="finishflag" />
      <img
        className="ui image small centered"
        id="winMario"
        src={marioWin}
        alt="MarioShows"
      />
      <img
        className="ui image small centered"
        id="yoshiWin"
        src={yoshiWin}
        alt="YoshiShows"
      />
    </>
    )
}