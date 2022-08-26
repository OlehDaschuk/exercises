function isBalanced(str) {
  const stack = [];

  for (const s of [...str]) {
    if (s === "{") {
      stack.push("{");
    } else if (s === "}") {
      if (!stack.length) return false;

      stack.pop();
    }
  }
  return !stack.length;
} // false // false // true // true // false // false

console.log(isBalanced("}{"));
console.log(isBalanced("{{}"));
console.log(isBalanced("{}{}"));
console.log(isBalanced("foo { bar { baz } boo }"));
console.log(isBalanced("foo { bar { baz }"));
console.log(isBalanced("foo { bar } }"));
