function maxDepth(root, depth = 0) {
  if (!root) return depth;
  if (!root.left && !root.right) return depth;
  
  const leftDepth = maxDepth(root.left, depth + 1);
  const rightDepth = maxDepth(root.right, depth + 1);
  return rightDepth > leftDepth ? rightDepth : leftDepth;
}