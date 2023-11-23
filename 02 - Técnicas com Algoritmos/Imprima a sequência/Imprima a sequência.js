//Coda ai!
function imprimeSequencias(num) {
  for (let i = 1; i <= num; i++) {
    let stringToPrint = "";
    for (let j = 1; j <= i; j++) {
      stringToPrint += j.toString();
    }
    console.log(stringToPrint);
  }
}