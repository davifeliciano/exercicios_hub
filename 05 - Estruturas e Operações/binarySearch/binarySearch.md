### binarySearch ###

Escreva uma função binarySearch(array, x) que recebe um vetor array de números **distintos** em **ordem crescente** e um número x. A função procura se x está presente no vetor usando **busca binária.** Se x for encontrado, a função retorna o índice onde esse número aparece. Se x não estiver presente no vetor, a função retorna -1.

A função deve implementar uma **busca binária recursiva**, sem usar loops.

Exemplos de entrada/saída:

\- binarySearch([1, 20, 25, 43], 43) ---\> 3

\- binarySearch([1, 20, 25, 43], 20) ---\> 1

\- binarySearch([1, 20, 25, 43], 7) ---\> -1

\- binarySearch([], 43) ---\> -1

*Sugestão: você pode adicionar parâmetros opcionais binarySearch(array, x, a = \<algo\>, b = \<algo\>, c = ...) para facilitar o controle das chamadas recursivas. Como esses parâmetros **nunca** serão usados pelos testes automatizados, você pode usá-los exclusivamente para que uma chamada recursiva consiga direcionar as outras. Por outro lado, decidir quantos parâmetros usar e como usar fica a seu critério.*