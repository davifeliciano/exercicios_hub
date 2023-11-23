//Programa ai!
function somaElementos(arrays) {
  let totalSum = 0;
  for (const array of arrays) {
    let arraySum = 0;
    for (const value of array) {
      arraySum += value;
    }
    totalSum += arraySum;
  }
  return totalSum;
}