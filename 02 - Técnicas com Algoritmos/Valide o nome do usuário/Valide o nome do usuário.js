function validaNome(hub) {
  let name = hub.perguntaNome().trim();
  while (name.length < 3) {
    name = hub.perguntaNome().trim();
    console.log("Nome inválido, insira no mínimo 3 caracteres");
  }
  return name;
}