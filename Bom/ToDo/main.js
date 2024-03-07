// Getting All Elements
let container = document.querySelector(".container");
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

// Setting a Counter That Counts The Tasks We Have So When We Create or Remove a Task The Tasks div will be Modified
let counter = 0;

// Delaring The Remove Button Outside of The Function Scope So We Can Access it Later
let removeButton;

// Declaring a Global Event Listener
function GlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    // Checking if The Clicked element Matches The Selector
    if (e.target.matches(selector)) callback();
  });
}

// Function That Creates Div Tasks
function createTask(text) {
  // Creating a Task Div
  let div = document.createElement("div");
  // Creating The Text To Put in Div (The input)
  let str = document.createTextNode(text);
  // Appending The TextNode To The Task Div
  div.append(str);
  // Modifying The Top of Each Task So They Don't be on The Same Position
  let top = 136 + counter * 70;
  // Modifying The Style of The Task Div
  div.style.cssText =
    "background-color: aqua;\
    width: 295px;\
    height: 55px;\
    left: 578px;\
    font-weight: bold;\
    border-radius: 6px;\
    top: " +
    top +
    ";\
    position: fixed;\
    display: flex;\
    justify-content: center;\
    font-size: 30px;\
    align-items: center";

  // Creating The Remove Button
  removeButton = document.createElement("button");
  removeButton.innerHTML = "X";
  removeButton.style.cssText =
    "font-size: 20px;\
    font-weight: bold;\
    width: 40px;\
    height: 35px;\
    margin: 10px;\
    cursor: pointer;\
    border-radius: 5px;\
    background-color: red;\
    position: relative;\
    ";
  // Appending The Remove Button To The Task Div
  div.appendChild(removeButton);
  // Expanding The Div That Contains All Tasks Each Time We Add a New Task
  if (counter) {
    tasks.style.height = parseInt(tasks.offsetHeight) + 69 + "px";
  }
  // Incrementing our Counter To Stay in Track
  counter++;
  return div;
}

add.addEventListener("click", () => {
  // Handling The Case Where The input is Not Valid
  function isValid(variable) {
    if (!(variable) || variable === " ") {
      return false;
    } else {
      return true;
    }
  }
  if (!isValid(input.value)) {
    return;
  }

  // Handling The Case Where The Input is Valid
  // Creating a Task Div
  let task = createTask(input.value);
  // Clearing The Input After Adding The Task
  input.value = "";
  // Appending The Task To The Body
  document.body.appendChild(task);
});

// Adding an Event Listener To add Button
input.addEventListener('keypress' ,(e) => {
  if(e.keyCode === 13){
    console.log("l;af")
    add.click();
  }
})

// Declaring a Global Event Listener Function
function GlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    // Checking if The Clicked element Matches The Selector
    if (e.target.matches(selector)) callback(e);
  });
}

// Adding an Event Listener To The Remove Button Using a Global Event Listener
GlobalEventListener("click", "button", (e) => {
  counter--;
  // Checking if Theres More Than One Task
  if (counter) {
    // Shrinking The Main Task
    tasks.style.height = parseInt(tasks.offsetHeight) - 69 + "px";
    // Modifying The Position of The Tasks That Were Below The Task That Has Been Deleted
    let deleted = e.target.parentNode;
    while (deleted.nextElementSibling) {
      deleted.nextElementSibling.style.top =
        parseInt(deleted.nextElementSibling.offsetTop) - 70 + "px";
      deleted = deleted.nextElementSibling;
    }
  }
  e.target.parentNode.remove();
});