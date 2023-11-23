//Programa ai!
function temOposto(array) {
  let found = false;
  array.forEach((value, index) => {
    const nextOccurenceIndex = array
      .slice(index + 1)
      .indexOf(- value);
    if (nextOccurenceIndex !== -1) {
      found = true;
    };
  })
  return found;
}