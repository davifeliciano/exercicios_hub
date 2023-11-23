function splice(list, index){
  if (list.head === null) return;
  if (index < 0) return;
  if (index === 0) {
    list.head = list.head.next;
    return;
  }
  
  let currentNode = list.head;
  let currentIndex = 0;
  
  while (currentNode.next !== null && currentIndex !== index - 1) {
    currentNode = currentNode.next;
    currentIndex++;
  }
  
  if (currentNode.next === null) return;
  
  currentNode.next = currentNode.next.next;
}

function complexidadeDeEspaco(){
  return "constante"
}

function complexidadeDeTempo(){
  return "linear"
}