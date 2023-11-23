function pop(list){
  if (list.head === null) return;
  
  let previousNode = list.head;
  if (previousNode.next === null) {
    const nodeToPop = previousNode;
    list.head = null;
    return nodeToPop;
  }
  
  while (previousNode.next.next !== null) {
    previousNode = previousNode.next;
  }
  
  const nodeToPop = previousNode.next;
  previousNode.next = null;
  return nodeToPop;
}

function complexidadeDeEspaco(){
  return "constante"
}

function complexidadeDeTempo(){
  return "linear"
}
