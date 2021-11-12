import mario from "img/greatRace/mario.png";
import yoshi from "img/greatRace/yoshi.png";
import marioWin from "img/greatRace/mariowin.png";
import yoshiWin from "img/greatRace/yoshiwin.png";

import star from "img/greatRace/off.png";

export default function Images() {
  return (
    <>
      <img
        className="ui image small centered"
        id="star"
        src={star}
        alt="blackstar"
      />
      <img
        className="ui image small"
        style={{ marginTop: "100px" }}
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
      <img
        className="ui image medium"
        id="flag"
        src="/img/greatRace/flag.png"
        alt="finishflag"
      />
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
  );
}
