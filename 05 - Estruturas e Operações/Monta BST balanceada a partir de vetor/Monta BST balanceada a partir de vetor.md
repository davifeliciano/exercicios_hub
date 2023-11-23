### Monta BST balanceada a partir de vetor ###

Escreva uma função recursiva sortedArrayToBST(values) que recebe um vetor values contendo números inteiros distintos em ordem crescente. A função cria uma árvore BST balanceada a partir do vetor e retorna a raiz da árvore. A lógica de criação deve ser a seguinte:

(i) o elemento do meio do vetor deve virar a raiz da árvore (se o vetor tiver tamanho par, escolha o elemento à esquerda do meio).

(ii) sobrarão dois subvetores: um de 0 até meio-1, outro de meio+1 até o último elemento.

(iii) a subárvore esquerda da raiz deve ser criada a partir do subvetor esquerdo seguindo a mesma lógica.

(iv) a subárvore direita da raiz deve ser criada a partir do subvetor direito seguindo a mesma lógica.

obs: O vetor nunca estará vazio.

Exemplo 1
----------

![](https://files.driven.com.br/images/image-d742a23f.png)

Exemplo 2
----------

![](https://files.driven.com.br/images/image-8591459b.png)

Exemplo 3
----------

![](https://files.driven.com.br/images/image-c64e99b5.png)

Exemplo 4
----------

![](https://files.driven.com.br/images/image-4fed9c4f.png)

*Sugestão: você pode adicionar parâmetros opcionais* *sortedArrayToBST(**values**,* *a* *=* *\<algo\>**,* *b* *=* *\<algo\>**,* *c* *= ...)* *para facilitar o controle das chamadas recursivas. Como esses parâmetros nunca serão usados pelos testes automatizados, você pode usá-los exclusivamente para que uma chamada recursiva consiga direcionar as outras. Por outro lado, decidir quantos parâmetros usar e como usar fica a seu critério.*