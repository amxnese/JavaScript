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
button = document.querySelector("button");
button.addEventListener("click", () => {
  clearTimeout(handler); // clearTimout Takes a Handler That is Considered as The id of Each setTimeout Function
})

/* the setInterval() function is used to repeatedly execute a specified function or piece of
code at a specified interval. It continues to execute until it is stopped with the 
clearInterval() function.  */

// Getting The div Element
div = document.querySelector("div");

// Setting a Handler To The setInterval Function
let handler1 = setInterval(dec, 1e3);

// Function To be Passed to The setInterval
function dec(){
  div.innerHTML -= 1;
  // Stoping The setInterval After The Div Hits 0
  if(div.innerHTML == 0){
    div.innerHTML = "Time Ended";
    clearInterval(handler1);
    alert("You Lose")
  }
}

// Adding Another EventListener To The Button So it Can Stop Both The setTimeout And The setInterval at The Same Time
let counter = 0; // Clicked Counts, clearInterval After 10 clicks
button.addEventListener('click', () => {
  counter ++;
  if(counter === 10){
    clearInterval(handler1);
    alert("You Win")
  }
})
