### Remove Lista Duplamente Encadeada pelo índice ###

Escreva:

1. Uma função chamada splice(doubleList, index) que recebe como parâmetros um objeto contendo uma lista duplamente encadeada com as propriedades *head* e *tail* e um número através do parâmetro index. Faça com que essa função remova dessa lista duplamente encadeada o nó que ocupa a posição indicada pelo parâmetro index. Sua função **não** precisa de retorno. Se não houver nenhum nó na posição indicada por index, sua função não precisa fazer nada.
2. Uma função complexidadeDeTempo que retorna um vetor de 2 elementos. Ambos os elementos devem ser uma das strings "constante", "linear", "quadratica". O primeiro elemento indica qual seria a mínima complexidade de tempo teórica do algoritmo anterior se a lista fosse simplesmente encadeada e o head node só tivesse a propriedade head. O segundo elemento indica qual é a mínima complexidade de tempo teórica do algoritmo anterior agora que a lista é duplamente encadeada e o head node tem as propriedades head e tail.
3. Uma função complexidadeDeEspaco que funciona analogamente à complexidadeDeTempo.

Os testes automatizados não verificarão se sua implementação da tarefa 1 realmente tem a melhor complexidade possível, só checarão se as respostas 2 e 3 batem com a complexidade teórica.

Ex para Lista: null\<-{0}\<--\>{1}\<--\>{2}\<--\>{3}-\>null

* doubleList = { head: {0}, tail: {3} }, index = 2 =\> Deve alterar a lista para null\<-{0}\<--\>{1}\<--\>{3}-\>null