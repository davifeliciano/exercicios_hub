### Insere na posição correta ###

Escreva:

1. Uma função chamada insertAt(doubleList, value, index) que recebe um objeto que representa uma lista duplamente encadeada com as propriedades head *e tail*, um novo valor pelo parâmetro value, e esse novo valor deve ser inserido nessa lista na posição indicada pelo parâmetro index. Se o index for maior que tamanho da lista, deve adicionar ao final. Se o index for nulo ou negativo deve adicionar no início da lista. Em outros casos a função deve inserir o nó na posição correta indicada por index. Sua função não precisa retornar nada, mas precisa alterar coretamente a lista.
2. Uma função complexidadeDeTempo que retorna um vetor de 2 elementos. Ambos os elementos devem ser uma das strings "constante", "linear", "quadratica". O primeiro elemento indica qual seria a mínima complexidade de tempo teórica do algoritmo anterior se a lista fosse simplesmente encadeada e o head node só tivesse a propriedade head. O segundo elemento indica qual é a mínima complexidade de tempo teórica do algoritmo anterior agora que a lista é duplamente encadeada e o head node tem as propriedades head e tail.
3. Uma função complexidadeDeEspaco que funciona analogamente à complexidadeDeTempo.

Os testes automatizados não verificarão se sua implementação da tarefa 1 realmente tem a melhor complexidade possível, só checarão se as respostas 2 e 3 batem com a complexidade teórica.