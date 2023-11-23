//CodaAí
function removedorDePalavras(str) {
  return str
    .split(" ")
    .filter((word) => word.length > 3)
    .join(" ");
}