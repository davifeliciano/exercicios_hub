### Estado da Pilha na Exceção ###

*obs: este exercício não é de implementação de código, é um quiz múltipla escolha. Você deve implementar a função* responder *para que ela retorne a soma dos números de todas as afirmativas corretas. Note que os números das afirmativas aumentam em potência de 2: 1, 2, 4, 8 etc. Desconsidere que a função* *responder* *influencie a pilha de execução.*

Qual é o estado da pilha de execução quando o código desta questão é executado ? Note que a execução inicia com o comando casaDeTerror(true) (veja código), e que uma exceção (erro) é lançada num certo momento.

Afirmativa 01: Incluindo o frame global, existem 4 contextos empilhados no momento que o código termina devido a exceção (erro).

Afirmativa 02: Incluindo o frame global, existem 3 contextos empilhados no momento em que o código termina devido a exceção (erro).

Afirmativa 04: Quando o código executa até a exceção (erro), a pilha de execução fica vazia, porque chegamos ao final do código.

Afirmativa 08: Quando a exceção (erro) é lançada, o topo da pilha de execução é a função main

Afirmativa 16: Quando a exceção (erro) é lançada, o topo da pilha de execução é a função novaExcecao

Afirmativa 32: Os contextos empilhados na pilha de execução quando o código termina devido a exceção (erro), da base para o topo, estão ordenados conforme a seguinte lista [main, casaDeTerror, corre, velocidade, invocaFantasma, velocidade]

Afirmativa 64: Os contextos empilhados na pilha de execução quando o código termina devido a exceção (erro), da base para o topo, estão ordenados conforme a seguinte lista [main, casaDeTerror, corre, invocaFantasma, novaExcecao]

Afirmativa 128: Os contextos empilhados na pilha de execução quando o código termina devido a exceção (erro), da base para o topo, estão ordenados conforme a seguinte lista [main, casaDeTerror, novaExcecao]