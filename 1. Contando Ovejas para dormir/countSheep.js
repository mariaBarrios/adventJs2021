export default function countSheep(ovejas) {
  const regexA = /a/i;
  const regexN = /n/i;

  const ovejasFiltradas = ovejas.filter((oveja) => {
    const { name, color } = oveja;
    return color === "rojo" && regexA.test(name) && regexN.test(name);
  });

  return ovejasFiltradas;
}

console.log(
  contarOvejas([
    { name: "Noa", color: "azul" },
    { name: "Euge", color: "rojo" },
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
  ])
);

