//Programa ai!
function parcelamento(valor) {
  const numerosDeParcelas = [3, 6, 10];
  const result = [];
  for (const numeroDeParcelas of numerosDeParcelas) {
    const valorDaParcela = valor / numeroDeParcelas;
    result.push(valorDaParcela.toFixed(2));
  }
  return result;
}