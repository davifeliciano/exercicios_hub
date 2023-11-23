function listFirstCopy(bookshelf){
  const positionMap = new Map();
  
  bookshelf.forEach((book, position) => {
    if (positionMap.has(book)) return;
    positionMap.set(book, position);
  });
  
  return bookshelf.map(book => positionMap.get(book));
}