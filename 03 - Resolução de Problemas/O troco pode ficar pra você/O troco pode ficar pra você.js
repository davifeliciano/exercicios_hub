function listaCompras (items, prices, budget) {
  
  let budgetLeft = budget;
  const itemsToBuy = [];
  let itemsLeft = [...items];
  let pricesLeft = [...prices];
  
  while (true) {
    const index = pricesLeft.findIndex((price) => price <= budgetLeft);
    if (index === -1) return itemsToBuy;
    budgetLeft -= pricesLeft[index];
    itemsToBuy.push(itemsLeft[index]);
    itemsLeft = itemsLeft.slice(index + 1);
    pricesLeft = pricesLeft.slice(index + 1);
  }
}