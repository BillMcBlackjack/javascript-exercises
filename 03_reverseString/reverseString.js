const reverseString = function(text) {
  let reverseStringArray = text.split('');
  let reversedArray = []
  for (const i of text) {
    let reversedLetter = reverseStringArray.pop();
    reversedArray.push(reversedLetter);
  }
  return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
