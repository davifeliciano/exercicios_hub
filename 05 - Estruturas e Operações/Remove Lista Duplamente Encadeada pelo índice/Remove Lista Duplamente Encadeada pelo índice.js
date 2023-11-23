function splice(list, index) {
  if (list.head === null || index < 0) return;
  
  let currentNode = list.head;
  
  if (index === 0) {
    const nextNode = currentNode.next;
    list.head = nextNode;
    
    if (nextNode === null) {
      list.tail = null;
    } else {
      nextNode.prev = null;
    }
    
    return;
  }
  
  let currentIndex = 0;
  
  while (currentNode.next !== null && currentIndex !== index) {
    currentNode = currentNode.next;
    currentIndex++;
  }
  
  const nodeExists = currentIndex === index;
  if (!nodeExists) return;
  
  const previousNode = currentNode.prev;
  const nextNode = currentNode.next;
  
  previousNode.next = nextNode;
  
  if (nextNode === null) {
    list.tail = previousNode;
  } else {
    nextNode.prev = previousNode;
  }
}

function complexidadeDeTempo() {
  return ['linear', 'linear']; // a resposta inicial é: "achamos que o 
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