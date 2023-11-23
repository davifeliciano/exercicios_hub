function bstMax(root) {
  if (root.right === null) return root.value;
  return bstMax(root.right);
}
