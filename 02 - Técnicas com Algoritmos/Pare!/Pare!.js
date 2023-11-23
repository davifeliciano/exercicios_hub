function pareEmZero(hub) {
  let sum = 0;
  while (true) {
    const proximo = hub.proximoNumero();
    if (proximo === 0) break;
    sum += proximo;
  }
  return sum;
}