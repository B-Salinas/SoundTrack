// this takes in an array and spits out the
// desired amount with random elements from
// the given array
const listShuffler = (list, numOutput) => {
  if (!list || !list.length) return list;

  const luckyIndices = new Set();
  const result = [];

  while (result.length !== numOutput) {
    const randVal = Math.floor(Math.random() * list.length);

    if (!luckyIndices.has(randVal)) {
      luckyIndices.add(randVal);
      result.push(list[randVal]);
    }
  }

  return result;
};

export default listShuffler;
