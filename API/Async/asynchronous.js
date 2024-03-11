/* In asynchronous programming, tasks can be started and completed independently of the main program flow.
Asynchronous operations do not block the execution of subsequent tasks. Instead, they allow the program
to continue executing while waiting for tasks to complete. This is particularly useful for tasks
that involve waiting for I/O operations, such as fetching data from a server or reading a file. */

console.log("Task 1");

setTimeout(() => {
    console.log("Task 2");
}, 2000);

console.log("Task 3");

/* In this example, setTimeout() is an asynchronous function that schedules a callback function to be 
executed after a specified delay (in milliseconds). While waiting for the timeout to complete, 
the program continues executing the next task. As a result, the output might be:*/

// Task 1
// Task 3
// Task 2
