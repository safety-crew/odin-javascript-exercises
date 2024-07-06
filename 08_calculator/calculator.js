const add = function(entry1, entry2) {
  let sum = 0;
  sum = entry1 + entry2;

  return sum;
};

const subtract = function(entry1, entry2) {
	let sub = 0;
  sub = entry1 - entry2;

  return sub;
};

const sum = function(entry) {
	let sum = 0;
  for (let index = 0; index < entry.length; index++) {
    sum += entry[index];
  }

  return sum;
};

const multiply = function(entry) {
  let mul = 1;
  for (let index = 0; index < entry.length; index++) {
     mul *= entry[index];
  }

  return mul;
};

const power = function(entry, power) {
	let pow = 1;
  for (let index = 0; index < power; index++) {
    pow *= entry;
  }

  return pow;
};

const factorial = function(entry) {
  if (entry == 0 || entry == 1) {
    return 1;
  }

	let fact = 2;
  for (let index = 3; index <= entry; index++) {
    fact *= index;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
