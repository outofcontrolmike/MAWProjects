export default function Images() {
    return(
    <div>
        <img
        className="ui image small centered"
        id="star"
        src="./images/off.png"
        alt="blackstar"
      />
      <img
        className="ui image small" style={{marginTop: "100px"}}
        id="mario"
        src="./images/mario.png"
        alt="mariostanding"
      />
      <img
        className="ui image small"
        id="yoshi"
        src="yoshi.png"
        alt="yoshistanding"
      />
      <img className="ui image medium" id="flag" src="flag.png" alt="finishflag" />
      <img
        className="ui image small centered"
        id="winMario"
        src="marioWin.png"
        alt="MarioShows"
      />
      <img
        className="ui image small centered"
        id="yoshiWin"
        src="yoshiwin.png"
        alt="YoshiShows"
      />
    </div>
    )
}