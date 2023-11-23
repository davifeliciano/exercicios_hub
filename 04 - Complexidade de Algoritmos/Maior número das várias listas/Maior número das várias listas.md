### Maior número das várias listas ###

*obs: este exercício não é de implementação de código, é um quiz múltipla escolha. Você deve implementar a função* responder *para que ela retorne a soma dos números de todas as afirmativas corretas. Note que os números das afirmativas aumentam em potência de 2: 1, 2, 4, 8 etc.*

Mariazinha implementou a função maiorNumero(outerList) (veja o código) que recebe 1 lista de listas e retorna o maior número de todas as listas internas. Por exemplo, se outerList=[[1, 10, 21, 2, 5, 8], [11, 43, 61, 30], [50, 1]] , a função maiorNumero retorna 61. Sobre isso, fazemos algumas afirmativas:

**Afirmativa 01**: Suponha que cada lista interna pode ter um tamanho diferente, e denominamos n a quantidade total de elementos de todas as listas internas (no exemplo acima, n seria 6+4+2=12). Então a complexidade de tempo da maiorNumero é O(n)

**Afirmativa 02**: Suponha que cada lista pode ter um tamanho diferente, e denominamos n o tamanho da *maior* lista interna (no exemplo acima, as listas internas têm tamanhos 6, 4 e 2, logo o n=6). Então a complexidade de tempo da maiorNumero é O(n)

**Afirmativa 04:** Suponha que todas as listas internas têm o mesmo tamanho m, e que a lista externa tenha n listas internas. Então a complexidade de tempo da maiorNumero é O(m + n)

**Afirmativa 08:** Suponha que todas as listas internas têm o mesmo tamanho m, e que a lista externa tenha n listas internas. Então a complexidade de tempo da maiorNumero é O(m\*n)

**Afirmativa 16:** Suponha que cada lista interna tenha um tamanho diferente e que (por algum motivo) o maior número de todas as listas sempre esteja na lista interna com mais elementos. Também suponha que denominamos n o tamanho da *maior* lista interna (no exemplo acima, as listas internas têm tamanhos 6, 4 e 2, logo n=6) e m a quantidade de listas internas (no exemplo acima, m=3). Mariazinha resolveu aproveitar esse fato para escrever um código que ela acha que é mais eficiente: a função maiorNumeroV2. Dado todo esse cenário, a maiorNumeroV2 está correta e sua complexidade de tempo é O(n\*m)

**Afirmativa 32:** No mesmo cenário da afirmativa 16, a maiorNumeroV2 está correta e sua complexidade de tempo é O(n+m)

**Afirmativa 64:** No mesmo cenário da afirmativa 16, a maiorNumeroV2 está *incorreta* e sua complexidade de tempo é O(n\*m)

**Afirmativa 128:** No mesmo cenário da afirmativa 16, a maiorNumeroV2 está *incorreta* e sua complexidade de tempo é O(n+m)