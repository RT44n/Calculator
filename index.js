const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current);
};

const divide = function (array) {
  return array.reduce((quotient, current) => quotient / current);
};
