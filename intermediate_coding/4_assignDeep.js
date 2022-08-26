const assignDeep = (obj, objAssign) => {
  for (const k in obj) {
    if (obj[k] instanceof Object || objAssign[k] instanceof Object) {
      assignDeep(obj[k], objAssign[k]);
    }
  }

  return Object.assign(obj, objAssign);
}; // { a: 1 } // { a: 2 } // { a: { b: 2 } } // { a: { b: { c: 1, d: 2 }}, e: 3 }

console.log(assignDeep({ a: 1 }, {}));
console.log(assignDeep({ a: 1 }, { a: 2 }));
console.log(assignDeep({ a: 1 }, { a: { b: 2 } }));
console.log(assignDeep({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } }, e: 3 }));
