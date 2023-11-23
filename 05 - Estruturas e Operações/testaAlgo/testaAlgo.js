function testaAlgo(list, str) {
    if (list.length === 0) {
        return false;
    }
    if (list[0] === str) {
        return true;
    }
    return testaAlgo(list.slice(1), str);
}

function testaAlgoSemRecursao(list, str) {
		return list.some(value => value === str);
}