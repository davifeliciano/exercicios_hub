function range(start, end) {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
}

function figurinhasFaltantes(n, lst) {
  return range(1, n).filter(num => !lst.includes(num));
}