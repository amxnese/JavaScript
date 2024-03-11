// Importing From main.js File
import { PI, say_hi as hi, myClass } from "./main.js";

// Importing From msgs.js File
import myDefault from "./msgs.js";

// Importing Everything From msgs.js File
import * as myMsgs from "./msgs.js"

console.log(PI); // 3.14

console.log(hi()); // Hello From main.js Module

let msg = new myClass("Hello");
console.log(msg.show()); // Message is 'Hello'

console.log(myDefault()); // This is My Default Function That Can Be Imported Using any Name

console.log(myMsgs.askForAge()) // How Old Are You?

console.log(myMsgs.askForName()) // What is Your Name?

console.log(myMsgs.askForPlace()) // Where Do You Live?