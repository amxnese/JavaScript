let list = ["one", "two", "three", "four"];

let [a, b, c, d] = list;
console.log(a); // one
console.log(b); // two
console.log(c); // three
console.log(d); // four

let a1 = 1;
let b1 = 2;
let c1 = 3;
let d1 = 4;
[a1, b1, c1] = list;
console.log(a1); // one
console.log(b1); // two
console.log(c1); // three
console.log(d1); // 4

// Default Values
[a1, b1, c1, d1 = "four"] = list;
console.log(a1); // one
console.log(b1); // two
console.log(c1); // three
console.log(d1); // four

// Skiping
let [x, , y, z] = list;
console.log(x); // one
console.log(y); // three
console.log(z); // four

let list1 = [1, 2, 3, [4, 5, [6, 7, 9]]];
// Getting 4 and 7
let [, , , [x1, , [, y1]]] = list1;
console.log(x1); // 4
console.log(y1); // 7

// Swapping Two Values
let num = "hi";
let word = 4;
[num, word] = [word, num];
console.log(num); // 4
console.log(word); // hi
