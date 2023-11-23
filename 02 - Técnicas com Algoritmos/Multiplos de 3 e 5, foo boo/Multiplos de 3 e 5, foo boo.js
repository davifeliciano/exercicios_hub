//Coda ai!
function fooboo(num) {
  if (num % 3 !== 0 && num % 5 !== 0) {
    return num;
  }
  let result = "";
  if (num % 3 === 0) result += "foo"
  if (num % 5 === 0) result += "boo";
  return result;
}

function foobooMultiplos(array) {
  return array.map(fooboo);
}