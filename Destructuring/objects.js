let user = {
  name: "amine",
  age: 21,
  job: "developer",
  skills: {
    html: 80,
    css: 70,
  },
};

// Destructuring object
let { name, age, job } = user;
console.log(name); // amine
console.log(age); // 21
console.log(job); // developer

let {
  skills: { html, css },
} = user;
console.log(html); // 80
console.log(css); // 70

let { html: myHtml, css: myCss } = user.skills;
console.log(myHtml); // 80
console.log(myCss); // 70

// Storing The Value in a Different Variable Name
let { name: myName } = user;
console.log(myName); // amine

// Default Value
let { country = "algeria" } = user;
console.log(country); // algeria
