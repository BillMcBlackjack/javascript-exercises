const add = function(...nums) {
  addNum = 0;
	for (let num of nums) {
    addNum += num;
  }

  return addNum
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	for (let num of array) {
    sum += num; 
  }
  return sum;
};

const multiply = function(nums) {
  let mult = 1;
  for (let num of nums) {
    mult = mult * num;
  }
  return mult;
};

const power = function(base, exp) {
  let power = base;
  for (let i = 1; i < exp; i++) {
    
   power *= base;
  }
  return power;
	
};

const factorial = function(factorial) {
  let a = 1;
	for (i = 1; i < factorial; i++) {
    a *= (i + 1);
  }
  return a;
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
