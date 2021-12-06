function giftsList(letter) {
  const gifts = letter
    .trim()
    .replace(/ +/g, " ")
    .split(" ")
    .filter((letter) => {
      const regex = /_/i;
      return !regex.test(letter);
    });

  const giftList = {};
  gifts.forEach((gift) => {
    if (giftList[gift]) {
      giftList[gift]++;
    } else {
      giftList[gift] = 1;
    }
  });

  return giftList;
}

console.log(giftsList(" bici coche balón _playstation bici coche  peluche"));
