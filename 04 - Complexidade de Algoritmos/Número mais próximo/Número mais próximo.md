### Número mais próximo ###

Mia tem um conjunto de números inteiros ordenados, e quer fazer uma busca por um número aleatório dentro desse conjunto, e caso ela não encontre esse número, quer receber o número inteiro mais próximo a ele.

Como os conjuntos de números são extremamente grandes, Mia não quer que sua complexidade seja maior que O(log n), e caso ela selecione um número que esteja a mesma distância entre dois vizinhos, ela quer retornar o maior entre esses vizinhos, você consegue ajudá-la nessa tarefa?

Ex:

* list=[10, 23, 49, 50] e target=23 =\> Deve retornar 23
* list=[10, 23, 49, 50] e target=24 =\> Deve retornar 23
* list=[10, 23, 49, 50] e target=22, =\> Deve retornar 23
* list=[10, 23, 49, 50] e target=17, =\> Deve retornar 23
* list=[10, 23, 49, 50] e target=50, =\> Deve retornar 50
* list=[10, 23, 49, 50] e target=100, =\> Deve retornar 50
* list=[10, 23, 49, 50] e target=0, =\> Deve retornar 10
* list=[10, 23, 49, 50] e target=36 =\> Deve retornar 49 , porque tanto 23 quanto 49 têm distância 13 ao 36, então retornarmos o maior dos dois.

Restrições: Sua função não pode acessar nenhum método do vetor de entrada. Só pode acessar wordList[i] para qualquer número i, e wordList.length