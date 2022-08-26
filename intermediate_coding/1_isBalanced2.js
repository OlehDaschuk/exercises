const isBalanced2 = (str) => {
  const stack = [];

  for (const s of [...str]) {
    if (/\(|\{|\[/.test(s)) {
      stack.push(s);
    } else if (/\)|\}|\]/.test(s)) {
      if (stack.at(-1) === "(" && s !== ")") return false;
      if (stack.at(-1) === "{" && s !== "}") return false;
      if (stack.at(-1) === "[" && s !== "]") return false;

      if (!stack.pop()) return false;
    }
  }

  return !stack.length;
}; // true // false // false

console.log(isBalanced2("(foo { bar (baz) [boo] })"));
console.log(isBalanced2("foo { bar { baz }"));
console.log(isBalanced2("foo { (bar [baz] } )"));

// Some random tests
// console.log(isBalanced2("") === true);
// console.log(isBalanced2("()") === true);
// console.log(isBalanced2(")()") === false);
// console.log(isBalanced2(")(") === false);
// console.log(isBalanced2("()(()()()())") === true);
// console.log(isBalanced2("[](){}") === true);
// console.log(isBalanced2("[({})]") === true);
// console.log(isBalanced2("[(]{)}") === false);
// console.log(isBalanced2("const sth = () => { animal.sleep();") === false);
// console.log(isBalanced2("const sth = { bark: animal() }") === true);
