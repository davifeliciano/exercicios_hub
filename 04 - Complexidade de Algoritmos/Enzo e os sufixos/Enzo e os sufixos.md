### Enzo e os sufixos ###

Enzo tem uma array ***a***, essa array é composta por ***n*** inteiros ***a***<sub><strong><em>1</em></strong></sub>***, a***<sub><strong><em>2</em></strong></sub>***, a***<sub><strong><em>3</em></strong></sub>***, ..., a***<sub><strong><em>n</em></strong></sub>. Como Enzo não consegue ficar de bobeira fazendo nada, ele decide que vai fazer um estudo dessa array.

Para cada número ***a***<sub><strong><em>i </em></strong></sub>ele quer saber quantos números distintos existem nas posições ***i, i+1, i+2, ..., n***.

Resumindo, ele quer descobrir, em complexidade de tempo de pior caso linear em relação à entrada, quantos números distintos existem dentre os números à direita de ***a***<sub><strong><em>i</em></strong></sub>, incluindo ***a***<sub><strong><em>i.</em></strong></sub>

Entrada:

* Sua função vai receber uma lista de entrada com ***n*** inteiros ***a***<sub><strong><em>1</em></strong></sub>***, a***<sub><strong><em>2</em></strong></sub>***, ..., a***<sub><strong><em>n</em></strong></sub> ***(1 \<= a***<sub><strong><em>i</em></strong></sub> ***\<= 10***<sup><strong><em>5</em></strong></sup>***).***

Saída:

* Sua função deve retornar uma lista com a resposta para cada número ***a***<sub><strong><em>i</em></strong></sub>

Exemplo:

* nArray = [1, 2, 3, 4, 1, 2, 3, 4, 100, 99] =\> Deve retornar [6, 6, 6, 6, 6, 5, 4, 3, 2, 1]
* nArray = [1, 2, 3, 4, 100, 99] =\> Deve retornar [6, 5, 4, 3, 2, 1]

*\*obs: a correção automática usa timeouts para testar se a complexidade do seu código está correta. Timeouts podem dar resultados incorretos, por exemplo acusando que sua solução tem complexidade incorreta quando na verdade está correta (ou o contrário). Caso ache que isso está acontecendo com você, mande um feedback contendo print do seu código e dos casos de teste =)*