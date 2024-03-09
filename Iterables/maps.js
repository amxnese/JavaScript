/* Map is a built-in data structure that allows you to store key-value pairs where both the
keys and the values can be of any data type, including objects or primitive values. 
This makes it different from objects in JavaScript, where keys are always strings or symbols.*/

// Create a new Map
let myMap = new Map();

// Set key-value pairs
myMap.set("name", "John");
myMap.set(1, "One");
myMap.set({ key: "obj" }, "Value of object key");
myMap.set(function Hi() {
  console.log("hi");
}, "Value of function key");

// Get value by key
console.log(myMap.get("name")); // Output: John

// Check if a key exists
console.log(myMap.has(1)); // Output: true

// Get size of the Map
console.log(myMap.size); // Output: 4

// Iterate through the Map
myMap.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

// Delete a key-value pair
myMap.delete("name");

// Clear all key-value pairs
myMap.clear();
