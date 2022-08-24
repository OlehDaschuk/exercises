let a = Promise.resolve("a");
let b = Promise.resolve("b");
let c = Promise.resolve("c");

const seq = (arr) => {
  return arr.map((p) => p.then((res) => res));
};
a = a.then((el) => (a = el));
console.log(a);
