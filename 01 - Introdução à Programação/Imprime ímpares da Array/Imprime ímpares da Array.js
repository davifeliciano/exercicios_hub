//Programa ai!
function imprimeImpares(array) {
  for (const value of array) {
    if (!(value % 2 === 0)) {
      console.log(value);
    }
  }
}