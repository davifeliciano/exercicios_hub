### Cria árvore zig-zag ###

Escreva uma função recursiva createZigZag(values) que recebe um vetor contendo números inteiros. A função monta uma “árvore zigzag” a partir dos elementos desse vetor (na ordem em que aparecem) e retorna a raiz da árvore. Uma árvore zigzag é aquela na qual a raiz tem somente um filho esquerdo, o qual tem só um filho direito, que por sua vez tem só um filho esquerdo, etc. Se o vetor estiver vazio, a função retorna null.

Exemplo de entrada:

values = [10, 100, 23, 45, 98, 43]

Saída esperada (a raiz da árvore diagramada abaixo):

![](https://files.driven.com.br/images/image-ae2d29e1.png)

Exemplo de entrada:

values = [10]

Saída esperada:

{value: 10, left: null, right: null}

*Sugestão: você pode adicionar parâmetros opcionais* *createZigZag(**values**,* *a* *=* *\<algo\>**,* *b* *=* *\<algo\>**,* *c* *= ...)* *para facilitar o controle das chamadas recursivas. Como esses parâmetros nunca serão usados pelos testes automatizados, você pode usá-los exclusivamente para que uma chamada recursiva consiga direcionar as outras. Por outro lado, decidir quantos parâmetros usar e como usar fica a seu critério.*