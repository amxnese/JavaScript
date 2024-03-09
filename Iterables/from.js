// Creating an Array From a String
let myStr = Array.from("hello");
console.log(myStr); // ['h', 'e', 'l', 'l', 'o']

// Modifying Elements Before Adding Them To The Array
console.log(Array.from("12345", (n) => +n + +n)); // [2,4,6,8,10]

// Creating a Set From an Array Than An Array From The Set Using The Spread Operator
console.log([...new Set([1, 1, 2, 2, 3, 3])]); // [1,2,3]