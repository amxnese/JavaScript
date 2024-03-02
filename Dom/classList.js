let myElement = document.querySelector(".container");
// Getting The classList length
console.log(myElement.classList.length);
// indexing The classList Elements
console.log(myElement.classList.item("0"));
// Checking if a Class Exists
console.log(myElement.classList.contains("container"));
// Adding a Class To classList
myElement.classList.add("div");
// Deleting a Class From a classList
myElement.classList.remove("div");
// Toggling a Class, Remove if Exists else Add
myElement.classList.toggle("main");
