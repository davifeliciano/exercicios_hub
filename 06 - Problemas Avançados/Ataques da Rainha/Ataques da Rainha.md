### Ataques da Rainha ###

Você vai receber um grid como um tabuleiro de xadrez, com uma rainha posicionada em qualquer uma das casas. Seu

 objetivo é determinar quais casas que a rainha consegue atacar.

Uma rainha está posicionada em um tabuleiro de xadrez com dimensões nxn. As linhas desse tabuleiro de xadrez estão numeradas de 1 até n, começando debaixo e terminando em cima. As colunas desse tabuleiro de xadrez estão numeradas de 1 até n começando da esquerda e seguindo em direção a direita. Cada casa é representada por uma lista com dois números [x, y], onde x representa a linha e y representa a coluna.

A rainha vai ser posicionada em uma determinada casa [xr, yr]. Em um movimento, ela consegue atacar todos os quadrados em qualquer das oito direções possíveis (esquerda, direita, cima, baixo e as 4 diagonais). No diagrama abaixo, os círculos verdes representam as casas que a rainha conseguiria atacar a partir da posição [4, 4] em um tabuleiro com dimensões 8x8:

![](https://files.driven.com.br/images/image-c6a80f95.png)

Sua tarefa é: dada a posição da rainha e o tamanho do tabuleiro, retorne uma lista de sublistas, contendo todas as casas que a rainha consegue atacar

**Parâmetros de entrada:**

n ⇒ Dimensões do tabuleiro

posRainha ⇒ Lista com dois elementos contendo a posição da rainha

**Exemplo:**

n = 5, posRainha = [4,3] ⇒ Deve retornar [[ 1, 3 ], [ 2, 1 ],[ 2, 3 ], [ 2, 5 ],[ 3, 2 ], [ 3, 3 ],[ 3, 4 ], [ 4, 1 ],[ 4, 2 ], [ 4, 4 ],[ 4, 5 ], [ 5, 2 ],[ 5, 3 ], [ 5, 4 ]]

![](https://files.driven.com.br/images/image-76495088.png)