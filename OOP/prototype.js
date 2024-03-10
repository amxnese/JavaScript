/* The prototype is an object from which other objects inherit properties. Every function
has a prototype property, which is empty by default, but you can attach properties and 
methods to it. When you create an object using the new keyword with a constructor function,
the newly created object inherits properties and methods from the constructor's prototype. */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Adding a method to the prototype
  sayHello() {
    console.log("Hello, my name is " + this.name);
  }
}

// Creating objects using the constructor function
let person1 = new Person("Alice", 30);

// Calling the method
person1.sayHello(); // Output: Hello, my name is Alice

// Adding Another Method To The Person's Prototype
Person.prototype.getAge = function () {
  return `My Age is ${this.age}`;
};

// Now The person1 instance Will Automatically inherits The New Method
console.log(person1.getAge()); // My Age is 30

// Adding a Method To String Object
String.prototype.fancy = function () {
  return `\\\\${this}//`;
};

let str = "amine";
console.log(str.fancy()); //  \\amine//

/* When Creating an Instance From The Person Class That new Instance Will Inherit From The 
Person's Prototype Which itself Inherits From The Object's Prototype, This Means That
if We Add a Method To The Object's Prototype Every Object Will Inherit That Method */
Object.prototype.imposter = function () {
  return "This Method is an Imposter";
};

// Now Every Object or Instance of an Object Can Access The imposter() Method
console.log(person1.imposter()) // This Method is an Imposter