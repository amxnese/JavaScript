let names = ["amine", "osama", "mohamed", "hichame"];

// Adding Elements To The Beginning of The Array
names.unshift("james", "david");

// Adding Elements To The End of The Array
names.push("steve", "elon");

// Removing an Element From The Begining of The Array and Returning it
let firstName = names.shift();

// Removing an Element From The End of The Array and Returning it
let lastName = names.pop();

console.log(names.length); // 4 + 2 + 2 - 1 - 1 = 6
console.log(firstName); // james
console.log(lastName); // elon

// Changing The Value of The First Element
names[0] = "chris";

// Changing The Value of The Last Element
names[names.length - 1] = "chris";

// When Searching For The index of an Element That is Not Available in The Array The Searching Function Will Return -1
console.log(names.indexOf("ivan")); // -1

// Getting The Index of a Specific Element Starting The Search From The Begining
console.log(`index of 'chris' is ${names.indexOf("chris")}`); // 0

// Getting The Index of a Specific Element Starting From The End
console.log(`index of 'chris' is ${names.lastIndexOf("chris")}`); // 5

// Checking if an Element is Avaialble in The Array
console.log(names.includes("jay")); // false

// Sorting an Array Alphabetically
names.sort();

// Reversing an Array
names.reverse();

// Creating a Slice From The Array
console.log(names); // ["osama", "mohamed", "hichame", "chris", "chris", "amine"]
console.log(names.slice((start = 1), (endd = 4))); // ["mohamed","hichame","chris"]

// Splice Function
names.splice(0, 2, "frank", "tommy"); // Returns The Deleted Elements
console.log(names); // ["frank","tommy","hichame","chris","chris","amine"]

// Concatenating Arrays
let arr = ["white", "blue"];
let arr1 = ["Fridge", "sky"];
let arr2 = ["cold", "high"];
let all = arr.concat(arr1, arr2);
console.log(all); // ["white","blue","Fridge","sky","cold","high"]

// Joining Arrays
console.log(all.join((default_seperator = ","))); // white,blue,Fridge,sky,cold,high
