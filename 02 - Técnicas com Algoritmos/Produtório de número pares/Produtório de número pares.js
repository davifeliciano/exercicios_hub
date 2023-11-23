//Programa ai
function isEven(num) {
  return num % 2 === 0;
}

function produtorioNumPares(array) {
  let prod = 1;
  for (const value of array) {
    if (isEven(value)) prod *= value;
  }
  if (prod === 1) return -1;
  return prod;
}