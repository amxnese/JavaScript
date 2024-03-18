const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise");
  }, 2000);
});

async function read() {
  console.log("Before Promise");
  console.log(await myPromise); // Waits for the promise to resolve
  console.log("After Promise"); 
}
read();

// Note:
//    await myPromise === myPromise.then((response) => {response})