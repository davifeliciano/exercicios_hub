### Ataque das Rainhas II ###

Você vai receber um grid como um tabuleiro de xadrez, com uma rainha posicionada e um certo número de obstáculos

 colocados nesse tabuleiro. Seu objetivo é determinar a quantidade de casas que a rainha consegue atacar.

Uma rainha está posicionada em um tabuleiro de xadrez com dimensões nxn. As linhas desse tabuleiro de xadrez estão numeradas de 1 até n, começando debaixo e terminando em cima. As colunas desse tabuleiro de xadrez estão numeradas de 1 até n começando da esquerda e seguindo em direção a direita. Cada casa é representada por uma lista com dois números [x, y], onde x representa a linha e y representa a coluna.

A rainha vai ser posicionada em uma determinada casa [xr, yr]. Em um movimento, ela consegue atacar todos os quadrados em qualquer das oito direções possíveis (esquerda, direita, cima, baixo e as 4 diagonais). No diagrama abaixo, os círculos verdes representam as casas que a rainha conseguiria atacar a partir da posição [4, 4]

![](https://files.driven.com.br/images/image-4ddf0667.png)

Como descrito, podem existir obstáculos que impedem a passagem da rainha a partir da casa que eles ocupam. Por

 exemplo, se adicionássemos um obstáculo na posição [3,5] nesse exemplo, ele impediria a rainha de atacar as casas [3,

 5], [2, 6] e [1,7] :

![](https://files.driven.com.br/images/image-c2ae9b85.png)

Nesse exemplo. com a rainha posicionada em [4, 4] e um obstáculo posicionado em [3, 5] a rainha consegue atacar 24 casas. Sua tarefa é:

Dada a posição da rainha, e uma lista de subslistas com as casas que possuem obstáculos, calcule a quantidade de casas que a rainha consegue atacar.

**Parâmetros de entrada:**

n ⇒ Dimensões do tabuleiro

posRainha ⇒ Lista com dois elementos contendo a posição da rainha

listaObstaculos ⇒ Lista contendo sublistas com as posições dos obstaculos

**Exemplo:**

n = 5, posRainha = [4,3], listaObstaculos = [[4,2],[2,3],[5,5]] ⇒ Deve retornar 10

![](https://files.driven.com.br/images/image-a4adeec3.png)