module.exports = function containsItem(store, product) {
  return Object.values(store).some((item) => {
    if (item === product) return true;
    if (store === Object(store)) return containsItem(item, product);
  });
};
