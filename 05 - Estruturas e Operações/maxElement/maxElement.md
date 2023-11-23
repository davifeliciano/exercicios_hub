### maxElement ###

Crie uma função recursiva maxElement(array) que recebe um vetor de números array e retorna o máximo elemento desse vetor. A função faz isso recursivamente, sem usar loops - while/for/do/forEach/etc.

*Sugestão: use um segundo parâmetro opcional* *maxElement(array, index = 0)* *para controlar a recursão sem criar cópias desnecessárias do vetor. Os testes automatizados não passarão esse segundo parâmetro para a função, ou seja, você pode usá-lo como quiser para controlar a evolução interna da recursão.*

Exemplos:

\- maxElement([]) --\> undefined

\- maxElement([10]) --\> 10

\- maxElement([10, 2]) --\> 10

\- maxElement([10, 2, 20, -5]) --\> 20