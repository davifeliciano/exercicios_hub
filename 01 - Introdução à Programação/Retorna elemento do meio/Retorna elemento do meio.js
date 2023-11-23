//Escreve ai!
function returnMiddleOne(array) {
  const len = array.length;
  let index = parseInt(len / 2);
  if (len % 2 === 0) index--;
  return array[index];
}