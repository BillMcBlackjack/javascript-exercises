const fibonacci = function(numToFind) {
  let fibonacciSeq = [0,1];
    numToFind = parseInt(numToFind, 10);
    if (numToFind > 1) {
      for(i = 2; i <= numToFind; i ++) {
        fibonacciSeq.push(0);
        let pre = fibonacciSeq[i - 2];
        let current = fibonacciSeq[i - 1];
        fibonacciSeq[i] = current + pre;
      } 
      return num = fibonacciSeq[numToFind];
    } else if (numToFind === 0) {
      return 0;
    } else if (numToFind === 1) {
      return 1; }
      else return 'OOPS';
  };

// Do not edit below this line
module.exports = fibonacci;
