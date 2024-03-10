class User {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  // Method
  showDetails() {
    console.log(
      `name : ${this.name}, age : ${this.age}, salary : ${this.salary}`
    );
  }

  // Static Method, Static methods and properties belong to the class itself rather than to instances of the class
  static msg() {
    console.log("This Can't Be Accessed By Instances");
  }
}

let user1 = new User("marc", 25, 20000);
user1.showDetails(); // name : marc, age : 25, salary : 20000

// user1.msg() // Error
User.msg() // This Can't ...

