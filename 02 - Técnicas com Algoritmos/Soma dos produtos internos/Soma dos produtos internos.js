//Programa ai!
function somaProdutorioInterno(arrays) {
  let totalSum = 0;
  for (const array of arrays) {
    if (array.length === 0) continue;
    let arrayProd = 1;
    for (const value of array) {
      arrayProd *= value;
    }
    totalSum += arrayProd;
  }
  return totalSum;
}