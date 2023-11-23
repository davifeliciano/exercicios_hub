function insertAt(list, value, index){
  if (list.head === null) {
    const newNode = { value, prev: null, next: null };
    list.head = newNode;
    list.tail = newNode;
    return;
  }
  
  if (index <= 0) {
    const firstNode = list.head;
    const newNode = { value, prev: null, next: firstNode };
    firstNode.prev = newNode;
    list.head = newNode;
    return;
  }
  
  let currentNode = list.head;
  let currentIndex = 1;
  
  while (currentNode.next !== null && currentIndex !== index) {
    currentNode = currentNode.next;
    currentIndex++;
  }
  
  const nextNode = currentNode.next;
  const newNode = { value, prev: currentNode, next: nextNode };
  currentNode.next = newNode;
  
  if (nextNode === null) {
    list.tail = newNode;
  } else {
    nextNode.prev = newNode;
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