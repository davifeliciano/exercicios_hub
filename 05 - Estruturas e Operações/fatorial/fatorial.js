function fatorial(n) {
  if (n < 0) return;
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
}