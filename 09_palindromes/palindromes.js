const palindromes = function (string) {
  let newString = string.replace(/[!,. ]/g, "");
  newString = newString.toLowerCase();

  for (
    let i = 0, j = newString.length - 1;
    i < string.length, j > -1;
    i++, j--
  ) {
    if (newString[i] !== newString[j]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
