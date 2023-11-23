function indexOf(list, value){
  if (list.head === null) return -1;
  
  let currentNode = list.head;
  let currentIndex = 0;
  
  while (currentNode.next !== null && currentNode.value !== value) {
    currentNode = currentNode.next;
    currentIndex++;
  }
  
  return currentIndex;
}

function complexidadeDeTempo(){
	return "linear"
}

function complexidadeDeEspaco(){
  return "constante"
}