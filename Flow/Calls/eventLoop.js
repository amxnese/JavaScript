/* In JavaScript, the event loop is a central part of the language's runtime environment, especially in environments
like web browsers and Node.js. The event loop in JavaScript allows for non-blocking I/O operations, making it 
particularly useful for building responsive and scalable applications. Here's how it generally works in JavaScript:

Main Execution Context: When a JavaScript program starts running, it begins with a main execution context.
This is where the code initially executes.

Event Queue: JavaScript environments have an event queue where events are placed as they occur. These events 
can include DOM events (like mouse clicks or keyboard presses), timer events, and asynchronous I/O events 
(like HTTP requests or file operations).

Event Loop: The event loop continuously checks two things:
If the call stack is empty: The event loop checks if there's any code waiting to be executed. If the call 
stack is empty, it takes the first event from the event queue and pushes it onto the call stack, executing 
the associated event handler.
If the call stack is not empty: The event loop waits until the call stack becomes empty, at which point it 
checks the event queue again.

Event Handlers: When an event is picked from the event queue and pushed onto the call stack, the associated event
handler is executed. This could be a function registered as a callback for a specific event, such as a click 
handler or a timer callback.

Non-Blocking I/O: JavaScript uses non-blocking I/O operations, which means that while an I/O operation 
(such as an AJAX request or a file read) is being performed, the JavaScript engine can continue executing 
other code rather than waiting for the operation to complete.

By utilizing the event loop and non-blocking I/O, JavaScript can handle concurrent operations efficiently, 
making it well-suited for building highly responsive applications, especially in scenarios like web development
and server-side programming with Node.js. */


// Example About Timer Events: 

console.log("hi"); // Pushed To Call Stack, Executes Immediately, Popped From Call Stack

setTimeout(() => { // Pushed To Call Stack, Sent To Web API Since it's asynchronous, Popped From Stack
  console.log("log this after 20ms"); 
}, 20);

setTimeout(() => { // Same Thing, Now We Have Two Callback Functions in Web Api
  console.log("log this after 0ms");
}, 0);

console.log("bye"); // Pushed, Executed, Popped

/* When We Push Timeout Functions To Web Api And The Timeout of a Function is Done, it's Pushed To Event Queue (FIFO)
So The Function That Has 0ms Timeout Will be Pushed Before The One That Has 20ms, Now Those Tasks Will Be Handled
By The Event Loop, What The Event Loop Does is That it Keeps Checking Whether The Call Stack is Empty or Not.
as Soon That The Call Stack is Empty The Event Loop Starts Passing The Tasks From The Queue To Stack One By One */
