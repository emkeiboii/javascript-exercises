const fibonacci = function (num) {
  let number = Number(num);
  if (number < 0) return "OOPS";

  let num0 = 0;
  let num1 = 1;
  let nextNum;
  for (let i = 2; i <= number; i++) {
    nextNum = num0 + num1;
    num0 = num1;
    num1 = nextNum;
  }
  return number === 0 ? num0 : num1;
};

// Do not edit below this line
module.exports = fibonacci;
