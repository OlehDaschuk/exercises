const uniq = (arr) => [...new Set(arr)]; // [] // [1, 4, 2, 3, 8]

console.log(uniq([]));
console.log(uniq([1, 4, 2, 2, 3, 4, 8]));
