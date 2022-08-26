const intersection = (arr1, arr2) => {
  const res = new Set();

  arr2.forEach((el) => {
    if (arr1.indexOf(el) !== -1) res.add(el);
  });
  arr1.forEach((el) => {
    if (arr2.indexOf(el) !== -1) res.add(el);
  });

  return [...res];
}; // [] // [4, 1]

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
console.log(intersection([1, 5, 4, 2], [7, 12]));
