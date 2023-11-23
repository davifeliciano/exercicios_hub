function insertAt(list, value, index) {
  if (list.head === null) {
    list.head = { value, next: null};
    return;
  }
  
  if (index < 0) return;
  
  if (index === 0) {
    list.head = { value, next: list.head };
    return;
  }
  
  let currentNode = list.head;
  let currentIndex = 0;
  
  while (currentNode.next !== null && currentIndex !== index) {
    currentNode = currentNode.next;
    currentIndex++;
  }
  
  currentNode.next = { value, next: currentNode.next };
}

function complexidadeDeEspaco(){
  return "constante"
}

function complexidadeDeTempo(){
  return "linear"
}

