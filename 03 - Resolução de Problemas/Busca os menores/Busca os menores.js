//Programa ai!
function tresMenores(array) {
  const minIndexes = [];
  const minValues = [];
  const resultLength = 3;
  let count = 0;
  while (count < resultLength) {
    let minIndex = 0;
    let minValue = Infinity;
    for (let i = 0; i < array.length; i++) {
      if (!minIndexes.includes(i)) {
        if (array[i] <= minValue) {
          minIndex = i;
          minValue = array[i];
        }
      }
    }
    minIndexes.push(minIndex);
    minValues.push(minValue);
    count++;
  }
  return minValues;
}