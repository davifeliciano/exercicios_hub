function length(list){
  let previousNode = list.head;
  if (previousNode === null) return 0;
  
  let count = 1;
  while (previousNode.next !== null) {
    previousNode = previousNode.next;
    count++;
  }
  
  return count;
}

function complexidadeDeTempo(){
  return "linear";
}

function complexidadeDeEspaco(){ 
  return "constante";
}