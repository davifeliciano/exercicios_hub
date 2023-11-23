### Adicionar ao final ###

Crie a função push(list, value), que recebe uma lista encadeada através do objeto *list* que contém a propriedade *head* e um novo valor *value* que deve ser inserido ao final dessa lista encadeada. Sua função não precisa retornar nada.

Complete as funções de complexidadeDeTempo e complexidadeDeEspaco para retornarem uma string contendo a melhor complexidade teórica para cada medida. O teste irá aceitar uma dessas três strings: "constante", "linear", "quadratica"

Ex:

* list = { head: { value: 1, next: { value: 2, next: null } } }, value = 3 =\> Deve alterar a lista para { head: { value: 1, next: { value: 2, next: { value: 3, next: null } } } }
* list = { head: null }, value = 3 =\> Deve alterar a lista para { head: { value: 3, next: null } }