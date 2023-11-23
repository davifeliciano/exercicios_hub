function listBranchSums(root) {
  const sums = [];
  
  function helper(node, sum = 0) {
    sum += node.value;
    
    if (!node.left && !node.right) {
      sums.push(sum);
      return;
    }
    
    node.left && helper(node.left, sum);
    node.right && helper(node.right, sum);
  }
  
  helper(root);
  return sums;
}