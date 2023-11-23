//Programa ai!
function tabelaTabuada() {
  for (let i = 1; i <= 10; i++) {
    const arrayToPrint = [];
    for (let j = 1; j <= 10; j++) {
      arrayToPrint.push(i * j);
    }
    const strToPrint = arrayToPrint.join(" ");
    console.log(strToPrint);
  }
}