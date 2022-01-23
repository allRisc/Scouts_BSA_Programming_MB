/***************************************************************************
 * File: calculate.js
 * 
 * Description :
 *  This file contains all of the JavaScript necessary for the
 *  JavaScript calculator Project in accordance with requirement 5a
 * 
 * TODO :
 *  1 - Create a variable to represent the last operator clicked
 *  2 - When Minus is pressed store the current value as the previous value
 *        and update the display element to the current value
 *  3 - When times (*) is pressed clear the current value and update the operator
 *  4 - Create the dividePressed method. This method should perform the previous
 *        calculation if there one. Then store the current value as the previous value
 *        and update the display element to the current value. Finally clear the 
 *        current value and update the operator
 *  5 - Add multiplication and division operations to the calculate function
 * 
 * Demonstration :
 *  Open the calculator.html file in a browser. Then using the displayed
 *    calculator perform some calculations as requested by your councilor.
 *    Be prepared to explain how the code in this file works to your councilor
 ***************************************************************************/

let prevValue = ""
let currentValue = ""
// TODO 1 - Create a variable to represent the last operator clicked

/*
 * This function is called when one of the numbers of the calculator is pressed.
 *  It is passed the num argument which represents the value of the number pressed
 */
function numPressed(num) {
  currentValue = currentValue + num;
  document.getElementById("display").setAttribute("value", currentValue);
}

/*
 * This function is called when the plus symbol on the calculator is pressed.
 */
function plusPressed() {
  if (operator != "") {
    calculate();
  }

  prevValue = currentValue;
  document.getElementById("display").setAttribute("value", currentValue);

  currentValue = "";
  operator = "+";
}

/*
 * This function is called when the plus symbol on the calculator is pressed.
 */
function minusPressed() {
  if (operator != "") {
    calculate();
  }

  // TODO 2 - When Minus is pressed store the current value as the previous value
  //            and update the display element to the current value

  currentValue = "";
  operator = "-";

}

/*
 * This function is called when the times symbol (*) on the calculator is pressed.
 */
function timesPressed() {
  if (operator != "") {
    calculate();
  }

  prevValue = currentValue;
  document.getElementById("display").setAttribute("value", currentValue);

  // TODO 3 - When times (*) is pressed clear the current value and update the operator
}

// TODO 4 - Create the dividePressed method. This method should perform the previous
//            calculation if there one. Then store the current value as the previous value
//            and update the display element to the current value. Finally clear the 
//            current value and update the operator

function dotPressed() {
  currentValue = currentValue + ".";
}

/*
 * This function is called when the equals symbol on the calculator is pressed.
 */
function equalPressed() {
  calculate();
  document.getElementById("display").setAttribute("value", currentValue);

  operator = ""
}

/*
 * This function is called to perform a calculation based on the currentValue,
 *   previous value and operator
 */
function calculate() {
  if (operator == "+") {
    currentValue = parseFloat(currentValue) + parseFloat(prevValue);
  } else if (operator == "-") {
    currentValue = parseFloat(currentValue) - parseFloat(prevValue);
  }
  // TODO 5 - Add multiplication and division operations to the calculate function
}

/*
 * This function is called when the clear button on the calculator is pressed.
 */
function clearPressed() {
  operator = ""
  currentValue = ""
  prevValue    = ""
  document.getElementById("display").setAttribute("value", currentValue);
}