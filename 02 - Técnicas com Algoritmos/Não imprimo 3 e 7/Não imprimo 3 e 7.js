//Programa ai!
function descarta(index1, index2, array) {
  let index = 0;
  const result = [];
  while (true) {
    if (array[index] === undefined) break;
    if (index !== index1 && index !== index2) {
      result.push(array[index]);
    }
    index++;
  }
  return result;
}