### Insere no final da lista ###

Escreva:

1. Uma função push(doubleList, newValue), que recebe o objeto de uma lista duplamente encadeada com as propriedades *head* e *tail* e um novo valor que deve ser adicionado ao final da lista. Sua função não precisa retornar nada, mas precisa alterar coretamente a lista.
2. Uma função complexidadeDeTempo que retorna um vetor de 2 elementos. Ambos os elementos devem ser uma das strings "constante", "linear", "quadratica". O primeiro elemento indica qual seria a mínima complexidade de tempo teórica do algoritmo anterior se a lista fosse simplesmente encadeada e o head node só tivesse a propriedade head. O segundo elemento indica qual é a mínima complexidade de tempo teórica do algoritmo anterior agora que a lista é duplamente encadeada e o head node tem as propriedades head e tail.
3. Uma função complexidadeDeEspaco que funciona analogamente à complexidadeDeTempo.

Os testes automatizados não verificarão se sua implementação da tarefa 1 realmente tem a melhor complexidade possível, só checarão se as respostas 2 e 3 batem com a complexidade teórica.

Ex para Lista: null\<-{1}\<--\>{2}\<--\>{3}-\>null

* doubleList = { head: {1}, tail: {3} }, newValue = 4 =\> Deve alterar a lista para null\<-{1}\<--\>{2}\<--\>{3}\<--\>{4}-\>null