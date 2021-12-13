const containsItem = require("./containsItem.js");

describe(
  "containsItem",
  () =>
    it("indica que un item SI se encuentra en el almacen", () => {
      const items = {
        estanteria1: {
          cajon1: {
            producto1: "coca-cola",
            producto2: "fanta",
            producto3: "sprite",
          },
        },
        estanteria2: {
          cajon1: "vacio",
          cajon2: {
            producto1: "pantalones",
            producto2: "camiseta",
          },
        },
      };

      const storageHasItem = containsItem(items, "camiseta");

      expect(storageHasItem).toBe(true);
    }),

  it("indica que un item NO se encuentra en el almacen", () => {
    const items = {
      baul: {
        fondo: {
          objeto: "cd-rom",
          otroObjeto: "disquette",
          otraCosa: "mando",
        },
      },
    };

    const storageHasItem = containsItem(items, "gameboy");

    expect(storageHasItem).toBe(false);
  })
);
