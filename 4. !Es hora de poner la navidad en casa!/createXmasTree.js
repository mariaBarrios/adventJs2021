function createXmasTree(height) {
  let tree = "";

  for (let i = 0; i < height; i++) {
    const air = height - i - 1;
    const leaves = 2 * i + 1;

    const branch = [
      ...new Array(air).fill("_"),
      ...new Array(leaves).fill("*"),
      ...new Array(air).fill("_"),
      "\n",
    ].join("");

    tree += branch;
  }
  const trunk = [
    ...new Array(height - 1).fill("_"),
    "#",
    ...new Array(height - 1).fill("_")
  ].join("");

  tree += trunk + "\n" + trunk;

  return tree;
}

const input = process.argv[2] ? +process.argv[2] : 1;
console.log(createXmasTree(input));
