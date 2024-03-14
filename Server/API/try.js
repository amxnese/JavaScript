async function fetchData() {
  try {
    // Simulating an asynchronous operation, like fetching data from an API
    const data = await fetch("https://api.example.com/data");
    const json = await data.json();
    return json;
  } catch (error) {
    // If an error occurs during the above operations, it will be caught here
    console.error("Error fetching data:", error);
    throw error; // Optionally, re-throw the error to handle it in the calling function
  }
}

// Example usage:
async function processData() {
  try {
    const result = await fetchData();
    console.log("Data fetched successfully:", result);
    // Process the data further if needed
  } catch (error) {
    console.error("Error processing data:", error);
    // Handle the error gracefully, e.g., display an error message to the user
  }
}

processData();
