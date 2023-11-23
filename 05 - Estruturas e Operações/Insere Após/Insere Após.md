### Insere Após ###

Escreva:

1. Uma função insertAfter(doubleList, node, value) que recebe um objeto *doubleList* que contém as propriedades *head* e *tail* de uma lista duplamente encadeada, e que respectivamente apontam para o primeiro nó dessa lista, e para o último nó dessa lista, ou para *null* caso a lista esteja vazia, além disso ela recebe um nó pelo parâmetro *node* *e um novo valor pelo parâmetro* *value* *que deve ser adicionado a lista imediatamente após o nó* node. Essa função não deve retornar nada, mas ela deve ser capaz de alterar essa lista duplamente encadeada para fazer a adição desse novo valor.
2. Uma função complexidadeDeTempo que retorna um vetor de 2 elementos. Ambos os elementos devem ser uma das strings "constante", "linear", "quadratica". O primeiro elemento indica qual seria a mínima complexidade de tempo teórica do algoritmo anterior se a lista fosse simplesmente encadeada e o head node só tivesse a propriedade head. O segundo elemento indica qual é a mínima complexidade de tempo teórica do algoritmo anterior agora que a lista é duplamente encadeada e o head node tem as propriedades head e tail.
3. Uma função complexidadeDeEspaco que funciona analogamente à complexidadeDeTempo.

Os testes automatizados não verificarão se sua implementação da tarefa 1 realmente tem a melhor complexidade possível, só checarão se as respostas 2 e 3 batem com a complexidade teórica.

Ex:

* Para a seguinte lista: null\<-{0}\<--\>{1}\<--\>{2}-\>null
* doubleList = { head: {0}, tail: {2} }, node = {0}, value = 50 =\> Deve adicionar o novo elemento após o primeiro node: null\<-{0}\<--\>{50}\<--\>{1}\<--\>{2}-\>null