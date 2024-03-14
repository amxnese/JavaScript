/* Promise.all(): If you have multiple promises and you want to wait for all of them to resolve, 
you can use Promise.all(). It takes an array of promises and returns a single promise that resolves 
when all of the input promises have resolved, or rejects if any of the input promises reject. */

function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Result of asyncOperation1");
    }, 2000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Result of asyncOperation2");
    }, 1500);
  });
}

function asyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Result of asyncOperation3");
    }, 1000);
  });
}

/* We want to execute all three functions concurrently and collect their results. We can use Promise.all()
for this purpose: */

const promises = [asyncOperation1(), asyncOperation2(), asyncOperation3()];
Promise.all(promises)
  .then((results) => {
    console.log("All operations completed successfully!");
    console.log("Results:", results);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

/* In this example, Promise.all() takes an array of promises as input. It returns a new promise that 
resolves when all of the input promises have resolved, or rejects if any of the input promises reject.
Once all three asynchronous operations complete successfully, the .then() callback is executed with an 
array containing the results of each operation. If any of the operations encounters an error, 
the .catch() callback will be triggered with the error.
This allows you to execute multiple asynchronous operations concurrently and handle their results once 
they all complete. */
