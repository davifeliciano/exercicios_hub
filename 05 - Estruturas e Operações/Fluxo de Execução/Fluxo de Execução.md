### Fluxo de Execução ###

*obs: este exercício não é de implementação de código, é um quiz múltipla escolha. Você deve implementar a função* responder *para que ela retorne a soma dos números de todas as afirmativas corretas. Note que os números das afirmativas aumentam em potência de 2: 1, 2, 4, 8 etc.*

Descubra as alternativas verdadeiras sobre o fluxo de execução do programa:

Afirmativa 01: O fluxo de execução é a quantidade de dados que o computador consegue transmitir ao retirar ou inserir frames na pilha de execução.

Afirmativa 02: A pilha de execução é uma estrutura que é responsável por ordenar contextos e controlar o fluxo de execução do programa.

Afirmativa 04: Em um programa em que não chamamos nenhuma função, não existe necessidade de controlar o fluxo de execução do programa, então também não há pilha de execução.

Afirmativa 08: Durante o controle do fluxo de execução de um programa, pode acontecer de uma função ser chamada mais de uma vez e ter diferentes contextos dessa função empilhados na pilha de execução ao mesmo tempo.

Afirmativa 16: A pilha de execução não pode manter diferentes contextos de uma mesma função empilhados durante a execução do programa, porque isso atrapalharia o fluxo de execução.

Afirmativa 32: O fluxo de execução de um programa começa no contexto global e termina no contexto global.

Afirmativa 64: Considere as seguintes informações sobre 3 funções A, B e C: a função A invoca C depois B; a função B invoca C; a função C não invoca ninguém. Então, se o contexto global invocar a função A, é correto dizer que a C aparecerá 2 vezes na pilha: na primeira vez, ela terá um frame vizinho ao frame da A; na segunda vez, ela terá um frame vizinho ao frame da B.