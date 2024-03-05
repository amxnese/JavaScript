// Getting The Three li's
let list = document.querySelectorAll("li");

// Getting The div
let div = document.querySelector("div");

// Checking if The Local Storage Already has a Color Key
if (window.localStorage.getItem("color")) {
  div.style.backgroundColor = window.localStorage.getItem("color");
}

// Adding Event Listeners To Each li
list.forEach((element) => {
  element.addEventListener("click", () => {
    window.localStorage.setItem("color", element.classList.value);
    div.style.backgroundColor = window.localStorage.getItem("color");
  });
});
