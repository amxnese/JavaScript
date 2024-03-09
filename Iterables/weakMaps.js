/* WeakMap is a built-in data structure similar to Map, but with some key differences.
While Map allows keys to be of any type, including primitive types and objects,
WeakMap only accepts objects as keys. The values can be of any type. The main feature of WeakMap 
is that it holds weak references to its keys, meaning that if the only reference to a key is from 
the WeakMap itself, the key is eligible for garbage collection.*/

// Create a new WeakMap
let myWeakMap = new WeakMap();

// Create some objects
let object1 = { one: 1 };
let object2 = { two: 2 };

// Set key-value pairs
myWeakMap.set(object1, "object one");
myWeakMap.set(object2, "object two");

// Get value by key
console.log(myWeakMap.get(object1)); // Output: object one

// Check if a key exists
console.log(myWeakMap.has(object2)); // Output: true

// Delete a key-value pair
myWeakMap.delete(object1);

// Setting obj2 to null
object2 = null; // Since The obj2 in The WeakMap Has No Longer any Reference it is eligible for garbage collection
