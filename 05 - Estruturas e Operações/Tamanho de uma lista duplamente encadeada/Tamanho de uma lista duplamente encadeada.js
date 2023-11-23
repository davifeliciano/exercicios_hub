function length(list) {
  if (list.head === null) return 0;

  let count = 1;
  let currentNode = list.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    count++;
  }
  
  return count;
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