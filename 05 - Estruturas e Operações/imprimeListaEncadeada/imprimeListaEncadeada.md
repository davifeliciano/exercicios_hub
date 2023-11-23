### imprimeListaEncadeada ###

Considere o código da função recursiva imprimeListaEncadeada(list) que recebe o head node de uma lista encadeada e imprime os valores armazenados na lista em ordem do primeiro até o último (veja o código).

obs: A lista encadeada tem o formato {head: {value: 1, next: {value: 2, next: {value: 3, next: null} } } }, ou seja, cada nó (exceto o head) tem uma propriedade value contendo um número inteiro (não necessariamente em ordem crescente) e o último nó tem next===null.

Sua tarefa é alterar o código da função de maneira que ela imprima os valores do final pro começo. Tomando a mesma lista de exemplo, o código atual imprimiria 1 2 3 (um número em cada linha). Depois que você completar a tarefa, a função deve imprimir 3 2 1 nessa entrada de exemplo. **Atenção: a única modificação que você pode fazer é inverter a ordem das linhas de código (não pode escrever código novo)**.