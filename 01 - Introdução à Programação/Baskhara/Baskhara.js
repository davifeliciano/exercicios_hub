//Programa ai!
function calculaUmaRaiz(a, b, c, sinal) {
  let delta = Math.sqrt(b*b - 4*a*c);
  if (!sinal) delta *= -1;
  return 0.5 * (delta - b/a);
}