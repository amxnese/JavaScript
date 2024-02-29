/* In JavaScript, the this keyword refers to the object that is currently executing the code. 
The value of this is determined by how a function is called. It is a powerful and often
misunderstood feature of the language.

Here are some common scenarios where this is used:

Global Context: When used in the global scope (outside of any function), this refers to the global object,
which is window in browsers and global in Node.js.
*/
console.log(this === window); // true in a browser environment

/* 
Function Context: When this is used inside a function, its value depends on how the function is called:

Regular Function Calls: When a function is called as a standalone function, this refers to the 
global object (window in browsers, global in Node.js) in non-strict mode, or it's undefined in strict mode.
*/
function myFunction() {
  console.log(this);
}
myFunction(); // In a browser, 'this' refers to 'window'

/* 
Method Calls: When a function is called as a method of an object,
this refers to the object that owns the method.
*/
let obj = {
  func: function() {
    console.log(this);
  }
};
obj.func(); // 'this' refers to 'obj'

/* 
Constructor Calls: When a function is used as a constructor with the new keyword, 
this refers to the newly created instance.
*/
function MyClass() {
  console.log(this);
}
const instance = new MyClass(); // 'this' refers to the newly created instance


// Event Handlers: In event handler functions, this usually refers to the element that triggered the event.
document.write(`<button onclick="console.log(this)">Click me</button>`)

/* 
Explicitly Setting this: You can explicitly set the value of this using methods like call(), apply(), or bind().
*/
const ob = { name: 'John' };
function sayName() {
  console.log(this.name);
}
sayName.call(ob); // 'this' is explicitly set to 'ob'
