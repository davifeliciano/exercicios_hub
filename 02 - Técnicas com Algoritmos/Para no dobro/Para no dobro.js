//Programa ai!
function paraNoDobro(array) {
  let sum = 0;
  let index = 0;
  while (true) {
     if (array[index] === undefined) return sum;
     sum += array[index];
     if (array[index] === 2 * index) {
       return sum;
     }
     index++;
  }
}