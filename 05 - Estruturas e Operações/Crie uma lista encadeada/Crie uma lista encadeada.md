### Crie uma lista encadeada ###

Escreva a função create(values), que recebe uma array de valores e monta uma lista encadeada contendo esses valores, na mesma ordem em que aparecem no vetor. Essa função deve retornar um objeto com uma propriedade que é o *head* da lista.

Além disso faça com que as funções de complexidadeDeTempo() e complexidadeDeEspaco(), retornem cada uma corretamente uma das seguintes strings: 'constante', 'linear' ou 'quadratica', indicando quais são as complexidades de tempo/espaço mínimas para esse algoritmo

Ex:

* values = [1, 2, 3] =\> Deve retornar{ head: { value: 1, next: { value: 2, next: { value: 3, next: null }}}}
* values = [ ] =\> Deve retornar {head: null}