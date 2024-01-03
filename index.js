const add = function (a, b) {
  return (a + b).toFixed();
};

const subtract = function (a, b) {
  return a - b.toFixed();
};

const multiply = function (a, b) {
  return (a * b).toFixed();
};

const divide = function (a, b) {
  return (a / b).toFixed();
};
const display = document.querySelector("#displayScreen");
const input = document.querySelectorAll(".input");
const numbers = document.querySelectorAll(".numbers");
const operatorBtns = document.querySelectorAll(".operatorBtns");
const operation = document.querySelector(".operation");
const clear = document.querySelector("#clear");

let inputDisplay = "";
let firstN = "";
let secondN = "";
let operator = "";
let result = "";

input.forEach((input) => {
  input.addEventListener("click", (e) => {
    inputDisplay += input.textContent;
    display.textContent += input.textContent;
    return inputDisplay;
  });
});

numbers.forEach((numbers) => {
  numbers.addEventListener("click", (e) => {
    if (operator.length === 0) {
      firstN += numbers.textContent;
      return firstN;
    } else return (secondN += numbers.textContent);
  });
});

operatorBtns.forEach((operatorBtns) => {
  operatorBtns.addEventListener("click", (e) => {
    if (operator.length === 1) {
      operate();
      display.textContent += operate();
      firstN = operate();
      secondN = "";
      operator = "";
    } else return (operator += operatorBtns.textContent);
  });
});

operation.addEventListener("click", (e) => {
  operate();
  if (operate() == "DON'T BREAK ME!!") {
    firstN = firstN;
    secondN = "";
    display.textContent = "";
  } else display.textContent += operate();
  firstN = operate();
  secondN = "";
  operator = "";
});

clear.addEventListener("click", (e) => {
  firstN = "";
  operator = "";
  display.textContent = "";
  secondN = "";
});

const operate = () => {
  let first = parseInt(firstN);
  let operand = operator;
  let second = parseInt(secondN);

  if (second == 0 && operand == "/") {
    return alert("DON'T BREAK ME!!");
  }
  if (operand == "+") return add(first, second);
  else if (operand == "*") return multiply(first, second);
  else if (operand == "-") return subtract(first, second);
  else if (operand == "/") return divide(first, second);
};
