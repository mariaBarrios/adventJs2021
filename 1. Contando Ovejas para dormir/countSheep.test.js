const countSheep = require("./countSheep.js");

describe("countSheep", () =>
  it("cuenta obejas de color rojo con letra N y A", () => {
    const ovejas = [
      { name: "Noa", color: "azul" },
      { name: "Euge", color: "rojo" },
      { name: "Navidad", color: "rojo" },
      { name: "Ki Na Ma", color: "rojo" },
    ];

    const expectedResult = [
      { name: "Navidad", color: "rojo" },
      { name: "Ki Na Ma", color: "rojo" },
    ];

    const ovejasFiltradas = countSheep(ovejas);

    expect(ovejasFiltradas).toStrictEqual(expectedResult);
  }));
