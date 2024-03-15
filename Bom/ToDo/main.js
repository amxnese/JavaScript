// Getting All Elements
let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

// Setting a Counter That Counts The Tasks We Have So When We Create or Remove a Task The Tasks div will be Modified
let counter = 0;

// The Counter To Use For Setting The Top of Tasks Since The Counter Can't be Used For This
let cnt = 0;

// Declaring an id Variable So Each Task Takes a Unique id
let id = 0;

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
  div.className = "task";

  // Creating The Text To Put in Div (The input)
  let str = document.createTextNode(text);

  // Appending The TextNode To The Task Div
  div.append(str);

  // Modifying The Top of Each Task So They Don't be on The Same Position
  let top = 136 + cnt++ * 70;

  // Modifying The Style of The Task Div
  div.style.top = top;

  // Creating The Remove Button
  removeButton = document.createElement("button");
  removeButton.className = "remove";
  removeButton.innerHTML =
    "<span class='material-symbols-outlined'>delete</span>";

  // Setting an id To The Remove Button To Relate it With The Task
  removeButton.id = id;

  // Appending The Remove Button To The Task Div
  div.appendChild(removeButton);

  return div;
}

// Adding an Event Listener To The add Button
add.addEventListener("click", () => {
  // Handling The Case Where The input is Not Valid
  if (!input.value || input.value.trim() === "") {
    return;
  }

  // Handling The Case Where The Input is Valid
  // Creating a Task Div
  let task = createTask(input.value);

  // Expanding The Div That Contains All Tasks Each Time We Add a New Task
  if (counter > 0) {
    tasks.style.height = parseInt(tasks.offsetHeight) + 69 + "px";
    // Adding The Current Height of The Tasks Div To Local Storage
    localStorage.setItem("height", parseInt(tasks.offsetHeight) + "px");
  }

  // Incrementing our Counter To Stay in Track
  counter++;

  // Storing counter in local Storage
  localStorage.setItem("counter", counter);

  // Adding The Task Text To The local Storage
  localStorage.setItem(id++, input.value);

  // Storing The id on Local Storage
  localStorage.setItem("id", id);

  // Clearing The Input After Adding The Task
  input.value = "";
  // Appending The Task To The Body
  document.body.appendChild(task);
});

// Trigering The add Button Using The Enter Key
input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    add.click();
  }
});

// Declaring a Global Event Listener Function
function GlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    // Checking if The Clicked element Matches The Selector
    if (e.target.matches(selector)) callback(e);
  });
}

// Adding an Event Listener To The Remove Button Using The Global Event Listener Function
GlobalEventListener("click", "button", (e) => {
  // Removing The Task From The Local Storage
  localStorage.removeItem(e.target.id);

  // Decrementing The counter To Stay in Track
  if (counter > 0) {
    counter--;
    localStorage.setItem("counter", counter);
  }

  // Checking if Theres More Than One Task
  if (counter > 0) {
    // Shrinking The Main Task
    tasks.style.height = parseInt(tasks.offsetHeight) - 69 + "px";

    // Updating The Height in local Storage
    localStorage.setItem("height", parseInt(tasks.offsetHeight) + "px");

    // Modifying The Position of The Tasks That Were Below The Task That Has Been Deleted
    let deleted = e.target.parentNode;
    while (deleted.nextElementSibling) {
      deleted.nextElementSibling.style.top =
        parseInt(deleted.nextElementSibling.offsetTop) - 70 + "px";
      deleted = deleted.nextElementSibling;
    }
  }

  // Removing The Task
  e.target.parentNode.remove();

  // Decrementing The cnt so We Don't Have Problems With The top of Tasks
  cnt--;
});

// Checking if There are Already Some Tasks in Local Storage
if (localStorage.length > 1) {
  // Setting The Height of Tasks Div
  tasks.style.height = localStorage.getItem("height");

  // Retrieving The id And The Counter
  id = localStorage.getItem("id");
  counter = localStorage.getItem("counter");

  // The Next 3 for loops Are only Made To Ensure That The Task And The Remove Button Has The Same id

  // Storing Old Tasks To Delete Them Later and Set a New Id To Them
  let oldTasks = {};
  for (let n = 0; n < localStorage.length; n++) {
    if (!isNaN(localStorage.key(n))) {
      oldTasks[localStorage.key(n)] = localStorage.getItem(localStorage.key(n));
    }
  }

  // Sorting The Tasks Based on Their Keys
  let sortedKeys = Object.keys(oldTasks).sort();
  let sortedTasks = {};
  sortedKeys.forEach((key) => {
    sortedTasks[key] = oldTasks[key];
  });

  // Removing Tasks From Local Storage
  for (let j = localStorage.length - 1; j >= 0; j--) {
    if (!isNaN(localStorage.key(j))) {
      localStorage.removeItem(localStorage.key(j));
    }
  }

  // Creating Same Tasks With Updated Id's
  for (let key in sortedTasks) {
    let tsk = createTask(sortedTasks[key]);
    localStorage.setItem(id, sortedTasks[key]);
    // Giving The Remove Button The Same id
    tsk.childNodes[1].id = id++;
    document.body.appendChild(tsk);
  }
}
