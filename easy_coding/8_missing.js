const missing = (arr) => {
  const fullArr = Array.from({ length: Math.max(...arr) }, (_, i) => i + 1);
  const missedNumber =
    fullArr.reduce((acc, n) => acc + n, 0) - arr.reduce((acc, n) => acc + n, 0);
  return missedNumber ? missedNumber : undefined;
}; // undefined // 2 // 1 // 3 // undefined

console.log(missing([]));
console.log(missing([1, 4, 3]));
console.log(missing([2, 3, 4]));
console.log(missing([5, 1, 4, 2]));
console.log(missing([1, 2, 3, 4]));
