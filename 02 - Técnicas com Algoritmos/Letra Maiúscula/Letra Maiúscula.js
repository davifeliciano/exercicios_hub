//Programa ai!
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function subsProprios(array) {
  const result = [];
  for (const name of array) {
    result.push(capitalize(name));
  }
  return result;
}