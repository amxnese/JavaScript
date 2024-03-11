// exporting a default Function
export default function () {
  return "This is My Default Function That Can Be Imported Using any Name";
}

function askForAge() {
  return "How Old Are You?";
}

function askForPlace() {
  return "Where Do You Live?";
}

function askForName() {
  return "What is Your Name";
}

export { askForAge, askForName, askForPlace };
