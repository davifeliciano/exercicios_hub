### Lista somas de galhos em árvore binária ###

Escreva uma função recursiva listBranchSums(root) que recebe a raiz root de uma árvore binária cujos nós armazenam números inteiros. Para cada galho da árvore, a função calcula a soma do galho, que é a soma dos valores de todos os nós que fazem parte do galho. A função retorna um vetor no qual cada elemento é a soma de um dos galhos da árvore. Os elementos do vetor podem aparecer em qualquer ordem, desde que todas as somas de galho estejam lá. O parâmetro root nunca será null.

Exemplo 1
----------

![](https://files.driven.com.br/images/image-a7a0e7a4.png)

----------

Exemplo 2
----------

![](https://files.driven.com.br/images/image-1390a9e3.png)

Exemplo 3
----------

![](https://files.driven.com.br/images/image-fbbcf0ad.png)

*Sugestão: você pode adicionar parâmetros opcionais* *listBranchSums(**root**,* *a* *=* *\<algo\>**,* *b* *=* *\<algo\>**,* *c* *= ...)* *para facilitar o controle das chamadas recursivas. Como esses parâmetros nunca serão usados pelos testes automatizados, você pode usá-los exclusivamente para que uma chamada recursiva consiga direcionar as outras. Por outro lado, decidir quantos parâmetros usar e como usar fica a seu critério.*