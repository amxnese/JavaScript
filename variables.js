// Declaring a Variable Using var, The Variable Will Be Added To The window, Function Scoped or Globally Scoped
var name; // Variable name Can Be Redeclared

// Declaring a Variable Using let, 'let' Variables Are Block-Scoped
let age; // Variable name1 Can't Be Redeclared But Can Be Reassigned

// Declaring a Variable Using const, 'const' Variable Are Also Block-Scoped
const PI = 3.14; // Variable name2 Can't Be Redeclared Nor Reassigned And Should Have An Initial Value

// Assigning a Value To a Variable Declared via var
var name = "amine"; // var is Optional

// Assigning a Value To a Variable Declared via let
age = 28;

// The id of Any Tag Can Be Dealt With As a Variable
console.log(hello) // <div id="hello">Hello From HTML</div>

// Changing The Content of a Tag Using its id
hello.innerHTML = `Hello From innerHTML Function, ${name} Here`
