### Remove no index ###

Crie uma função chamada splice(list, index) que recebe um objeto list, que contém a propriedade *head* de uma lista encadeada, e um número inteiro positivo no parâmetro *index*. Essa função deve remover o nó, na posição indicada pelo *index*. Se não houver nenhum nó nessa posição, a função não precisa fazer nada. Essa função não precisa retornar nada. Sua implementação deve ter a melhor complexidade de tempo e espaço possível.

Também altere as funções complexidadeDeEspaco() e complexidadeDeTempo(), para que cada uma retorne corretamente sua medida. Cada uma deve retornar uma dentre as seguintes strings: "constante", "linear", "quadratica".

Ex:

* list = { head: { value: 1, next: { value: 2, next: { value: 3, next: null } } } }, index = 1 =\> Deve alterar a lista para { head: { value: 1, next: { value: 3, next: null } } }
* list = { head: { value: 1, next: { value: 2, next: { value: 3, next: null } } } }, index = 0 =\> Deve alterar a lista para { head: { value: 2, next: { value: 3, next: null } } }
* list = { head: { value: 1, next: null }, index = 0 =\> Deve alterar a lista para { head: null }
* list = { head: { value: 1, next: null }, index = 3 =\> Não deve fazer nada.
* list = { head: null }, index = 0 /\* ou qualquer outro \*/ =\> Não deve fazer nada.