### O problema da Dama ###

Em um jogo de Xadrez existem diversas peças com movimentos curiosos. Uma dessas peças é a Dama, que pode ser movimentada por qualquer número de casas em qualquer direção: na mesma linha, na mesma coluna ou em qualquer uma das diagonais, como demonstrado na figura abaixo:

![](https://files.driven.com.br/images/image-63de06bb.png)

O grande mestre de xadrez Kary Gasparov inventou um novo problema de xadrez: dado a posição de uma dama em um tabuleiro vazio, quantos movimentos são necessários para que a dama consiga atingir outra casa no tabuleiro?

Kary conseguiu a solução para algumas posições, mas está tendo dificuldade com outras, e por isso veio pedir sua ajuda para escrever um algoritmo que resolva esse problema.

**Input:**

Sua função receberá duas listas contendo [X<sub>1</sub>, Y<sub>1</sub>] e [X<sub>2</sub>, Y<sub>2</sub>]. Onde X1, Y1 representam a casa em que a dama está e X2, Y2 representam a casa em que a dama quer chegar. No tabuleiro as colunas são numeradas de 1 a 8, da esquerda para a direita; as linhas também são numeradas de 1 a 8, de cima para baixo. Uma casa é representada por uma linha X e uma coluna Y.

**Output:**

Seu programa deve retornar um número indicando a quantidade de movimentos necessários para a Dama chegar na casa final. Note que andar numa mesma linha conta como um só movimento (ou seja, ir da coluna 4 à coluna 8 é 1 movimento), e o mesmo vale para andar numa mesma coluna ou numa mesma diagonal.

Ex:

* casaIni = [3, 3], casaFin = [3, 3] =\> Deve retornar 0
* casaIni = [4, 5], casaFin = [4, 8] =\> Deve retornar 1 (pois é 1 movimento que leva a dama da coluna 5 à coluna 8)
* casaIni = [2, 1], casaFin = [4, 5] =\> Deve retornar 2 (pois é 1 movimento para levar a dama da linha 2 à linha 4, depois outro movimento para levá-la da coluna 1 à coluna 5)
* casaIni = [3, 3], casaFin = [5, 5] =\> Deve retornar 1 (pois é 1 movimento na diagonal para mover 2 linhas e 2 colunas)