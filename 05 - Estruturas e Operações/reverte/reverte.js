function reverte(array, index = 0) {
  if (index > array.length - index - 1) return;
  [array[index], array[array.length - index - 1]] = [
    array[array.length - index - 1], array[index]
  ];
  reverte(array, index + 1);
}