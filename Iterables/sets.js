// a Set is The Same as an Array except That it Takes No Duplicates and Not index Based
let mySet = new Set([1, 1, 2, 2, 3, 3]);
console.log(mySet); // [1,2,3]

// Size of a Set
console.log(mySet.size);

// Adding To A set
mySet.add(4);

// Deleting From a Set
mySet.delete(4);

// Checking if a Value Exists in a Set
console.log(mySet.has(2)); // true

// Getting a Set Iterator Using Keys
let iterator = mySet.keys()
console.log(iterator.next().value) // 1
console.log(iterator.next().value) // 2
console.log(iterator.next().value) // 3
console.log(iterator.next()) // done = true

// Clearing a Set
mySet.clear();