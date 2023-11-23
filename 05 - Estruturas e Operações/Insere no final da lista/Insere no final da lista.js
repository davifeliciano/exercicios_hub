function push(list, value) {
  if (list.tail === null) {
    const newNode = { value, prev: null, next: null };
    list.head = newNode;
    list.tail = newNode;
    return;
  }
  
  const newNode = { value, prev: list.tail, next: null}
  const lastNode = list.tail;
  lastNode.next = newNode;
  list.tail = newNode;
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