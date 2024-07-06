const reverseString = function(string) {
  if (string.length === 0) {
    return "";
  }

  let result = '';

  for (let i = string.length - 1; i >= 0; i--) {
    result = result + string.charAt(i);
  }

  return result;
};

// Do not edit below this line
module.exports = reverseString;
