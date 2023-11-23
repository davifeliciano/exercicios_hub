function insertAfter(list, node, value) {
  const newNode = { value, next: node.next, prev: node };
  
  if (node.next === null) {
    list.tail = newNode;
  } else {
    node.next.prev = newNode;
  }
  
  node.next = newNode;
}

function complexidadeDeTempo() {
  return ['constante', 'constante']; // a resposta inicial é: "achamos que o 
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