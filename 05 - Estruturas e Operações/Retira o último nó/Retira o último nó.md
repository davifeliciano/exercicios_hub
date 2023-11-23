### Retira o último nó ###

Escreva o algoritmo da função pop(list), que recebe o objeto *list* que contém a propriedade *head* de uma lista encadeada e remove o último elemento dessa lista, retornando o nó removido. Caso a lista esteja vazia, sua função deve retornar *undefined*.

Complete também as funções de complexidadeDeTempo() e complexidadeDeEspaco(), com as melhores complexidades teóricas possiveis para esse código. Cada uma dessas funções deve retornar uma string contendo uma dentre as seguintes strings: "constante", "linear", "quadratica".

Ex:

* list = { head: { value: 1, next: { value: 2, next: { value: 3, next: null } } } } =\> Deve retornar {value: 3, next: null}. E a lista deve ser alterada para { head: { value: 1, next: { value: 2, next: null } } }
* list = { head: { value: 1, next: null } =\> Deve retornar { value: 1, next: null }. E a lista deve ser alterada para { head: null }
* list = { head: null } =\> Deve retornar undefined e a lista deve permanecer a mesma