//Coda ai
function isOdd(num) {
  return num % 2 !== 0;
}

function ultimoImpar(array) {
  let lastOdd = null;
  for (const value of array) {
    if (isOdd(value)) {
      lastOdd = value;
    }
  }
  return lastOdd;
}