### Text Encode ###

Os engenheiros da ACME inventaram uma nova maneira de codificar um texto (i.e. transformar um texto de entrada num outro texto de saída, de maneira que seja possível reverter a transformação).

Funciona assim: primeiro o engenheiro constrói uma lista mestre contendo todas as letras do alfabeto em ordem: ABCDEFGHIJKLMNOPQRSTUVWXYZ. Então ele itera pelo texto de entrada realizando algumas operações, e cada letra da entrada gera uma letra da saída. Como exemplo, considere que codificaremos o texto “vencedor”.

Ao ver a primeira letra “v”, ele consulta na lista mestre qual letra aparece depois de V, que atualmente é W. Então a primeira letra da saída é w, e o engenheiro troca o V para a primeira posição da lista mestre. Ficamos assim:

\- lista mestre: VABCDEFGHIJKLMNOPQRSTUWXYZ

\- saída: w

Agora ele vai pra segunda letra da entrada, “e”. Repete o processo: consulta qual letra aparece depois de E na lista mestre e coloca essa letra na saída. Depois troca o E para a primeira posição da lista mestre. Ficamos assim:

\- lista mestre: EVABCDFGHIJKLMNOPQRSTUWXYZ

\- saída: wf

Próximo passo:

\- lista mestre: NEVABCDFGHIJKLMOPQRSTUWXYZ

\- saída: wfo

Próximo passo:

\- lista mestre: CNEVABDFGHIJKLMOPQRSTUWXYZ

\- saída: wfod

Próximo passo:

\- lista mestre: ECNVABDFGHIJKLMOPQRSTUWXYZ

\- saída: wfodv

Próximo passo:

\- lista mestre: DECNVABFGHIJKLMOPQRSTUWXYZ

\- saída: wfodvf

Próximo passo:

\- lista mestre: ODECNVABFGHIJKLMPQRSTUWXYZ

\- saída: wfodvfp

Próximo passo:

\- lista mestre: RODECNVABFGHIJKLMPQSTUWXYZ

\- saída: wfodvfps

Finalmente, o texto codificado é wfodvfps. Obs: durante a codificação, quando uma letra da entrada é a última da lista mestre (ou seja, não tem “próxima letra”), a “próxima” é considerada a primeira letra da lista mestre.

Sua tarefa é escrever uma função textEncode(inputString) que recebe um texto como entrada e o codifica, retornando o texto codificado. O texto de entrada sempre será uma string não-vazia contendo somente letras minúsculas.