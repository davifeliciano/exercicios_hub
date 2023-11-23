### Retorna índice de um valor ###

Escreva:

1. Uma função chamada indexOf(list, value), que recebe um objeto que representa uma lista duplamente encadeada com as propriedades *head* e *tail* que apontam respectivamente, para o primeiro nó dessa lista duplamente encadeada e para o último nó dessa lista duplamente encadeada, e também um valor que deve ser buscado ao percorrer essa lista. Sua função deve retornar -1 caso ela não encontre o valor sendo procurado, ou então o índice da posição que esse elemento se encontra na lista.
2. Uma função complexidadeDeTempo() que retorna um vetor de 2 elementos. Ambos os elementos devem ser uma das strings "constante", "linear", "quadratica". O primeiro elemento indica qual seria a mínima complexidade de tempo teórica do algoritmo anterior se a lista fosse simplesmente encadeada e o head node só tivesse a propriedade head. O segundo elemento indica qual é a mínima complexidade de tempo teórica do algoritmo anterior agora que a lista é duplamente encadeada e o head node tem as propriedades head e tail.
3. Uma função complexidadeDeEspaco que funciona analogamente à complexidadeDeTempo.

Os testes automatizados não verificarão se sua implementação da tarefa 1 realmente tem a melhor complexidade possível, só checarão se as respostas 2 e 3 batem com a complexidade teórica

Ex Lista 1: null\<-{1}\<--\>{2}\<--\>{3}-\>null

* list = { head: {1}, tail: {3} }, value: 2 =\> Deve retornar 1
* list = { head: {1}, tail: {3} }, value: 1 =\> Deve retornar 0
* list = { head: {1}, tail: {3} }, value: 5 =\> Deve retornar -1

Ex Lista 2: null

* list = { head: null, tail: null }, value: 5 =\> Deve retornar -1