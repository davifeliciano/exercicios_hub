//Programa ai!
const legalDrinkAges = {
  brasil: {"": 18},
  eua: {"": 21},
  paraguai: {"": 20},
  jamaica: {"": 16},
  ira: {"": Infinity},
  armenia: {"": 0},
  portugal: {"cerveja": 16, "vinho": 16, "": 21},
  egito: {"cerveja": 18, "": 21},
}

function isLegal(age, country, drink = "") {
  const legalDrinkAge = legalDrinkAges[country][drink];
  if (legalDrinkAge === undefined) return null;
  if (age >= legalDrinkAge) return true;
  return false;
}