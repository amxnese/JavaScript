// Function To Generate Random Integer
function getRandomInt(min = 0, max = 2) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creating a Promise, a Promise Takes Two Functions as a Parameter, A Function That Will Run in The Resolved Case,
// And One That Will Run in The Rejected Case
const p = new Promise((resolve, reject) => {
  const rand = getRandomInt();
  if (rand === 1) {
    resolve("Resolved"); // When We Call Those Functions,
  } else {
    reject("Rejected"); // Passing Arguments Depends on How We Will Define Those Funcs in 'then'
  }
});

p.then(
  (msg) => console.log(`This is From then, ${msg}`) // Resolved Case, msg Here Will Be What We Passed To The resolve Func in Line 11
).catch((msg) => console.log(`This is From catch, ${msg}`)); // Rejected Case, msg Here ... in Line 13

// or We Can Just Pass Two Functions To 'then' And it Will Assume That The First Passed One is The Resolved Case
// Function And The Second is The Failure Case Function
/* p.then(
  (msg) => console.log(`All Good, ${msg}`),
  (msg) => console.log(`Something Went Wrong, ${msg}`)
); */

/* 
Output: 
  Resolved Case : This is From then, Resolved
  Failure Case : This is From catch, Rejected
*/
