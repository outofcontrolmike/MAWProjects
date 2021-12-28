//Cool Calc Project - in React
/*Originally wrote February 14th 2021
  Rewrote November 9th 2021*/

import HomeLink from "../../../components/links/Home";

export default function CoolCalc() {
  //Had to set timeout because component wasn't rendering correctly
  setTimeout(loadEverything, 5);

  //Loads all the functionality
  function loadEverything() {
    //grand total
    let total = document.getElementById("total");
    let num1, num2;

    //inputs / operator
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");

    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2");
    let operator = document.getElementById("operator");

    //buttons
    let btnAdd = document.getElementById("add");
    let btnSub = document.getElementById("minus");
    let btnMult = document.getElementById("mult");
    let btnDivide = document.getElementById("divide");

    //event listeners
    num1.addEventListener(
      "input",
      function () {
        toggleButtons("false");
      },
      false
    );

    num2.addEventListener("input", function () {
      toggleButtons("false");
    });

    //MouseOUt
    num1.addEventListener("blur", fieldCheck);
    num2.addEventListener("blur", fieldCheck);
    num1.addEventListener("mouseout", fieldCheck);
    num2.addEventListener("mouseout", fieldCheck);

    btnAdd.addEventListener("click", addition);
    btnSub.addEventListener("click", subtraction);
    btnMult.addEventListener("click", multiply);
    btnDivide.addEventListener("click", divide);
    document.getElementById("clear").addEventListener("click", clearValues);

    //disables arithmetic buttons if fields are empty
    function fieldCheck() {
      if (num1.value === "" || num2.value === "") {
        toggleButtons("true");
      }
    }

    //Sets up display values for Added values
    function addition() {
      declareNums();
      shownWork("+");
      total.innerHTML = num1 + num2;
    }

    //Sets up display values for Subtracted values
    function subtraction() {
      declareNums();
      shownWork("-");
      total.innerHTML = num1 - num2;
    }

    //Sets up display values for Multiplied values
    function multiply() {
      declareNums();
      shownWork("*");
      total.innerHTML = num1 * num2;
    }

    //Sets up display values for Divided values
    function divide() {
      declareNums();
      shownWork("/");
      total.innerHTML = (num1 / num2).toFixed(2);
    }

    //Resets the form fields
    function clearValues() {
      declareNums();
      document.getElementById("num1").value = "";
      document.getElementById("num2").value = "";
      total.innerHTML = "";
      value1.innerText = "";
      value2.innerHTML = "";
      operator.innerHTML = "";
      document.getElementById("calcBr").style.visibility = "hidden";

      toggleButtons("true");
    }

    //Sets the value elements with calculated values
    function shownWork(symbol) {
      declareNums();
      value1.innerHTML = num1;
      value2.innerHTML = num2 + " = ";
      operator.innerHTML = symbol;
    }

    //converts to number
    function declareNums() {
      document.getElementById("calcBr").style.visibility = "visible";
      num1 = parseInt(document.getElementById("num1").value);
      num2 = parseInt(document.getElementById("num2").value);
    }

    //Handles toggling buttons
    function toggleButtons(handleToggle) {
      if (handleToggle === "false") {
        handleToggle = false;
      } else {
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

  return (
    <>
      <body style={{ marginTop: "100px" }}>
        <div
          className="ui two column container very padded relaxed"
          style={{ width: "fit-content", marginTop: "5rem" }}
        >
          <div className="ui column">
            <div style={{ marginRight: "5rem" }}>
              <label
                style={{
                  fontFamily: "'Rock Salt', cursive",
                  marginRight: "1rem",
                }}
              >
                Num1
              </label>
              <input
                style={{
                  borderColor: "white",
                  height: "100px",
                  fontSize: "xx-large",
                  width: "210px",
                  backgroundColor: "black",
                  color: "green",
                  fontFamily: "'Rock Salt', cursive",
                }}
                type="number"
                id="num1"
                maxlength="12"
                className="input field"
              />
              <label
                style={{
                  marginLeft: "1rem",
                  marginRight: "1rem",
                  fontFamily: "'Rock Salt', cursive",
                }}
              >
                Num2
              </label>
              <input
                style={{
                  fontFamily: "'Rock Salt', cursive",
                  borderColor: "white",
                  height: "100px",
                  fontSize: "xx-large",
                  width: "210px",
                  backgroundColor: "black",
                  color: "green",
                }}
                type="number"
                id="num2"
                maxlength="12"
                max="12"
              />
            </div>
            <div
              className="container"
              style={{ textAlign: "center", padding: "30px" }}
            >
              <button
                id="add"
                type="button"
                style={{ margin: ".5rem" }}
                className="ui inverted green button"
              >
                {" "}
                <span id="coolBtn">Add</span>
              </button>
              <button
                id="minus"
                type="button"
                style={{ margin: ".5rem" }}
                className="ui inverted red button coolBtn"
              >
                {" "}
                <span id="coolBtn">Subtract</span>
              </button>
              <button
                id="mult"
                type="button"
                style={{ margin: ".5rem" }}
                className="ui inverted purple button coolBtn"
              >
                {" "}
                <span id="coolBtn">Multiply</span>
              </button>
              <button
                id="divide"
                type="number"
                style={{ margin: ".5rem" }}
                className="ui inverted teal button coolBtn"
              >
                {" "}
                <span id="coolBtn">Divide</span>
              </button>
              <button
                id="clear"
                type="number"
                style={{ margin: ".5rem" }}
                className="ui inverted brown button coolBtn"
              >
                {" "}
                <span id="coolBtn">Clear</span>
              </button>
            </div>
          </div>
          <hr
            id="calcBr"
            style={{ borderColor: "white", visibility: "hidden" }}
          />
          <br></br>
          <div className="ui column" id="sum" style={{ height: "5rem" }}>
            <span
              style={{ fontFamily: "'Rock Salt', cursive" }}
              id="value1"
            ></span>
            <span
              style={{ fontFamily: "'Rock Salt', cursive" }}
              id="operator"
            ></span>
            <span
              style={{ fontFamily: "'Rock Salt', cursive" }}
              id="value2"
            ></span>
            <span
              style={{
                fontFamily: "'Rock Salt', cursive",
                color: "green",
                fontSize: "xx-large",
                marginLeft: "2%",
              }}
              className="blink"
              id="total"
            ></span>
          </div>
        </div>
      </body>
      <span style={{ marginTop: "5rem" }}>
        <HomeLink />
      </span>
    </>
  );
}
