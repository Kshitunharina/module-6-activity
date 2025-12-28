let historyDisplay = document.getElementById("history-value");
let outputDisplay = document.getElementById("output-value");

let firstNumber = "";
let secondNumber = "";
let operator = "";

// NUMBER BUTTONS
let numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    secondNumber += this.innerText;
    outputDisplay.innerText = secondNumber;
  });
}

// OPERATOR BUTTONS
let operators = document.getElementsByClassName("operator");
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {

    // CLEAR
    if (this.id === "clear") {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      historyDisplay.innerText = "";
      outputDisplay.innerText = "";
    }

    // BACKSPACE
    else if (this.id === "backspace") {
      secondNumber = secondNumber.slice(0, -1);
      outputDisplay.innerText = secondNumber;
    }

    // EQUALS
    else if (this.id === "equals") {
      if (firstNumber === "" || secondNumber === "") return;

      let result = calculate(Number(firstNumber), Number(secondNumber), operator);
      outputDisplay.innerText = result;
      historyDisplay.innerText = "";

      firstNumber = result.toString();
      secondNumber = "";
      operator = "";
    }

    // OTHER OPERATORS
    else {
      if (secondNumber === "") return;

      if (firstNumber !== "") {
        firstNumber = calculate(
          Number(firstNumber),
          Number(secondNumber),
          operator
        ).toString();
      } else {
        firstNumber = secondNumber;
      }

      if (this.id === "add") operator = "+";
      if (this.id === "subtract") operator = "-";
      if (this.id === "multiply") operator = "*";
      if (this.id === "divide") operator = "/";
      if (this.id === "mod") operator = "%";

      historyDisplay.innerText = firstNumber + " " + operator;
      secondNumber = "";
      outputDisplay.innerText = "";
    }
  });
}

// CALCULATION FUNCTION
function calculate(a, b, op) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return b !== 0 ? a / b : "Error";
  if (op === "%") return a % b;
}

// ENTER KEY SUPPORT
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("equals").click();
  }
});
