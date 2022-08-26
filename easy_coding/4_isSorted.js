const isSorted = (arr) => {
  let prev = -Infinity;

  for (const el of arr) {
    if (prev > el) return false;
    prev = el;
  }

  return true;
}; // true // true // false

console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]));
