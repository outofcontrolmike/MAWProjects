export default function Players(props) {
    return(
        <>
{/* // <!--Players--> */}
<div class="ui two column doubling stackable grid container segment" style={{marginTop: "50px;"}}>
  
  {/* <!-- first player--> */}
    <div class="column ui" id="players">
  <p id="pTurtle"  id="pNum">1UP</p>
  <div id="playerDetails playerOne">
    <div class="ui two column grid container">
      <p id="pTurtle"  class="column ui" id="name"></p>
      <p id="pTurtle"  class="column ui" id="score"></p>
    </div>
    <div class="ui two column grid container">
  <div class="ui column">
      <p id="pTurtle"  id="lives"></p>
      </div>  
      <div class="ui column" id="healthContainer">
  <p id="pTurtle"  id="health"></p>
      </div>
    </div>
  </div>
    </div>
  {/* <!-- second player--> */}
  <div class="column ui" id="players">
    <p id="pTurtle"  id="pNum">2 UP</p>
  <div id="playerDetails">
    <p id="pTurtle"  id="pBlink">Press Start to Play</p>
    </div>
</div>
</div>
    {/* // <!--End Players--> */}
        </>
    )
}

