// Define the API endpoint
const usersUrl = "https://reqres.in/api/users?page=2";
const userUrl = "https://reqres.in/api/users/2";
const createUrl = "https://reqres.in/api/users";

// Make a GET request, Listing all Users
axios
  .get(usersUrl)
  .then((response) => {
    // Handle successful response
    console.log("Data received:", response.data);
  })
  .catch((error) => {
    // Handle error
    console.error("Error fetching data:", error);
  });

// Listing a Single User
axios.get(userUrl).then((response) => {
  console.log("user: ", response.data);
});

// posting
function createUser(name, job) {
  const data = {
    name: name,
    job: job,
  };
  axios
    .post(createUrl, data)
    .then((response) => {
      console.log(response.data);
      div = document.createElement("div");
      div.innerHTML = `<h3>name: ${response.data.name} /
      job: ${response.data.job} / id: ${response.data.id} /
      created at: ${response.data.createdAt}</h3>`;
      document.body.append(div);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

createUser("amine", "leader");
createUser("mouad", "developer");
createUser("sami", "analyst");
