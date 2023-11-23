function create(array){
  if (array.length === 0) return { head: null, tail: null };
  
  const list =  {
    head: { value: null, prev: null, next: null },
  };
  
  let lastNode = list.head;
  array.forEach((value, index) => {
    lastNode.value = value;
    
    if (index !== array.length - 1) {
      const currentNode = { value: null, prev: lastNode, next: null };
      lastNode.next = currentNode;
      lastNode = currentNode;
    }
  });
  
  list.tail = lastNode;
  return list;
}

function complexidadeDeTempo() {
  return ['linear', 'linear']; // a resposta inicial é: "achamos que o 
  																		 // algoritmo seria quadrático tanto em listas 
  																		 // simplesmente encadeadas quanto em listas 
  																	   // duplamente encadeadas"
}

function complexidadeDeEspaco() {
  return ['linear', 'linear']; // a resposta inicial é: "achamos que o 
  																		 // algoritmo seria quadrático tanto em listas 
  																		 // simplesmente encadeadas quanto em listas 
  																	   // duplamente encadeadas"
}