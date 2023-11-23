function find(root, value) {
  if (!root) return null;
  if (root.value === value) return root;
  const left = find(root.left, value);
  return left ?? find(root.right, value);
}
