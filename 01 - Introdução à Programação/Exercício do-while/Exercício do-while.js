//Programa ai!
function randomGen() {
  let randomInt = 0;
  do {
    randomInt = Math.floor(Math.random() * 100);
    console.log(randomInt);
  } while(randomInt < 80);
}