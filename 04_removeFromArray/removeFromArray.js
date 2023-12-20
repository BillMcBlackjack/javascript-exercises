const removeFromArray = function(array, ...numsToRemove) {
  return array.filter(num => !numsToRemove.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
