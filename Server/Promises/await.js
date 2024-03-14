/* async and await are features that provide a more concise and readable way to work with asynchronous code,
particularly Promises. They make asynchronous code look and behave more like synchronous code,
which can improve code readability and maintainability.*/

/* 
1) async function declaration:

The async keyword is used to declare a function as asynchronous.
An async function always returns a Promise. If the function explicitly returns a value, the Promise will be resolved
with that value. If the function throws an error or exception, the Promise will be rejected with that error.
*/

async function fetchData() {
  return await someAsyncOperation(); // Can use await only inside async functions
}

/*
2) await expression:

The await keyword is used to wait for a Promise to resolve.
It can only be used inside an async function.
When await is used, it pauses the execution of the async function until the Promise is resolved, 
and then it returns the resolved value.
If the Promise is rejected, it throws an error that can be caught using try...catch.
*/

async function example() {
  try {
      const result = await fetchData(); // Pauses execution until fetchData() Promise resolves
      console.log(result);
  } catch (error) {
      console.error(error);
  }
}





