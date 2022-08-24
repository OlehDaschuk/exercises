const isSorted = (arr) => {
  console.log(JSON.stringify(arr));
  return JSON.stringify(arr) === JSON.stringify(arr.sort());
}; // true // true // false
// TODO
console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]));
