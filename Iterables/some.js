/* The some() method in JavaScript is a useful array method that checks whether at least one element 
in the array satisfies a given condition. It iterates over each element in the array and returns true
if the callback function returns true for any of the elements; otherwise, it returns false. */

// Syntax : array.some(callbackFunction(element, index, array), thisArg)

/* 
callbackFunction: A function to test each element of the array. It receives three arguments:
  element: The current element being processed in the array.
  index (Optional): The index of the current element being processed.
  array (Optional): The array some() was called upon.
thisArg (Optional): A value to use as this when executing the callback function.

The some() method returns true if the callback function returns true for at least one element in the array;
otherwise, it returns false.
*/

const numbers = [1, 2, 3, 4, 5];

// Check if any element is greater than 3
const hasGreaterThanThree = numbers.some(element => element > 3);
console.log(hasGreaterThanThree); // Output: true

// Check if any element is negative
const hasNegative = numbers.some(element => element < 0);
console.log(hasNegative); // Output: false

// Using a function as a callback
function isEven(number) {
  return number % 2 === 0;
}
const hasEvenNumber = numbers.some(isEven);
console.log(hasEvenNumber); // Output: true

// Using some on array of objects
const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

const hasAdult = people.some(person => person.age >= 18);
console.log(hasAdult); // Output: true

const hasTeenager = people.some(person => person.age >= 13 && person.age <= 19);
console.log(hasTeenager); // Output: true
