function bstFindPath(root, value) {
  if (root === null) return [];
  if (value === root.value) return [root.value];
  
  const subPath = bstFindPath(
    value < root.value ? root.left : root.right,
    value
  );
  
  if (subPath.length === 0) return [];
  
  subPath.push(root.value);
  return subPath;
}
