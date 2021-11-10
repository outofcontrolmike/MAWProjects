
export default function CoolCalc() {
 
  setTimeout(loadEverything, 5);
  function loadEverything() {
  
//grand total
let total = document.getElementById('total');
let num1,num2;

//inputs / operator
 num1 = document.getElementById("num1");
 num2 = document.getElementById("num2");

let value1 = document.getElementById("value1");
let value2 = document.getElementById('value2');
let operator = document.getElementById('operator');

//buttons
let btnAdd = document.getElementById('add')
let btnSub = document.getElementById('minus')
let btnMult = document.getElementById('mult')
let btnDivide = document.getElementById('divide')

//event listeners
num1.addEventListener('input', function () {
    toggleButtons('false');
},false);

num2.addEventListener('input', function() {
    toggleButtons('false');
})

//MouseOUt
num1.addEventListener('blur', fieldCheck);
num2.addEventListener('blur', fieldCheck);
num1.addEventListener('mouseout', fieldCheck);
num2.addEventListener('mouseout', fieldCheck);

btnAdd.addEventListener("click", addition);
btnSub.addEventListener('click', subtraction);
btnMult.addEventListener('click', multiply);
btnDivide.addEventListener('click', divide);
document.getElementById('clear').addEventListener('click', clearValues);


//Functions

function fieldCheck() {
    if(num1.value == "" || num2.value == "")
    {
        console.log("testing");
        toggleButtons('true');
    }
}

function addition() {
    declareNums();
    shownWork("+");
    total.innerHTML = num1 + num2;

}

function subtraction() {
    declareNums();
    shownWork("-");
    total.innerHTML = num1 - num2;
}

function multiply() {
    declareNums()
    shownWork("*");
    total.innerHTML = num1 * num2;
}

function divide() {
    declareNums()
    shownWork("/")
    total.innerHTML = (num1 / num2).toFixed(2);
}

function clearValues() {
    declareNums();
    document.getElementById('num1').value= "";
    document.getElementById('num2').value= "";
    total.innerHTML = "";
    value1.innerText = "";
    value2.innerHTML = "";
    operator.innerHTML = "";

    toggleButtons("true");
}

function shownWork(symbol) {
    declareNums();
    value1.innerHTML = num1;
    value2.innerHTML = num2 + " = ";
    operator.innerHTML = symbol;

}

function declareNums() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
}

function toggleButtons(handleToggle) {
if(handleToggle === "false")
{
    handleToggle = false;
}

else{
    handleToggle = true;
}

btnAdd.disabled = handleToggle;
btnSub.disabled = handleToggle;
btnMult.disabled = handleToggle;
btnDivide.disabled = handleToggle;
}

//On page load
toggleButtons("true");
  }
    return(
   
      <body style={{marginTop: "100px"}}>
        <head>
          </head>

        <div className="ui segment two column container" style={{width: "fit-content", backgroundColor: "black", marginTop: "5rem"}}>
        <div className="ui column">
          <label style={{fontFamily:"fantasy"}}>Num1</label>
          <input style={{height: '100px', fontSize:"xx-large", width:"210px", backgroundColor: "black", color:"green"}} type="number" id="num1" maxlength="12" className="input inverted"/>
          <label>Num2</label>
          <input style={{height: '100px', fontSize:"xx-large", width:"210px", backgroundColor: "black", color:"green"}} type="number" id="num2" maxlength="12" max="12"/>
          <div className="container">
          <button   id="add" type="button"  className="ui inverted green button" style={{fontFamily: "cursive"}}>  <span style={{fontFamily: 'fantasy'}} style={{fontFamily: 'fantasy'}}>Add</span></button>
          <button   id="minus" type="button" className="ui inverted red button"> <span style={{fontFamily: 'fantasy'}}>Subtract</span></button>
          <button   id="mult" type="button" className="ui inverted purple button"> <span style={{fontFamily: 'fantasy'}}>Multiply</span></button>
          <button   id="divide" type="number" className="ui inverted teal button"> <span style={{fontFamily: 'fantasy'}}>Divide</span></button>
          <button   id="clear" type="number" className="ui inverted brown button"> <span style={{fontFamily: 'fantasy'}}>Clear</span></button>
        </div>
      </div>
      <hr />
      <br></br>
      <div className="ui column" id="sum">
           <span style={{fontFamily: 'fantasy'}} id="value1">
      
          </span>
           <span style={{fontFamily: 'fantasy'}} id="operator">
      
          </span>
           <span style={{fontFamily: 'fantasy'}} id="value2">
          </span>
             <span style={{fontFamily: 'fantasy', color:"green", fontSize: "xx-large", marginLeft: "2%"}} className="blink" id="total">
              
            </span>
      
      </div>
      </div>
      </body>

    )
}