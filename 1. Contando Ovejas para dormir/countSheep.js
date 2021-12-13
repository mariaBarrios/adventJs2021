module.exports = function countSheep(ovejas) {
  const regex = [/a/i, /n/i];

  const ovejasFiltradas = ovejas.filter((oveja) => {
    const { name, color } = oveja;
    return color === "rojo" && regex.every(r => r.test(name))
  });

  return ovejasFiltradas;
};
