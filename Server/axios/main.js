// Define the API endpoint
const usersUrl = "https://reqres.in/api/users?page=2";
const userUrl = "https://reqres.in/api/users/2";
const createUrl = "https://reqres.in/api/users";
const loginUrl = "https://reqres.in/api/login";

// Make a GET request, Listing all Users
function listUsers() {
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
}
listUsers();

// Listing a Single User
function listUser() {
  axios.get(userUrl).then((response) => {
    console.log("user: ", response.data);
  });
}

// Logging in
let token = "";
function login(email, password) {
  return new Promise((resolve) => {
    const info = {
      email: email,
      password: password,
    };
    axios
    .post(loginUrl, info)
    .then((response) => {
      console.log("logged in");
      // Storing The Token
      token = response.data.token;
      resolve();
      })
      .catch((error) => console.log("error: ", error));
  });
}

// posting
function createUser(name, job) {
  const data = {
    name: name,
    job: job,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .post(createUrl, data, config)
    .then((response) => {
      div = document.createElement("div");
      div.innerHTML = `<h3 style="border-radius:10px;padding:5px;background-color:lightblue;display:inline-block;margin:10px">
        name: ${response.data.name} / job: ${response.data.job} / id: ${response.data.id} / created at: ${response.data.createdAt}
      </h3>`;
      document.body.append(div);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Logging in and Creating Users
async function loginAndCreateUsers() {
  // Waiting for The logging so We Don't Create Users With Empty Tokens
  await login("eve.holt@reqres.in", "cityslicka");
  createUser("amine", "leader");
  createUser("mouad", "developer");
  createUser("sami", "analyst");
}

loginAndCreateUsers();
