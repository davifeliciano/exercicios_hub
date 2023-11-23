//Programa aí!
function contaC(str) {
  let count = 0;
  for (const char of str) {
    if (char.toLowerCase() === "c") count++;
  }
  return count;
}