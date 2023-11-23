### Remove do final ###

Escreva:

1. Uma função pop(list), essa função recebe um objeto que representa uma lista duplamente encadeada, com as propriedades *head* e *tail*, e a partir disso remove o último nó dessa lista. Sua função deve retornar o nó removido, e caso ela receba uma lista vazia ela deve retornar undefined. Sua função **não deve** alterar a propriedade **prev** do nó removido.
2. Uma função complexidadeDeTempo que retorna um vetor de 2 elementos. Ambos os elementos devem ser uma das strings "constante", "linear", "quadratica". O primeiro elemento indica qual seria a mínima complexidade de tempo teórica do algoritmo anterior se a lista fosse simplesmente encadeada e o head node só tivesse a propriedade head. O segundo elemento indica qual é a mínima complexidade de tempo teórica do algoritmo anterior agora que a lista é duplamente encadeada e o head node tem as propriedades head e tail.
3. Uma função complexidadeDeEspaco que funciona analogamente à complexidadeDeTempo.

Os testes automatizados não verificarão se sua implementação da tarefa 1 realmente tem a melhor complexidade possível, só checarão se as respostas 2 e 3 batem com a complexidade teórica.

Ex para Lista: null\<-{1}\<--\>{2}\<--\>{3}-\>null

* Deve retornar {3} e alterar a lista para null\<-{1}\<--\>{2}-\>null