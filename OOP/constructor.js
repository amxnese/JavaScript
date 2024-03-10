// Old Syntax
function Car(model, color, price) {
  this.model = model;
  this.color = color;
  this.price = price;
}

let car1 = new Car("mustang", "grey", 20000);
console.log(car1.model); // mustang
console.log(car1.color); // grey
console.log(car1.price); // 20000

// New Syntax : ECMAScript 6
class Laptop{
  constructor(model, cpu, price){
    this.model = model;
    this.cpu = cpu
    this.price = price
  }
}

let laptop1 = new Laptop('hp', 'i511', 299)
console.log(laptop1.model) // hp
console.log(laptop1.cpu) // i511
console.log(laptop1.price) // 299
