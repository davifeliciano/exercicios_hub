### Soma profundidades de nós em árvore binária ###

Escreva uma função recursiva sumNodeDepths(root) que recebe a raiz root de uma árvore binária cujos nós armazenam números inteiros. A função soma a profundidade de todos os nós e retorna essa soma. Adote que a raiz tem profundidade 0, seus filhos têm profundidade 1, etc. O parâmetro root nunca será null.

Exemplo 1
----------

![](https://files.driven.com.br/images/image-181c653b.png)

Exemplo 2
----------

![](https://files.driven.com.br/images/image-cf3c37f9.png)

Exemplo 3
----------

![](https://files.driven.com.br/images/image-137c7c0e.png)

*Sugestão: você pode adicionar parâmetros opcionais* *sumNodeDepths(**root**,* *a* *=* *\<algo\>**,* *b* *=* *\<algo\>**,* *c* *= ...)* *para facilitar o controle das chamadas recursivas. Como esses parâmetros nunca serão usados pelos testes automatizados, você pode usá-los exclusivamente para que uma chamada recursiva consiga direcionar as outras. Por outro lado, decidir quantos parâmetros usar e como usar fica a seu critério.*