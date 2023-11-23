function create(values){
  const list = { head: null }
  if (values.length === 0) return list;
  
  list.head = { value: null, next: null };
  let previousNode = list.head;
  
  for (let i = 0; i < values.length; i++) {
    const isLastValue = i === values.length - 1;
    const value = values[i];
    previousNode.value = value;
    previousNode.next = isLastValue ? null : { value: null, next: null };
    previousNode = previousNode.next;
  }
  
  return list;
}

function complexidadeDeTempo(){
  return "linear";
}

function complexidadeDeEspaco(){
  return "linear";
}