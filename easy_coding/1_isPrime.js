const isPrime = (num) => {
  const sqrtOfNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtOfNum; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}; // false // false // true // false

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(17));
console.log(isPrime(10000000000000));
