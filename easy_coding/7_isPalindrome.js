const isPalindrome = (str) => {
  str = str.replaceAll(" ", "").toLowerCase();
  return [...str].reverse().join("") === str;
}; // true // true // false // true

console.log(isPalindrome(""));
console.log(isPalindrome("abcdcba"));
console.log(isPalindrome("abcd"));
console.log(isPalindrome("A man a plan a canal Panama"));
