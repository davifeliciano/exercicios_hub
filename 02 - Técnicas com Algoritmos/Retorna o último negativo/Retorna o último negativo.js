//Programa ai!
function ultimoNegativo(array) {
  for (let i = array.length - 1; i > 0; i--) {
    if (array[i] < 0) return array[i];
  }
  return false;
}