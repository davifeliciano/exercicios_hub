//Programa ai!
function countOccurencces(value, array) {
  return array.reduce((acc, val) => {
    if (val === value) return acc + 1;
    return acc;
  }, 0);
}

function acumulaPares(array) {
  const twiceOccuringValues = [];
  for (const value of array) {
    if (countOccurencces(value, array) === 2 && 
        !twiceOccuringValues.includes(value)) {
      twiceOccuringValues.push(value);
    }
  }
  return 2 * twiceOccuringValues.reduce((acc, val) => acc + val, 0);
}