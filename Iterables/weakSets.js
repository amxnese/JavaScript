/* A WeakSet is a collection of objects where object references are held weakly. 
This means that if there are no other references to an object stored in a WeakSet,
it becomes eligible for garbage collection. Like sets, WeakSets only allow storing unique objects. 
However, unlike regular sets, WeakSets only accept objects as elements, not primitives.*/

// Create a new WeakSet
let weakSet = new WeakSet();

// Create some objects
let obj1 = { name: "object 1" };
let obj2 = { name: "object 2" };
let obj3 = { name: "object 3" };

// Add objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// Check if an object is in the WeakSet
console.log(weakSet.has(obj1)); // Output: true

// Remove an object from the WeakSet
weakSet.delete(obj1);

// Check if the object is still in the WeakSet
console.log(weakSet.has(obj1)); // Output: false
