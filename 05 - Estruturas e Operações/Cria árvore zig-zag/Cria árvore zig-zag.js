function createZigZag(values, left = true) {
  if (values.length === 0) return null;
  return {
    value: values[0],
    left: left ? createZigZag(values.slice(1), false) : null,
    right: left ? null : createZigZag(values.slice(1)),
  }
}

