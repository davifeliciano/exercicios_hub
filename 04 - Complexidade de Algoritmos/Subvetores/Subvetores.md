### Subvetores ###

*obs: este exercício tem 2 partes. A primeira é de implementação e a segunda é um quiz múltipla escolha*

Parte 1
----------

Implemente a função subvetores(vetor, passo, tamanho) que recebe 1 vetor de números vetor, e 2 números inteiros positivos passo e tamanho. A função retorna uma lista de todos os subvetores com tamanho tamanho e que começam nos índices 0, 0+passo, 0+2\*passo etc.

Exemplo 1: se vetor=[1,2,3,4,5], passo=2 e tamanho=3, a função retorna [[1,2,3],[3,4,5]].

Exemplo 2: se vetor=[1,2,3,4,5], passo=2 e tamanho=2, a função retorna [[1,2],[3,4]].

Exemplo 3: se vetor=[1,2,3,4,5], passo=1 e tamanho=2, a função retorna [[1,2],[2,3],[3,4],[4,5]].

Parte 2
----------

Considerando n o tamanho de vetor, determine qual é a melhor complexidade de tempo possível para a função subvetores. Então implemente a função complexidadeTempo, que deve retornar uma string simbolizando sua resposta. As possibilidades de string que podem ser retornadas são: "O(n)", "O(n\*passo)", "O(n\*tamanho)", "O(n\*passo\*tamanho)", "O(n+passo)", "O(n+passo+tamanho)", "O((n/passo))", "O((n/passo)\*tamanho)", "O((n/tamanho))", "O((n/tamanho)\*passo)".