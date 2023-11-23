function sumNodeDepths(root) {
  let sum = 0;
  
  function helper(node, depth = 0) {
    if (!node) return;
    helper(node.left, depth + 1);
    helper(node.right, depth + 1);
    sum += depth;
  };
  
  helper(root);
  return sum;
}
