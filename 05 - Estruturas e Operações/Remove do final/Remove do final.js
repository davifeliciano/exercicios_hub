function pop(list){
  if (list.tail === null) return;
  
  const lastNode = list.tail;
  
  if (lastNode.prev === null) {
    list.head = null;
    list.tail = null;
    return lastNode;
  }
  
  const newLastNode = lastNode.prev;
  newLastNode.next = null;
  list.tail = newLastNode;
  return lastNode;
}

function complexidadeDeTempo() {
  return ['linear', 'constante']; // a resposta inicial é: "achamos que o 
  																		 // algoritmo seria quadrático tanto em listas 
  																		 // simplesmente encadeadas quanto em listas 
  																	   // duplamente encadeadas"
}

function complexidadeDeEspaco() {
  return ['constante', 'constante']; // a resposta inicial é: "achamos que o 
  																		 // algoritmo seria quadrático tanto em listas 
  																		 // simplesmente encadeadas quanto em listas 
  																	   // duplamente encadeadas"
}