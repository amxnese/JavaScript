/* the setTimeout() function is used to execute a specified function or piece of code once
after a specified delay in milliseconds. It allows you to schedule a function to run asynchronously 
after a certain amount of time has passed */

// The Function Takes 3 arguments :
// 1 : a Function Which it Will Execute 
// 2 : Time in Milliseconds
// 3 : arguments That Will be Passed To The Function That Will be Executed : Optional

// Setting a Handler To The SetTimeOut Function So We Can Control It 
let handler = setTimeout(msg, 3000, "amine");

// Creating The Function That Will be Passed to The setTimeout Function or We Can Use Anonymous Function
function msg(name){
  console.log(`Hello ${name}`);
}

// Getting The Button That We Will Use To Stop The setTimeout Function
button = document.querySelectorAll("button")[1];
console.log(button);
button.addEventListener("click", () => {
  clearTimeout(handler); // clearTimout Takes a Handler That is Considered as The id of Each setTimeout Function
})

/* the setInterval() function is used to repeatedly execute a specified function or piece of
code at a specified interval. It continues to execute until it is stopped with the 
clearInterval() function.  */

// Getting The div Element
div = document.querySelector("div");

// Creating a Result Div
let result = document.createElement("div");
result.style.cssText = "font-size:50px"
let text = document.createTextNode("0");
result.append(text);
// Appending The Div To The body
document.body.append(result)

// Attaching The Start Button To The Set inerval
let handler1;
start = document.querySelectorAll("button")[0];
function clickStart(){
  // Setting a Handler To The setInterval Function
  handler1 = setInterval(dec, 1e3)
}
start.addEventListener('click', clickStart)

// Function To be Passed to The setInterval
function dec(){
  div.innerHTML--;
  // Stoping The setInterval After The Div Hits 0
  if(div.innerHTML === '0'){
    div.innerHTML = "Time Ended";
    clearInterval(handler1);
    result.innerHTML = "Better Luck Next Time";
    start.removeEventListener('click',clickStart);
    button.removeEventListener('click', handleClick);
  }
}

// Adding Another EventListener To The Button So it Can Stop Both The setTimeout And The setInterval at The Same Time
// Defining The Function That we Will Pass To The eventListener
let count = 0;
function handleClick(){
  count++;
  result.innerHTML = count;
  if(count === 10){
    clearInterval(handler1);
    result.innerHTML = "You Win";
    button.removeEventListener('click', handleClick);
    start.removeEventListener('click',clickStart);
  }
}
let counter = 0; // Clicked Counts, clearInterval After 10 clicks
button.addEventListener('click', handleClick);