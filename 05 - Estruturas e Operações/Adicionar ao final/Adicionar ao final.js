function push(list, value) {
  if (list.head === null) {
    list.head = { value, next: null};
    return;
  }
  
  let previousNode = list.head;
  while (previousNode.next !== null) {
    previousNode = previousNode.next;
  }
  
  previousNode.next = { value, next: null};
}

function complexidadeDeTempo(){
  return "linear"
}

function complexidadeDeEspaco(){
  return "constante"
}