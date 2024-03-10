let obj = {
  a: 1,
  b: 2,
};

// Adding a Property To The obj
Object.defineProperty(obj, "c", {
  value: 3,
  writable: true, // Permission To Change The Property Value, false by default
  enumerable: true, // Including The Property When Looping Through The Object, false by default
  configurable: true, // Permission To Change and Delete The Property, false by default
});

console.log(obj.c); // 3

// Adding Multiple Properties
Object.defineProperties(obj, {
  d: {
    value: 4,
    writable: true,
  },
  e: {
    value: 5,
  },
  f: {
    value: 6,
  },
});

console.log(obj); // a : 1, ..., f : 6

// Getting Descriptors of a property in an object
console.log(Object.getOwnPropertyDescriptor(obj, "c")); // configurable: true ... writable: true
