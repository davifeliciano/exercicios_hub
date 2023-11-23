//Programa ai!
function isEven(num) {
  return num % 2 === 0;
}

function somatorio(array) {
  let sum = 0;
  for (const elem of array) {
    if (typeof elem === "number") {
      sum += elem;
    }
    if (elem instanceof Array) {
      elem.forEach((num) => {
        if (isEven(num)) {
          sum += num;
        }
      });
    }
  }
  return sum;
}