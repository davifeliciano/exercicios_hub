function bstFind(root, value) {
  if (root === null) return null;
  if (root.value === value) return root;
  if (root.value > value) return bstFind(root.left, value);
  if (root.value < value) return bstFind(root.right, value);
}
