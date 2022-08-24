const factorial = (n) => (n ? n * factorial(n - 1) : 1); // 1 // 1 // 720

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(6));
