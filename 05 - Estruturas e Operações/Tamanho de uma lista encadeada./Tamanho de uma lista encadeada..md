### Tamanho de uma lista encadeada. ###

Complete as três funções, de modo que:

* A função length, receba um objeto contendo o *head* de uma lista encadeada e seja capaz de retornar um número, representando a quantidade de nós que existem na lista, ou 0, caso não existam nós nessa lista.
* A função complexidadeDeTempo, retorne uma string, contendo a complexidade de tempo teórica dessa função. O teste irá receber uma das três strings: "constante", "linear", "quadratica"
* A função complexidadeDeEspaco, retorne uma string, contendo a complexidade de tempo teórica dessa função. O teste irá aceitar uma das três strings: "constante", "linear", "quadratica".

**Obs**: Os testes não farão a verificação se sua função length tem a melhor complexidade possível. Apenas validarão suas respostas para a complexidade nas outras duas funções.

Ex:

* list = { head: { value: 1, next: { value: 2, next: null } } } =\> Deve retornar 2 e as strings que representam suas respectivas complexidades teóricas.
* list = { head: null } =\> Deve retornar 0 e as strings que representam suas respectivas complexidades teóricas.