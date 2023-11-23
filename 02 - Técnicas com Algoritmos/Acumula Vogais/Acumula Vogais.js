//Coda ai!
const vogais = "aeiou";

function acumulaVogais(array) {
  let result = "";
  for (const char of array) {
    if (vogais.includes(char)) {
      result += char;
    }
  }
  return result;
}