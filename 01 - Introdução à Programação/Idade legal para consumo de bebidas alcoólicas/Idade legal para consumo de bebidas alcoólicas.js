//Programa ai
function isLegal(age, country) {
  const legalDrinkAges = {
    "brasil": 18,
    "eua": 21,
    "paraguai": 20,
    "jamaica": 16,
    "ira": Infinity,
    "armenia": 0,
  }
  if (age > legalDrinkAges[country]) return true;
  return false
}