function mirror(root) {
   if (!root) return null;
   
   const left = root.right;
   const right = root.left;
   root.left = left;
   root.right = right;
   mirror(root.left);
   mirror(root.right);
}