// Getting All Elements
let container = document.querySelector(".container");
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

// Function That Creates Divs
function CreateDiv(text){
  let div = document.createElement('div');
  let str = document.createTextNode(text);
  div.append(str);
  div.style.cssText = 
    "background-color: aqua;\
    width: 295px;\
    height: 55px;\
    left: 578px;\
    top: 136px;\
    position: fixed;\
    display: flex;\
    justify-content: center;\
    align-items: center"
  return div
}

console.log(CreateDiv("hi"))
// Adding an Event Listener To add Button
add.addEventListener('click', e => {
  if(input.value === ""){
    return;
  }
  // Creating a div
  let task = CreateDiv(input.value);
  document.body.append(task)

})


