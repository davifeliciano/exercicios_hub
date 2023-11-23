//Programa ai!
function convertAndSum(array) {
  let soma = 0;
  for (const str of array) {
    soma += Number(str);
  }
  return soma;
}