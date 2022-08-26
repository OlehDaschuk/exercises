let a = Promise.resolve("a");
let b = Promise.resolve("b");
let c = Promise.resolve("c");

const seq = (arr) => {
  const result = [];

  arr.forEach(async (p, i) => {
    await p.then((res) => (result[i] = res));
  });

  return result;
}; // ['a', 'b', 'c'] // ['a', 'c', 'b']

(async () => {
  const res1 = await seq([a, b, c]);
  const res2 = await seq([a, c, b]);
  console.log(res1);
  console.log(res2);
})();
