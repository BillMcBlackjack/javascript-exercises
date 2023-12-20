const repeatString = function(string, num) {
  if (num >= 0) {
    if (num === 0) {
      return '';
    }
    let stringRepeat = string;
    for (let i = 0; i < num - 1; i ++) {
      stringRepeat += string;
    }
    return stringRepeat;
  }
  else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = repeatString;
