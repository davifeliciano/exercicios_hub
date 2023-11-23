//Coda ai!
function isEven(num) {
  return num % 2 === 0;
}

function somaPares(array) {
  let soma = 0;
  for (const value of array) {
    if (isEven(value)) soma += value;
  }
  return soma;
}