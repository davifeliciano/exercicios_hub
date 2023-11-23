### Cria uma lista duplamente encadeada ###

Escreva:

1. Uma função create(array), que recebe uma array de valores e cria a partir dessa array, uma estrutura de dados de uma lista duplamente encadeada, com os valores na mesma ordem em que aparecem nessa array de entrada. Sua função deve retornar um objeto representando uma lista duplamente encadeada, com as propriedades *head* e *tail*.
2. Uma função complexidadeDeTempo que retorna um vetor de 2 elementos. Ambos os elementos devem ser uma das strings "constante", "linear", "quadratica". O primeiro elemento indica qual seria a mínima complexidade de tempo teórica do algoritmo anterior se a lista fosse simplesmente encadeada e o head node só tivesse a propriedade head. O segundo elemento indica qual é a mínima complexidade de tempo teórica do algoritmo anterior agora que a lista é duplamente encadeada e o head node tem as propriedades head e tail.
3. Uma função complexidadeDeEspaco que funciona analogamente à complexidadeDeTempo.

Os testes automatizados não verificarão se sua implementação da tarefa 1 realmente tem a melhor complexidade possível, só checarão se as respostas 2 e 3 batem com a complexidade teórica.

Ex:

* array = [1, 2, 3] =\> Deve criar a lista null\<-{1}\<--\>{2}\<--\>{3}-\>null, e retornar um objeto com o formato { head: {1}, tail: {3} }