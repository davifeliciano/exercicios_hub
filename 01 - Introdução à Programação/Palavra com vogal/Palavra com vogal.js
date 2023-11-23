//Programa ai!
function retornaPalavra(char) {
  switch (char.toLowerCase()) {
    case 'a':
      return "Antigo";
      break;
    
    case 'e':
      return "Espécime"
      break;
    
    case 'i':
      return "Ilíada"
      break;
    
    case 'o':
      return "Odissaia"
      break;

    case 'u':
      return "Universal"
      break;
        
    default:
      return "Não é vogal"
  }
}