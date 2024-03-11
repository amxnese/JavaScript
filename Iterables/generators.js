/* generators are special functions that can pause and resume their execution, allowing 
for more efficient handling of asynchronous code and iteration over sequences of data. 
They are denoted by using the function* */

// 

// Creating a Generator Using an Infinite While Loop
function* countGenerator() {
  let count = 0;
  while (true) {
    yield count++;
  }
}
/* In this example, countGenerator is a generator function that generates an infinite sequence
of numbers starting from 0. The yield keyword is used to pause the execution of the function and
return a value (count in this case). When next() is called on the generator object (counter), 
the function execution resumes from where it was paused. */

const counter = countGenerator();

console.log(counter.next().value); // Output: 0
console.log(counter.next().value); // Output: 1
console.log(counter.next().value); // Output: 2

/* Here's an example of using a generator with an iterator: */
function* iterateArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

const myArray = [1, 2, 3, 4, 5];
const myIterator = iterateArray(myArray);

for (const value of myIterator) {
  console.log(value);
}
// Output:
// 1
// 2
// 3
// 4
// 5


/* you can use delegation with generator functions to compose multiple generators together, allowing 
for more reusable code. Here's an example of how to delegate one generator to another */
function* generator1() {
  yield 'a';
  yield 'b';
  yield 'c';
}

function* generator2() {
  yield 'x';
  yield* generator1(); // Delegation to generator1
  yield 'y';
}

const gen = generator2();

console.log(gen.next().value); // Output: 'x'
console.log(gen.next().value); // Output: 'a'
console.log(gen.next().value); // Output: 'b'
console.log(gen.next().value); // Output: 'c'
console.log(gen.next().value); // Output: 'y'
console.log(gen.next().value); // Output: undefined (generator completed)

// We Can Stop The Generator From Yielding By Using gen.return()




