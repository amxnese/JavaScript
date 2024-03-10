/* The every() method in JavaScript is used to check whether all elements in an array pass a 
particular condition. It iterates through each element of the array and returns true if the provided 
callback function returns true for every element, otherwise, it returns false. */

// Syntax : array.every(callback(element, index, array), thisArg)
/*
callback: A function to test for each element. It takes three arguments:
element: The current element being processed in the array.
index (Optional): The index of the current element being processed in the array.
array (Optional): The array every() was called upon.
thisArg (Optional): A value to use as this when executing the callback function.
*/

const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every(function(num) {
  return num % 2 === 0;
});

console.log(allEven); // Output: true
