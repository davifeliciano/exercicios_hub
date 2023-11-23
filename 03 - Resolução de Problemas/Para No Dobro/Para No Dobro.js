//Programa ai!
function paraNoDobro(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value === 2 * i) break;
    sum += value;
  }
  return sum;
}