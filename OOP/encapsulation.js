class Employee {
  // Private Property
  #id;
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.#id = id;
  }

  // id Getter
  getId() {
    return this.#id; // in This Case The id is a Read Only Property and Can't Be Changed
  }
}

let emp1 = new Employee('kino', 23, 1);
console.log(emp1.getId()) // 1
