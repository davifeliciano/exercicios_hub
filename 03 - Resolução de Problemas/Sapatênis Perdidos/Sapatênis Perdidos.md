### Sapatênis Perdidos ###

A squad de Sapatos, Sapatilhas e Sapatênis da Faria Lima fez um grande pedido de sapatênis de diversos tamanhos. No entanto, houve uma falha no processo de empacotamento e nem todas as caixas contêm um par correto, isto é, sapatênis do mesmo tamanho para cada pé. O Head da squad pediu que todos devolvessem os sapatênis nas suas respectivas caixas.

Quando o Head descobriu que você sabe programação ele ficou empolgado e solicitou que você escrevesse um programa que forme pares possíveis de sapatênis.

**Entrada**

A entrada consiste em uma lista de listas, cada lista interna representa um lote de sapatênis. Cada lote é formado por uma quantidade N de sapatênis, tal que 2 ≤ N ≤ 100, sendo N um número inteiro par. Cada sapatênis é formado por um valor textual com um número M, tal que 30 ≤ M ≤ 60 separado por um espaço de um valor L, sendo 'E' ou 'D'

**Saída**

Seu programa deve retornar uma lista de valores inteiros, onde cada valor representa a quantidade de pares possíveis em cada lote respectivamente. Sabendo que para formar um par possível os sapatênis devem ter o mesmo tamanho M e uma unidade com L = 'E' e outra L = 'D', formando um par do mesmo tamanho para o pé esquerdo e outro para o pé direito.

**Ex.:**

Entrada: lst = [['40 D', '41 E', '41 D', '40 E'], ['38 E', '38 E', '40 D', '38 D', '40 D', '37 E']]

Saída: [2, 1]