//Programa ai!
function maiorQue(x, array) {
  const result = [];
  for (const value of array) {
    if (value >= x) result.push(value);
  }
  return result;
}