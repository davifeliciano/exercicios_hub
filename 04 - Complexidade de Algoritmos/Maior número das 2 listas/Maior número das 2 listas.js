// não altere esta função
function maiorNumero(lst1, lst2) {
    let maior = -Infinity;
    for (let i = 0; i < lst1.length; i++) {
        if (lst1[i] > maior) {
            maior = lst1[i];
        }
    }
    for (let j = 0; j < lst2.length; j++) {
        if (lst2[j] > maior) {
            maior = lst2[j];
        }
    }

    return maior;
}

function responder() {
    return 9; // por exemplo: 
    // se você acha que somente as afirmativas 
    // 1 e 4 do enunciado estão corretas, retorne 5
}