//Programa ai
function corDoArcoIris(cor) {
  switch (cor.toLowerCase()) {
    case 'vermelho':
      return 1;
      break;
    
    case 'laranja':
      return 2;
      break;
    
    case 'amarelo':
      return 3;
      break;
    
    case 'verde':
      return 4;
      break;
    
    case 'azul':
      return 5;
      break;
    
    case 'anil':
      return 6;
      break;
    
    case 'violeta':
      return 7;
      break;
    
    default:
      return "Não é uma cor do arco-íris";
  }
}