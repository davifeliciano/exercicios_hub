function somaTotal(lst){
  return lst.reduce((totalSum, arr) => {
    return totalSum + arr.reduce((acc, val) => acc + val, 0)
  }, 0);
}

function complexidadeDeTempo(){
    return "O(n*m)";
}