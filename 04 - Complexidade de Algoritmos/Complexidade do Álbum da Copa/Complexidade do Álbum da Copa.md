### Complexidade do Álbum da Copa ###

*obs: este exercício não é de implementação de código, é um quiz múltipla escolha. Você deve implementar a função* responder *para que ela retorne a soma dos números de todas as afirmativas corretas. Note que os números das afirmativas aumentam em potência de 2: 1, 2, 4, 8 etc.*

Vamos revisitar o exercício *Álbum da Copa.* Tínhamos um álbum de figurinhas com n espaços no total (i.e. existem n jogadores, e um espaço no álbum para colar a figurinha de cada um deles). Cada espaço estava associado a um número, ou seja, os espaços era contados de 1 até n. Também tínhamos uma lista lst que representa as figurinhas que já compramos. Por exemplo, se a lista fosse lst=[2, 30, 1, 20, 1, 2, 30] , então significa que já temos as figurinhas 1, 2, 20 e 30 (note que podem aparecer figurinhas repetidas na lista, porque nos pacotes de figurinha elas acabam vindo repetidas). O objetivo do exercício era escrever a função figurinhasFaltantes(n, lst) que retornava a lista das figurinhas que ainda *não temos*.

Para esta nova questão *Complexidade do Álbum da Copa*, a figurinhasFaltantes já está implementada (veja o código). Sobre esse cenário, fazemos algumas afirmativas:

**Afirmativa 01:** A figurinhasFaltantes retorna uma lista de tamanho máximo n

**Afirmativa 02:** Sabemos que, no pior caso, a lista retornada pela função figurinhasFaltantes tem tamanho n. Só sabendo disso (i.e. sem precisar olhar pro código da função), já podemos garantir que a complexidade de tempo da função é *pelo menos* O(n)

**Afirmativa 04:** Sabemos que, no pior caso, a lista retornada pela função figurinhasFaltantes tem tamanho n. Só sabendo disso (i.e. sem precisar olhar pro código da função), já podemos garantir que a complexidade de tempo da função é *no máximo* O(n)

**Afirmativa 08:** Denominando m a quantidade de figurinhas que temos (i.e. o tamanho de lst), então a complexidade de tempo da figurinhasFaltantes é "O(n+m)"

**Afirmativa 16:** Denominando m a quantidade de figurinhas que temos (i.e. o tamanho de lst), então a complexidade de tempo da figurinhasFaltantes é "O(n\*m)"