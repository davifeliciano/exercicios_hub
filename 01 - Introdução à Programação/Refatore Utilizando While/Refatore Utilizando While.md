### Refatore Utilizando While ###

Neste exercício vamos refatorar o código da função repeteComandos(), utilizando a estrutura while sem alterar o resultado impresso. Mais especificamente, note que a função repeteComandos invoca alternadamente as outras funções soma1 e multiplica2, e faz isso 6 vezes. Gostaríamos de usar um while para que, no código da repeteComandos, exista somente 1 linha de código que faz uma invocação a soma1, e somente 1 linha de código que faz uma invocação a multiplica2

**Obs. 1**: **Refatorar** é quando alteramos o código e mantemos o seu comportamento, logo, refatorar usando while é aplicar o loop while de tal forma que o resultado final ainda se mantém o mesmo.

**Obs. 2:** Da maneira como está, o código inicial já passa no teste. O objetivo é alterá-lo como pedido, de forma que continue passando no teste.

*Os testes automatizados checarão se o resultado do console está exatamente igual ao esperado, então você não pode usar console.log para debugar, senão o resultado produzido pela sua função não vai bater exatamente com o esperado, e o teste não irá passar.*