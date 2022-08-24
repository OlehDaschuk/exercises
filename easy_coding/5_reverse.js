const reverse = (str) => [...str].reduceRight((acc, l) => acc + l, ""); // '' // 'fedcba'

console.log(reverse(""));
console.log(reverse("abcdef"));
