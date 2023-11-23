### Update isLegal(age, country) ###

 A fictícia ONG que você ajudou no exercício do Módulo anterior, abriu duas novas sedes, em Portugal e no Egito. Mas esses novos países tem leis diferentes para permitir o consumo de álcool de seus cidadãos.

Em Portugal a idade legal para consumo de Cervejas e Vinhos é 16 anos, e as demais bebidas 18 anos. Já no Egito, a Cerveja é permitida a partir dos 18 anos, enquanto outras bebidas são permitidas apenas após os 21 anos.

A sua função isLegal(age, country), precisa ser atualizada para isLegal(age, country, drink = ""), para que ela possa receber esse novo parâmetro que indica qual a bebida que está sendo comprada.

**Dica:** Ao definir a função dessa forma: isLegal(age, country, drink = ""), estamos dizendo que ao chamar a função, caso não seja passado nenhum parâmetro indicando um valor para a variável drink, queremos que o valor de drink seja uma string vazia("").

Novamente observando nossa tabela, temos:

* Brasil: 18 anos
* EUA: 21 anos
* Paraguai: 20 anos
* Jamaica: 16 anos
* Irã: nunca
* Armênia: sem limite de idade
* Portugal: cerveja ou vinho 16 anos, demais bebidas alcoólicas 18 anos
* Egito: cerveja 18 anos, demais bebidas 21 anos

**Obs:** Para quesitos de testes, considere as strings dos nomes dos países sendo "brasil", "eua", "paraguai", "jamaica", "ira", "armenia", "portugal" e "egito".