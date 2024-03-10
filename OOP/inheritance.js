// Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// Derived Class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calling the constructor of the parent class
    this.breed = breed;
  }

  // Overriding The speak() Method
  speak() {
    console.log(`${this.name} barks`);
  }

  describe() {
    console.log(`${this.name} is a ${this.breed}`);
  }
}

// Creating instances
const myAnimal = new Animal('Generic Animal');
const myDog = new Dog('Buddy', 'Husky');

// Using inherited methods
myAnimal.speak(); // Output: Generic Animal makes a sound
myDog.speak(); // Output: Buddy barks

// Using method defined in the child class
myDog.describe(); // Output: Buddy is a Husky
