const repeatString = function(string, noOfRepeats) {
  if (noOfRepeats < 0) {
    return "ERROR"
  }
  return string.repeat(noOfRepeats);
};

// Do not edit below this line
module.exports = repeatString;
