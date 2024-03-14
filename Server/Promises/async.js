const admins = ["mark", "steve"];
async function checkUsers() {
  if (admins.length < 3) {
    return "Valid Admins Number";
  } else {
    throw new Error("Invalid Number of Admins");
  }
}

checkUsers()
  .then((res) => console.log("resolved", res))
  .catch((rej) => console.log("rejected", rej));
