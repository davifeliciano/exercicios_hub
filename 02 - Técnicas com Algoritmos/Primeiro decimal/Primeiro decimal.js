//Programa ai
function primeiroDecimal(array) {
  for (const value of array) {
    if (value % 1 !== 0) return value;
  }
  return -1;
}