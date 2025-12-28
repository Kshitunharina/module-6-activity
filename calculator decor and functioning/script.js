// STEP 1: Get the display areas
let historyDisplay = document.getElementById("history-value");
let outputDisplay = document.getElementById("output-value");

// STEP 2: Store values in variables
let firstNumber = "";
let operator = "";
let secondNumber = "";

// STEP 3: Get all number buttons
let numberButtons = document.getElementsByClassName("number");

// STEP 4: When a number is clicked
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", function () {
    // Add number to secondNumber
    secondNumber = secondNumber + this.innerText;

    // Show number on screen
    outputDisplay.innerText = secondNumber;
  });
}



// STEP 5: Get all operator buttons
let operatorButtons = document.getElementsByClassName("operator");

// STEP 6: When an operator is clicked
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function () {
    // CLEAR button
    if (this.id === "clear") {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      historyDisplay.innerText = "";
      outputDisplay.innerText = "";
    }


    // BACKSPACE button
    else if (this.id === "backspace") {
      secondNumber = secondNumber.slice(0, -1);
      outputDisplay.innerText = secondNumber;
    }

    // EQUAL button
    else if (this.id === "=") {
      let result = 0;

      // Convert text to number
      let num1 = Number(firstNumber);
      let num2 = Number(secondNumber);

      // Do calculation
      if (operator === "+") {
        result = num1 + num2;
      } else if (operator === "-") {
        result = num1 - num2;
      } else if (operator === "*") {
        result = num1 * num2;
      } else if (operator === "/") {
        result = num1 / num2;
      } else if (operator === "%") {
        result = num1 % num2;
      }

      // Show result
      outputDisplay.innerText = result;
      historyDisplay.innerText = "";

      // Reset values
      firstNumber = "";
      secondNumber = result.toString();
      operator = "";
    }

    // OTHER OPERATORS (+ - * / %)
    // OTHER OPERATORS (+ - * / %)
    else {
      if (secondNumber !== "") {
        firstNumber = secondNumber;
        operator = this.id; // 👈 FIX HERE

        // Show history (pretty symbol)
        historyDisplay.innerText = firstNumber + " " + this.innerText;

        secondNumber = "";
        outputDisplay.innerText = "";
      }
    }
  });
}