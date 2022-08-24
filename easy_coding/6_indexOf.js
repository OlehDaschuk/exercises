const indexOf = (arr, target) => {
  return arr.reduceRight((acc, el, i) => (el === target ? i : acc), -1);
}; // 0 // -1

console.log(indexOf([1, 2, 3], 1));
console.log(indexOf([1, 2, 3], 4));
