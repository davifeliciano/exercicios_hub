### Monte a Cerca ###

Você tem N tábuas de madeira, com a mesma largura, mas alturas diferentes. Você pode pegar qualquer tábua de madeira e cortar em duas (não necessariamente iguais), desde que as duas tábuas de madeira resultantes tenham alturas inteiras (i.e. suas alturas sejam números inteiros). O corte só pode ser feito na horizontal, de modo que as duas tábuas resultantes terão a mesma largura da inicial. As tábuas resultantes podem também ser novamente cortadas como descrito.

Seu objetivo é construir uma cerca composta de K ou mais placas, todas com a mesma altura. Para compor a cerca, você não precisa usar todas as tábuas que tiver cortado. Qual a altura máxima das tábuas na cerca ?

Entrada

O primeiro parâmetro boards é um array de tamanho N que contém as alturas iniciais das tábuas de madeira.

O segundo parâmetro é o número inteiro K.

Saída

Se não houver solução, retorne 0.

Caso contrário, retorne um número inteiro que representa a altura máxima das tábuas na cerca.

Restrições e notas

* 1 ≤ N ≤ 10
* 1 ≤ K ≤ 10^14
* As alturas são números inteiros entre 1 e 10^9

Exemplos

* boards=[15,10,8], k=4 =\> deve retornar 7 porque é possível cortar a primeira tábua em 2 partes de altura 7 (com resto 1), a segunda tábua em 1 parte de altura 7 (com resto 3) e a terceira tábua em 1 parte de altura 7 (com resto 1), totalizando 4 tábuas (que é maior ou igual a k)
* boards=[15,10,8], k=5 =\> deve retornar 5 porque é possível cortar a primeira tábua em 3 partes de altura 5 (sem resto), a segunda tábua em 2 parte de altura 5 (sem resto) e a terceira tábua em 1 parte de altura 5 (com resto 3), totalizando 6 tábuas (que é maior ou igual a k)
* boards=[1,1,1], k=5 =\> deve retornar 0 porque não é possível fazer uma cerca com pelo menos 5 tábuas