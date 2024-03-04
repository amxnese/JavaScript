button = document.querySelector("button");

// onclick event
button.onclick = function () {
  console.log("Clicked");
};

// onmouseenter event
button.onmouseenter = function () {
  console.log("Hovered");
};

// onmouseleave event
button.onmouseleave = function () {
  console.log("Left");
};

// onload event
// body = document.body;
// body.onload = function () {
//   console.log("Page is Loaded");
// };

// onscroll Event
window.onscroll = function () {
  console.log("Scrolled");
};

// onfucus Event
form = document.querySelector("form");
form.name.onfocus = function () {
  console.log("Focused on name");
};
form.email.onfocus = function () {
  console.log("Focused on email");
};

// onblur Event
form.name.onblur = function () {
  console.log("Blured name");
};

form.email.onblur = function () {
  console.log("Blured email");
};

// onsubmit Event
form.onsubmit = function () {
  console.log("Submited");
};

// Preventing an Event
username = document.querySelector("[name='name']"); // Getting The Name Input
email = document.querySelector("[name='email']"); // Getting The Email Input

document.forms[0].onsubmit = function (event) {
  validName = false;
  validEmail = false;
  // Checking if The Username is Valid
  if (username.value != "" && username.value.length <= 10) {
    validName = true;
  }
  // Checking if The Email is Valid
  if (email.value) {
    validEmail = true;
  }
  // Preventing if Not Validated
  if (!validName || !validEmail) {
    event.preventDefault();
    username.value = username.value.slice(0, 8);
  }
};

// Event Simulation
window.onload = function () {
  username.focus();
};

// Fucusing on Email When Bluring username
username.onblur = function () {
  email.focus();
};
