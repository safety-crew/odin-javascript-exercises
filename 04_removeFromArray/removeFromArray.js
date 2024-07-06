const removeFromArray = function (array, ...numbers) {
  let result = [];
  for (let indexJ = 0; indexJ < array.length; indexJ++) {
    if (!numbers.includes(array[indexJ])) {
      result.push(array[indexJ]);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
