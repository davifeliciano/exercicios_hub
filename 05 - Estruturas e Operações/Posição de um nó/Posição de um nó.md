### Posição de um nó ###

Escreva a função indexOf(list, value), que recebe um objeto contendo a propriedade *head que aponta para o primeiro nó de uma lista simplesmente encadeada. A partir da* *list**, encontre o elemento que tem o valor* value. Retorne o índice desse elemento nessa lista. Se nenhum valor dessa lista conter *value* então sua função deve retornar -1. Sua implementação deve ter a melhor complexidade de tempo e espaço possível.

Além disso faça com que as funções de complexidade retornem uma string corretamente dentre as opções "constante", "linear" e "quadratica", com a menor complexidade teórica possível para esse algoritmo.

Ex:

* list = { head: { value: 1, next: { value: 2, next: { value: 3, next: null } } } }, value = 'Texto' =\> Deve retornar -1
* list = { head: { value: "hola", next: { value: "Hello", next: { value: "oi", next: null } } } , value = "Hello" =\> Deve retornar 1
* list = { head: { value: "hola", next: { value: "Hello", next: { value: "oi", next: null } } } , value = "oi" =\> Deve retornar 2
* list = { head: null }, value="Hello" =\> Deve retornar -1