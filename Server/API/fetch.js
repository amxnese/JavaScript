/* 
fetch() is a modern JavaScript API for making HTTP requests, typically to retrieve resources from a server.
It provides a more powerful and flexible interface compared to older APIs like XMLHttpRequest (XHR).
fetch() returns a promise that resolves to the Response object representing the response to the request.
*/

fetch("https://api.github.com/users/amxnese/repos") // fetch Function is Promise based
  .then((response) => {
    // Checking if The Response We Got is ok
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the JSON response, json() Function is also Promise Based
  })
  .then((data) => {
    console.log("Data:", data);
    // Process the data further
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

/* In this example:

We call fetch() with the URL of the resource we want to retrieve.
The then() method is used to handle the response asynchronously. We check if the response is successful 
using the ok property of the Response object. If not, we throw an error.
If the response is successful, we parse the JSON content using the json() method of the Response object.
Another then() block handles the parsed JSON data.
If any errors occur during the process, they are caught and handled in the catch() block.*/

/*fetch() can be used with different HTTP methods (GET, POST, PUT, DELETE, etc.) by providing an optional 
configuration object as the second argument. This object allows you to specify additional parameters such
as request headers, request body, etc. */

fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ key: "value" }),
})
  .then((response) => response.json())
  .then((data) => console.log("Data:", data))
  .catch((error) => console.error("Fetch error:", error));
