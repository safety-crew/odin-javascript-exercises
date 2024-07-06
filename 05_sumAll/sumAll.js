const sumAll = function(start, end) {
  if (start < 0 || end < 0 || typeof start == 'string' || typeof end == 'string' || Array.isArray(start) || Array.isArray(end)) {
    return 'ERROR';
  }

  if (start >= end) {
    let sum = 0;
    for (let index = end; index <= start; index++) {
      sum += index;
    }
    return sum;
  }
  
  else {
    let sum = 0;
    for (let index = start; index <= end; index++) {
      sum += index;
    }

    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
