function pokemons (
  pokemons,
  candies,
  evolutionPrice,
  pokemonPrice
) {
  const evolvedPokemons = Math.floor(candies / evolutionPrice);
  const candiesLeft = candies % evolutionPrice;
  const pokemonsLeft = pokemons - evolvedPokemons;
  
  
}