const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise");
  }, 2000);
});

async function read() {
  console.log("Before Promise");
  console.log(await myPromise); 
  console.log("After Promise"); 
}
read();

// Notice That the await did the work of then() also