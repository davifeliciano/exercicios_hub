//Programa ai!
function imprimePadrao(num) {
  for (let i = 1; i < 2 * num; i++) {
    const numbersToPrint = [];
    for (let j = 1; j < num - Math.abs(i - num) + 1; j++) {
      numbersToPrint.push(j);
    }
    console.log(numbersToPrint.join(" "));
  }
}