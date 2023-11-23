//Programa ai
function posLastEmpty(array) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "") {
      index = i;
    }
  }
  return index;
}