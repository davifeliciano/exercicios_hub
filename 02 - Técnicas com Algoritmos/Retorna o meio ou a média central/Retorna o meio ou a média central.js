//Programa ai!
function isEven(num) {
  return num % 2 === 0;
}

function middleOne(array) {
  const len = array.length;
  const midIndex = Math.floor(0.5 * len);
  return isEven(len) ? 0.5 * (array[midIndex] + array[midIndex - 1])
                     : array[midIndex];
}