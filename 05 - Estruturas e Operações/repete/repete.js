function repete(x, count, array = []) {
  if (count === 0) return array;
  array.push(x);
  return repete(x, count - 1, array);
}