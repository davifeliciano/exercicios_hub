// escreva seu código aqui :)
function ordenaPessoas(pessoas) {
  const sorted = [...pessoas];
  for (let i = 0; i < sorted.length; i++) {
    let minIndex = i;
    for (let j = i; j < sorted.length; j++) {
      if (sorted[j].idade < sorted[minIndex].idade) {
        minIndex = j;
      } else if (sorted[j].idade === sorted[minIndex].idade) {
        if (sorted[j].nome < sorted[minIndex].nome) {
          minIndex = j;
        }
      }
    }
    [sorted[i], sorted[minIndex]] = [sorted[minIndex], sorted[i]];
  }
  return sorted;
}