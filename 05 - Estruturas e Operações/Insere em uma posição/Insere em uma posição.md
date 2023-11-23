### Insere em uma posição ###

Escreva a função insertAt(list, value, index), que recebe uma lista encadeada através do objeto list, que contém a propriedade *head*, um valor pela variável *value*, e um número através da variável *index* *(inteiro maior ou igual a zero)* e altera a lista encadeada para adicionar esse valor na posição indicada pelo *index*. Essa função não deve retornar nada. Se *index* for maior que o tamanho da lista encadeada, então o elemento deve ser inserido no final da lista encadeada.

Altere as funções de complexidade de tempo e de complexidade de espaço, para corresponderem com a melhor complexidade teórica para cada uma dessas medidas no caso desse algoritmo. O teste irá aceitar para cada uma das funções uma dessas strings: "constante", "linear", "quadratica".

Ex:

* list = { head: { value: 1, next: { value: 2, next: { value: 3, next: null } } } }, value = 'oi', index = 1 =\> Deve alterar a lista encadeada para: { head: { value: 1, next: { value: "oi", next: { value: 2, next: { value: 3, next: null } } } } }
* list = { head: { value: 1, next: { value: 2, next: { value: 3, next: null } } } }, value = "test", index = 10 =\> Deve alterar a lista encadeada para: { head: { value: 1, next: { value: 2, next: { value: 3, next: { value: "test", next: null } } } } }
* list = { head: null }, value = "test", index = 0 /\* ou qualquer outro \*/ =\> Deve alterar a lista encadeada para { head: { value: "test", next: null } }