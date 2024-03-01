let sk = "skills";
// We Can Create an Object Using {} Or new Object() or Object.create(prototype:opt) or Object.assign()
let user = {
  // Properties
  name: "amine",
  "user age": 21,
  skills: ["CSS", "HTML", "JS"],
  address: {
    homeAddress: "Biskra",
    residence: "Batna",
  },
  availability: true,
  // Methods
  status: () => (user.availability ? "Open To Work" : "Not Available"),
  styleName: function () {
    return `|-->${this.name}<--|`;
  },
};
console.log(user.name); // amine
console.log(user["user age"]); // 21
console.log(user[sk].join(" | ")); // CSS | HTML | JS
console.log(user["address"].homeAddress); // Biskra
console.log(user["address"].residence); // Batna
console.log(user.status()); // Open To Work
console.log(user.styleName()); // |-->amine<--|

// Creating an Object That has The user Objecct as a Prototype
cpyobj = Object.create(user);
cpyobj.name = "chris";
console.log(cpyobj.styleName()); // |-->chris<--|

// Overriding The styleName Function
cpyobj.styleName = function () {
  return `\\\\${this.name}//`;
};
console.log(cpyobj.styleName()); // \\chris//

// Object.create()
let target = { a: 1, b: 2 };
let source = { b: 3, c: 4 };
let merged = Object.assign(target, source);
console.log(merged); // Output: { a: 1, b: 3, c: 4 }
