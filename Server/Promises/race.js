/* Promise.race(): If we have multiple promises and we want to take action as soon as any one of them 
resolves or rejects, we can use Promise.race(). It takes an array of promises and returns a single promise 
that resolves or rejects as soon as one of the input promises resolves or rejects. */

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
    }, 1000);
  });
}

/* we want to execute both functions but only want to use the result of the one that completes first. 
we can use Promise.race() for this purpose: */

const myPromises = [asyncOperation1(), asyncOperation2()]
Promise.race(myPromises)
  .then((result) => {
    console.log("The first operation completed successfully!");
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
