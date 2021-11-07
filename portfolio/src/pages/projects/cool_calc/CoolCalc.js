export default function CoolCalc() {
 

    
    return(
        <div className="ui segment two column container inverted" style={{width: "fit-content"}}>
        <div className="ui column">
          <label>Num1</label>
          <input type="number" id="num1" maxlength="12" className="input inverted"/>
          <label>Num2</label>
          <input type="number" id="num2" maxlength="12" max="12"/>
          <div className="container">
          <button id="add" type="button"  className="ui inverted green button"><span>Add</span></button>
          <button id="minus" type="button" className="ui inverted red button"><span>Subtract</span></button>
          <button id="mult" type="button" className="ui inverted purple button"><span>Multiply</span></button>
          <button id="divide" type="number" className="ui inverted teal button"><span>Divide</span></button>
          <button id="clear" type="number" className="ui inverted brown button"><span>Clear</span></button>
        </div>
      </div>
      <hr />
      <br></br>
      <div className="ui column" id="sum">
          <span id="value1">
      
          </span>
          <span id="operator">
      
          </span>
          <span id="value2">
          </span>
            <span className="blink" id="total">
              
            </span>
      
      </div>
      </div>
    )
}