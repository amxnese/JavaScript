const admins = ["mark", "steve"];
// async Functions Return a Promise, normal return replaces the resolve() function, 
// and errors replaces the reject() function
async function checkUsers() {
  if (admins.length < 3) {
    return "Valid Admins Number"; // This Will Get Called By then()
  } else {
    throw new Error("Invalid Number of Admins"); // This Will Get Called By Catch()
  }
}

checkUsers()
  .then((res) => console.log("resolved, ", res)) // resolved, Valid Admins Number
  .catch((rej) => console.log("rejected, ", rej)); // rejected, Error("Invalid Number of Admins")
