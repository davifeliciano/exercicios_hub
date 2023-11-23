//Programa ai
function maiorNumero(array) {
  if (array.length === 0) return null;
  let max = array[0];
  for (const value of array) {
    if (value > max) {
      max = value;
    }
  }
  return max;
}