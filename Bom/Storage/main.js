// Getting The Three li's
let list = document.querySelectorAll("li");

// Getting The div
let div = document.querySelector("div");

// Getting The Buttons
let localButton = document.querySelectorAll("button")[0];
let sessionButton = document.querySelectorAll("button")[1];
let clearButton = document.querySelectorAll("button")[2];

// Adding an Event Listener To The Save To Local Button
localButton.addEventListener("click", () => {
  window.localStorage.setItem("color", div.style.backgroundColor);
  window.sessionStorage.clear();
});

// Adding an Event Listener To The Save To Session Button
sessionButton.addEventListener("click", () => {
  window.sessionStorage.setItem("color", div.style.backgroundColor);
  window.localStorage.clear();
});

// Adding an Event Listener To The Clear Button
clearButton.addEventListener("click", () => {
  window.sessionStorage.clear();
  window.localStorage.clear();
  location.reload();
});

// Checking if The Local Storage Already has a Color Key
if (window.localStorage.getItem("color")) {
  div.style.backgroundColor = window.localStorage.getItem("color");
} else if (window.sessionStorage.getItem("color")) {
  div.style.backgroundColor = window.sessionStorage.getItem("color");
}

// Adding Event Listeners To Each li
list.forEach((element) => {
  element.addEventListener("click", () => {
    div.style.backgroundColor = element.classList.value;
  });
});
