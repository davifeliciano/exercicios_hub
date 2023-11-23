function bstMinGreaterThan(root, cutoff) {
  if (root === null) return -1;
  
  const value = root.value;
  
  if (value > cutoff) {
    if (root.left === null || root.left <= cutoff)
      return value;
    
    return bstMinGreaterThan(root.left, cutoff);
  }
  
  return bstMinGreaterThan(root.right, cutoff);
}
