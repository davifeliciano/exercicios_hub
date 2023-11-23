### Colégio dos Bruxos ###

No colégio de Bruxos a bibliotecária precisa organizar as prateleiras de todos os livros, antes da volta às aulas.

Apesar de os livros serem numerados, eles estão separados na prateleira e para organizá-los a bibliotecária está pensando em usar mágica. Ela vai fazer um truque que consegue juntar todos os exemplares do livro em uma mesma posição, e depois expandí-los até o número ideal de exemplares para cada aluno, mas ela não é boa em matemática e para isso ela precisa saber qual é o índice em que aparece o primeiro exemplar de cada livro na prateleira. Ajude-a a encontrar, em complexidade de tempo de pior caso linear, a lista que indica para cada livro a posição do primeiro exemplar desse livro na prateleira.

Entrada:

* Sua função vai receber como entrada uma lista que vai representar a organização dos livros da prateleira, os livros são representados por inteiros, e podem aparecer mais de uma vez na prateleira.

Saída:

* Sua função deve retornar uma nova lista com cada valor representando a posição na prateleira do primeiro exemplar do livro em questão. Se a entrada for vazia, a saída deve ser vazia.

Ex:

* bookshelf = [10, 3, 5, 3, 10, 1] =\> Deve retornar [0, 1, 2, 1, 0, 5]
* bookshelf = [100, 10, 100, 100, 20, 10, 20, 10, ...] =\> Deve retornar [0, 1, 0, 0, 4, 1, 4, 1, ...]

*\*obs: a correção automática usa timeouts para testar se a complexidade do seu código está correta. Timeouts podem dar resultados incorretos, por exemplo acusando que sua solução tem complexidade incorreta quando na verdade está correta (ou o contrário). Caso ache que isso está acontecendo com você, mande um feedback contendo print do seu código e dos casos de teste =)*