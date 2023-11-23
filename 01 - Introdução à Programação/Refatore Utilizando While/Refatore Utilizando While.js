function repeteComandos() {
  let count = 1;
  while (count < 7) {
    soma1(count);
    multiplica2(count);
    count++;
  }
}

function soma1(num) {
  console.log(num+1);
}

function multiplica2(num){
  console.log(num*2)
}