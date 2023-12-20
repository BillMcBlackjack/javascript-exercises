const palindromes = function (text) {
  text = text.replace(/\s/g, '').replace(/[^\w\s]|_/g, '').toLowerCase();
  let textReverted = text.split('').reverse().join('')
  return text === textReverted;
};

// Do not edit below this line
module.exports = palindromes;
