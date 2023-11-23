function contaSalgado (arr) { 
  const indexTarde = arr.indexOf("T");
  const notasManha = arr.slice(2, indexTarde);
  const totalManha = [0, 0, 0];
  
  notasManha.forEach((nota) => {
    const [quantVendida, salgado] = nota.split(" ");
    if (salgado === "C") totalManha[0] += parseInt(quantVendida);
    if (salgado === "R") totalManha[1] += parseInt(quantVendida);
    if (salgado === "P") totalManha[2] += parseInt(quantVendida);
  })
  
  return totalManha;
}