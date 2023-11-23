//Programa ai!
function verificaPontas(array) {
  const len = array.length;
  if (array[0] > array[len - 1]) return true;
  return false;
}