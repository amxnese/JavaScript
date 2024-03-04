// Getting The http Which We're in
console.log(location.href);

// Changing The http Which We're in
let search = document.querySelector("button");
search.addEventListener("click", () => {
  // Getting The Value That We Wrote on The Input Field
  let value = document.querySelector("input").value;
  // Changing The Current http and The Previous page Stays in History
  location.href = `https://${value}.com`;
});

// Gettting The website Name
console.log(location.hostname);

// Getting The Website Name With its Port
console.log(location.host);

// Getting The Protocol
console.log(location.protocol);

// Getting The Hash
console.log(location.hash);

// Reloading The Page
// location.reload(); // Must Use a Condition else The Page Will Keep Reloading

// Accessing a new http and Removing The Current Page From History
// location.replace("https://google.com")

// Accessing a new http Without Removing The Current Page From History
// location.assign("https://pinterest.com")
console.log(location.href);
