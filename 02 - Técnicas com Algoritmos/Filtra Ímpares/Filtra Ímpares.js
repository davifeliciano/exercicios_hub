//Coda ai!
function isOdd(num) {
  return num % 2 !== 0;
}

function filtraImpares(array) {
  const result = [];
  for (const value of array) {
    if (isOdd(value)) result.push(value);
  }
  return result;
}