/* In synchronous programming, tasks are executed one after the other, in sequence. Each task
must wait for the previous one to finish before it can start. This means that if a task takes a 
long time to complete, it can block the execution of subsequent tasks. */

console.log("Task 1");
console.log("Task 2");
window.alert("test");
console.log("Task 3");
/* In this example, each task executes in sequence, no matter how long will the alert take to finish, 
the Task 3 will never executes before the alert is done, and the output will be: */
// Task 1
// Task 2
// Task 3
