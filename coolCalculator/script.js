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
    total.innerHTML = num1 / num2;
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