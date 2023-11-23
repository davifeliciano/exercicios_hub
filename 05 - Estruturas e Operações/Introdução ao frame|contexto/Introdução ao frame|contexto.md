### Introdução ao frame/contexto ###

*obs: este exercício não é de implementação de código, é um quiz múltipla escolha. Você deve implementar a função* responder *para que ela retorne a soma dos números de todas as afirmativas corretas. Note que os números das afirmativas aumentam em potência de 2: 1, 2, 4, 8 etc.*

Assinale as alternativas corretas sobre os frames:

Afirmativa 01: Os frames são estruturas diferentes dos contextos.

Afirmativa 02: A pilha de execução faz o empilhamento de funções enquanto executa o programa.

Afirmativa 04: A pilha de execução faz o empilhamento de contextos, mas não de frames.

Afirmativa 08: O frame que está sendo executado no momento está no topo da pilha de execução.

Afirmativa 16: Se um contexto é retirado da pilha de execução, caso ele retorne algum valor, dizemos que existe a passagem de informação na direção da base para o topo.

Afirmativa 32: Se um contexto é retirado da pilha de execução, caso ele retorne algum valor, dizemos que existe a passagem de informação na direção do topo para a base.

Afirmativa 64: Se uma função recebe parâmetros de entrada, dizemos que existe passagem de informação na direação da base para o topo.

Afirmativa 128: Se uma função recebe parâmetros de entrada, dizemos que existe passagem de informação na direção do topo para a base.

Afirmativa 256: O topo da pilha de execução é sempre chamado de global frame, ou main frame.

Afirmativa 512: Em cada contexto, armazenamos as variáveis que fazem parte daquele contexto, e quando necessário, retornamos ou enviamos valores para outros contextos por meio de comandos return e invocação de função, respectivamente.

Afirmativa 1024: É possível que, num certo ponto do programa, o frame que está no topo da pilha seja da função A, mas o código em execução seja da função B.