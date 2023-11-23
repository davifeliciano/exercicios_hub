function magica(x) {
    if (x <= 0) return 1;

    return 2 * magica(x - 1);
}

function semMagica(x) {
  if (x <= 0) return 1;
	return 2 ** x;
}