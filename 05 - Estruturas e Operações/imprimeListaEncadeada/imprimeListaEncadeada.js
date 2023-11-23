function imprimeListaEncadeada(list) {
    if (list === null) {
        return;
    }

    if (list.hasOwnProperty("head")) {
        imprimeListaEncadeada(list.head);
        return;
    }

    imprimeListaEncadeada(list.next);
    console.log(list.value);
}