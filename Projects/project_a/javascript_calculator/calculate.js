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
 *  3 - Add multiplication and division operations to the calculate function
 *  4 - When times (*) is pressed clear the current value and update the operator
 *  5 - Create the dividePressed method. This method should perform the previous
 *        calculation if there one. Then store the current value as the previous value
 *        and update the display element to the current value. Finally clear the 
 *        current value and update the operator
 * 
 * Demonstration :
 *  Open the calculator.html file in a browser. Then using the displayed
 *    calculator perform some calculations as requested by your councilor.
 *    Be prepared to explain how the code in this file works to your councilor
 ***************************************************************************/

let prevValue = ""
let currentValue = ""
// TODO 1 - Create a variable called 'operator' to represent the last operator clicked

/*
 * This function is called when one of the numbers of the calculator is pressed.
 *  It is passed the num argument which represents the value of the number pressed
 */
function numPressed(num) {
  console.log("#" + num + " pressed")
  
  currentValue = currentValue + num;
  document.getElementById("display").setAttribute("value", currentValue);
}

/*
 * This function is called when the plus symbol on the calculator is pressed.
 */
function plusPressed() {
  console.log("+ pressed")
  // Check if there is an operator set
  if (operator != "") {
    // If there is an operator set and there is a currentValue then calculate the previous result
    //  If the operator is set and there is not a current value then just change the current operator and stop
    if (currentValue != "") {
      currentValue = calculate();
    } else {
      operator = "+";
      return;
    }
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
  console.log("- pressed")
  // Check if there is an operator set
  if (operator != "") {
    // If there is an operator set and there is a currentValue then calculate the previous result
    //  If the operator is set and there is not a current value then just change the current operator and stop
    if (currentValue != "") {
      currentValue = calculate();
    } else {
      operator = "+";
      return;
    }
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
  console.log("* pressed")
  // Check if there is an operator set
  if (operator != "") {
    // If there is an operator set and there is a currentValue then calculate the previous result
    //  If the operator is set and there is not a current value then just change the current operator and stop
    if (currentValue != "") {
      currentValue = calculate();
    } else {
      operator = "+";
      return;
    }
  }

  prevValue = currentValue;
  document.getElementById("display").setAttribute("value", currentValue);

  currentValue = "";
  operator = "*";
}

// TODO 4 - Create the dividePressed method. This method should perform the previous
//            calculation if there one. Then store the current value as the previous value
//            and update the display element to the current value. Finally clear the 
//            current value and update the operator

function dotPressed() {
  console.log(". pressed")
  currentValue = currentValue + ".";
}

/*
 * This function is called when the equals symbol on the calculator is pressed.
 */
function equalPressed() {
  console.log("= pressed")
  currentValue = calculate();
  document.getElementById("display").setAttribute("value", currentValue);

  operator = ""
}

/*
 * This function is called to perform a calculation based on the currentValue,
 *   previous value and operator
 */
function calculate() {
  if (operator == "+") {
    return parseFloat(currentValue) + parseFloat(prevValue);
  } else if (operator == "-") {
    return parseFloat(currentValue) - parseFloat(prevValue);
  }
  // TODO 3 - Add multiplication and division operations to the calculate function

  return parseFloat(currentValue)
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