const fib = (num) => {
  let [fibNum, next] = [0, 1];
  while (num--) [fibNum, next] = [next, fibNum + next];
  return fibNum;
}; // 0 // 1 // 55 // 6765

console.log(fib(0));
console.log(fib(1));
console.log(fib(10));
console.log(fib(20));
