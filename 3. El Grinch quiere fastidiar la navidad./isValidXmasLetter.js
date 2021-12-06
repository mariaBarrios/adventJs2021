function isValidXmasLetter(letter) {

  const regex1 = /[\{\}\[\]]/g;
  const regex2 = /\(([^()]*[^()]*)\)/g;

  if (regex1.test(letter)) return false;
  if (letter.includes('()')) return false;
  if (!letter.match(regex2)) return false;

  return true;
}
