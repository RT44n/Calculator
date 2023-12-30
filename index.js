const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const getFirstNumber = () => {
  let firstNumber = prompt("What's your first number?");

  return firstNumber;
};
const getOperator = () => {
  let operator = prompt("Whats's your operator?");

  return operator;
};
const getSecondNumber = () => {
  let secondNumber = prompt("What's your second number?");

  return secondNumber;
};
const operate = () => {
  let first = parseInt(getFirstNumber());
  let operand = getOperator();
  let second = parseInt(getSecondNumber());

  console.log(first);
  console.log(operand);
  console.log(second);

  if (operand == "+") return add(first, second);
  else if (operand == "*") return multiply(first, second);
  else if (operand == "-") return subtract(first, second);
  else if (operand == "/") return divide(first, second);
};
console.log(operate());
