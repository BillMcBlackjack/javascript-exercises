const sumAll = function(...sequence) {
  if(sequence[0] < 0 || sequence[1] < 0 
    || typeof sequence[0] !== 'number' || typeof sequence[1] !== 'number') {
      return 'ERROR';
    }
    else {
      if(sequence[0] > sequence[sequence.length - 1]) {
        sequence.push(sequence.shift());
      }
        let sum = 0;
          let i = sequence[sequence.length - 1];
          while(i !== sequence[0]) {
            sum += i;
            i--;
          }
          sum += sequence[0];
        return sum;
    }
};
// Do not edit below this line
module.exports = sumAll;
