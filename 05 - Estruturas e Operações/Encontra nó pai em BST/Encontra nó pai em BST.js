function bstFindParent(root, value) {
  if (root === null) return;
  if (root.value === value) return;
  if (
    (root.left && root.left.value === value) ||
    (root.right && root.right.value === value)
  ) return root.value;
  
  if (root.value > value) return bstFindParent(root.left, value);
  if (root.value < value) return bstFindParent(root.right, value);
}
