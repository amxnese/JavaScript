let PI = 3.14;

function say_hi() {
  return "Hello Form main.js Module";
}

class myClass {
  constructor(msg) {
    this.msg = msg;
  }
  show() {
    return `Message is '${this.msg}'`;
  }
}

export { PI, say_hi, myClass };
