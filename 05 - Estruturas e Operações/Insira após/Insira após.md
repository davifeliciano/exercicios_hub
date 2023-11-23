### Insira após ###

Escreva o algoritmo da função insertAfter(list, node, value), que recebe um objeto list, contendo a propriedade *head*, de uma lista encadeada, um nó node dessa lista, e um valor value que deve ser inserido em um novo nó após o nó recebido na entrada. A função não retorna nada.

Também altere as outras duas funções, para que elas retornem uma string contendo a complexidade de tempo teórica desse algoritmo, e a complexidade de espaço teórica desse algoritmo. A strings retornadas devem ser uma dentre as seguintes opções: "constante", "linear", "quadratica".

Ex:

* list = { head: { value: 1, next: { value: 2, next: { value: 3, next: null } } } }, node = /\*primeiro nó da lista\*/, value = "test" =\> Não deve retornar nada, mas deve alterar a lista, para ter o formato: { head: { value: 1, next: { value: "test", next: { value: 2, next: { value: 3, next: null } } } } }
* list = { head: { value: 1, next: { value: 2, next: { value: 3, next: null } } } }, node = /\*último nó da lista\*/, value = "test" =\> Não deve retornar nada, mas deve alterar a lista, para ter o formato: { head: { value: 1, next: { value: 2, next: { value: 3, next: { value: "test", next: null } } } } }