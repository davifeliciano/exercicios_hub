//Programa ai!
function somaTabuada() {
  let sum = 0;
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      sum += i * j;
    }
  }
  return sum;
}