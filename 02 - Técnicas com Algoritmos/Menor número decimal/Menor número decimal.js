//Coda ai!
function isDecimal(num) {
  return num % 1 !== 0;
}

function menorDecimal(array) {
  let min = Infinity;
  for (const value of array) {
    if (isDecimal(value) && value < min) {
      min = value;
    }
  }
  return min !== Infinity ? min : null;
}