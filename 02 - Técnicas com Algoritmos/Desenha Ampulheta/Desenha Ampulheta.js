//Programa ai!
function getCharPositions(height, hourglassHeight) {
  if (height === 0 || height === hourglassHeight - 1) {
    return new Array(hourglassHeight).fill(true);
  }
  const positions = new Array(hourglassHeight).fill(false);
  positions[hourglassHeight - height - 1] = true;
  positions[height] = true;
  return positions;
}

function desenhaAmpulheta(hourglassHeight) {
  const char = "*";
  for (let i = 0; i < hourglassHeight; i++) {
    const charPositions = getCharPositions(i, hourglassHeight);
    const stringToPrint = charPositions
      .map((value) => {
        if (value === true) return char;
        if (value === false) return " ";
      })
      .join("")
    console.log(stringToPrint);
  } 
}