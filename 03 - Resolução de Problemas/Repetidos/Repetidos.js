//Programa ai!
function verificaRepetidos(array) {
  for (let i = 0; i < array.length - 1; i++) {
    const rest = array.slice(i + 1);
    if (rest.includes(array[i])) {
      return true;
    }
  }
  return false;
}