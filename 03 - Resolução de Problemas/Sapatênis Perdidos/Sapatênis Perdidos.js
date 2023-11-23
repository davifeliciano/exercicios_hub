function formarPar (array) {
  
  const result = [];
  const lotes = [...array];
  
  for (const sapatos of lotes) {
    let pares = 0;
    
    while (sapatos.length !== 0) {
      const [tamanho, pe] = sapatos[0].split(" ");
      sapatos.splice(0, 1);
      
      const index = sapatos.findIndex((par) => {
        const [tamanhoPar, pePar] = par.split(" ");
        if (tamanhoPar === tamanho && pePar !== pe) {
          return true
        }
        return false
      })
      
      if (index !== -1) {
        sapatos.splice(index, 1);
        pares++;
      }
    }
    
    result.push(pares);
  }
  
  return result;
}