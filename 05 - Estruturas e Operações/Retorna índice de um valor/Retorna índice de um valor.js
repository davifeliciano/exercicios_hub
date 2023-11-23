function indexOf(list, value){
  if (list.head === null) return -1;
  
  let currentNode = list.head;
  let currentIndex = 0;
  
  while (currentNode !== null) {
    if (currentNode.value === value) return currentIndex;
    currentNode = currentNode.next;
    currentIndex++;
  }
  
  return -1;
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