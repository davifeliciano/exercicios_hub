### Estacionamento Ótimo ###

Ao fazer compras na Rua Longa, Michel geralmente estaciona o carro em algum local aleatório e depois caminha até as lojas de que precisa.

Rua Longa é uma linha reta, onde todas as posições são números inteiros. Você paga para estacionar numa vaga específica, que é uma posição inteira na Rua Longa. Michel não quer pagar por mais de um estacionamento. Ele é bem forte e não se importa em carregar todos os sacos de um lado a outro.

Então Michel primeiro escolhe onde estacionar, depois visita todas as lojas que ele quer, e por último volta a seu carro para ir embora.

Por exemplo, suponha que as posições das lojas na Rua Longa sejam [10, 11, 13, 20] e Michel estacione seu carro na posição 9. Ele pode então fazer o seguinte percurso: 9=\>10 (distância 1), 10=\>11 (distância 1), 11=\>13 (distância 2), 13=\>20 (distância 7), 20=\>9 (distância 11). Esse percurso totaliza distância 22, que Michel teve que andar a pé. Se ele tivesse escolhido outro ponto para estacionar (qualquer número inteiro vale), poderia ter sido menor a distância que ele precisaria andar a pé.

Escreva uma função ruaLonga(lojas) que recebe um array de inteiros positivos distintos (não necessariamente ordenados) denotando as posições das lojas que Michel quer visitar. A função deve retornar a menor distância a pé que Michel precisará andar, caso ele escolha o melhor ponto para estacionar (que pode ser qualquer número inteiro) e o melhor percurso a fazer de loja em loja e depois voltando ao carro (ele pode visitar as lojas na ordem que quiser).