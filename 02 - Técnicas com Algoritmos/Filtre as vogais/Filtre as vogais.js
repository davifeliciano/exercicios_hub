//Coda ai!
const vogais = "aieou"

function filtraVogais(array) {
  return array.filter(char => vogais.includes(char.toLowerCase()));
}