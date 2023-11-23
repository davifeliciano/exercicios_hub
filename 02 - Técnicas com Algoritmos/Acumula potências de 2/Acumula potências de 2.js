//Coda ai
function expoenteDaBaseDois(num) {
  let exp = 0;
  while (2 ** exp < num) exp++;
  return exp;
}