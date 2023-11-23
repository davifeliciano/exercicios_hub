function descriptografar (inicio, arr) {
  const words = arr.map(str => {
    const [word, position] = str.split("_");
    return { word, position };
  })
  
  const msgArray = [];
  let index = inicio;
  
  while (index !== -1) {
    const word = words[index];
    if (word === undefined) return "erro";
    msgArray.push(words[index].word);
    index = parseInt(words[index].position);
  }
  
  return msgArray.join(" ");
}