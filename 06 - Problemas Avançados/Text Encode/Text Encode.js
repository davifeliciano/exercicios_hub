let key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getCipher(char) {
  // Given a char, return the ciphered char and
  // update the key
  char = char.toUpperCase();
  const index = key.indexOf(char);
  const cipherIndex = (index + 1) % key.length;
  const chipheredChar = key[cipherIndex];
  key = char + key.replace(char, "");
  return chipheredChar.toLowerCase();
}

function textEncode(str) {
  let cipheredStr = [];
  for (const char of str) {
    cipheredStr += getCipher(char);
  }
  return cipheredStr;
}