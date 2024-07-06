const fibonacci = function (num) {
  if (typeof num === "string") {
    num = parseInt(num);
  }
  if (num < 0) {
    return "OOPS";
  }
  if (num == 1) {
    return 1;
  }

  let firstNum = 0;
  let lastNum = 1;
  let tempResult = 0;

  for (let i = 0; i < num - 1; i++) {
    tempResult = firstNum + lastNum;
    firstNum = lastNum;
    lastNum = tempResult;
  }

  return tempResult;
};

// Do not edit below this line
module.exports = fibonacci;
