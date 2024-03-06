// Getting All Elements
let container = document.querySelector(".container");
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

// Setting a Counter That Counts The Tasks We Have So When We Create or Remove a Task The Tasks div will be Modified
let counter = 0;

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
  let removeButton = document.createElement("button");
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
  tasks.style.height = parseInt(tasks.offsetHeight) + counter * 68 + "px";
  // Incrementing our Counter To Stay in Track
  counter++;
  return div;
}

// Adding an Event Listener To add Button
add.addEventListener("click", () => {
  // Checking if The input is Valid
  if (input.value === "") {
    return;
  }
  // Creating a Task Div
  let task = createTask(input.value);
  // Clearing The Input After Adding The Task
  input.value = "";
  // Appending The Task To The Body
  document.body.appendChild(task);
});
