### Aprendendo com os erros ###

Você deve estar se perguntando. **Como isso funciona?**

Cada vez que você clicar em "Rodar Testes" vamos executar o seu código e capturar a resposta da sua solução, porém erros podem acontecer. Um erro muito comum é: ***bolinha is not defined***

*Obs.: Bolinha pode ser qualquer outro nome.*

Execute o código sem fazer nenhuma alteração.

Note que o exercício não foi concluído, e tivemos dois erros nos nossos casos de teste. Os dois casos de teste falharam e vamos entender porquê.

* No caso de teste 1, temos uma mensagem amigável, e nós fomos capazes de capturar o erro, e apresentar para você que o teste esperava como resposta a string "Aii siii! 🥳", mas recebeu como resposta a string "Não existe 'bolinha' 😒"
* No caso de teste 2, temos novamente uma mensagem, mas em seguida temos um erro de execução: ***bolinha is not defined.*** Não se assuste, isso foi um erro que nós não conseguimos capturar. Mas tem exatamente o mesmo significado que o erro anterior

Em ambos os casos o problema está relacionado ao teste estar procurando no seu seu código algo com o nome bolinha, pode ser uma função, uma variável, uma lista, ou qualquer outra coisa, mas não está conseguindo encontrar.

Nesse caso, para concluir o exercício, precisamos alterar a palavra "quadrado" para bolinha e os testes devem ser capazes de indentificar aquilo que estão procurando.