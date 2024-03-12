/* the call stack is a mechanism used to keep track of function calls in a program. When a function is called,
a new frame is pushed onto the call stack, representing that function call. When the function 
finishes executing, its frame is popped off the stack. */

// call stack detects web api methods and leave them to the browzer to handle them

// a web api method:
setTimeout(() => {
  console.log("web api"); // this will be executed when the call stack is empty
}, 0);

function firstFunction() {
  console.log("first");
}

function secondFunction() {
  firstFunction();
  console.log("second");
}

secondFunction(); // output : first  second  web api
