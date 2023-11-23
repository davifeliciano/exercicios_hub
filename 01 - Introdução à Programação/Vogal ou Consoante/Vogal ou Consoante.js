//Escreva aqui!
const vogais = "aieou";

function verificaLetra(c) {
  if (vogais.includes(c.toLowerCase())) {
    return "Vogal";
  }
  return "Consoante";
}