const convertToCelsius = function(fahr) {
  return cels = Math.round(((5 / 9) * (fahr - 32)) * 10) / 10;
};

const convertToFahrenheit = function(cels) {
  return fahr = Math.round(((9 / 5) * cels + 32) * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
