function isValidXmasLetter(letter) {
  const regex1 = /[\{\}\[\]]/g;
  const regex2 = /\(([^()]*[^()]*)\)/g;

  if (regex1.test(letter)) return false;
  if (letter.includes("()")) return false;
  if (!letter.match(regex2)) return false;

  return true;
}

console.log(
  "bici coche (balón) bici coche peluche: ",
  isValidXmasLetter("bici coche (balón) bici coche peluche") 
); //true

console.log(
  "(muñeca) consola bici:",
  isValidXmasLetter("(muñeca) consola bici")
); //true

console.log(
  "bici coche (balón bici coche:",
  isValidXmasLetter("bici coche (balón bici coche")
); //false

console.log(
  "peluche (bici [coche) bici coche balón:",
  isValidXmasLetter("peluche (bici [coche) bici coche balón")
); //false

console.log("(peluche {) bici:", isValidXmasLetter("(peluche {) bici")); //false
console.log("() bici:", isValidXmasLetter("() bici")); //false
