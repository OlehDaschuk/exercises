function isBalanced(str) {
  const stack = [];

  for (const s of [...str]) {
    if (s === "{") {
      stack.push("{");
      console.log(s);
    } else if (s === "}") {
      if (!stack) return false;
      stack.pop();
    }
  }
  return true;
} // false // false // false // true // false // false

console.log(isBalanced("}{"));
console.log(isBalanced("{{}"));
console.log(isBalanced("{}{}"));
console.log(isBalanced("foo { bar { baz } boo }"));
console.log(isBalanced("foo { bar { baz }"));
console.log(isBalanced("foo { bar } }"));
