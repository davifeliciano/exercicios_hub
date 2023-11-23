//Programa ai!
function valorDobraIndice(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 2 * i) return i;
  }
  return false;
}