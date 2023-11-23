//Programa ai!
function procuraDobrado(array) {
  let found = false;
  array.forEach((value) => {
    if (array.includes(2 * value) && value !== 0) {
      found = true;
    };
  })
  return found;
}