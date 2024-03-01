let products = ["Laptop", "Console", "Smartphone", "Desktop", "Monitor"];
let colors = ["Red", "Green", "Blue"];
document.write("<h1> Our Products </h1>");
let count = 3;
for (let i = 0; i < count; i++) {
  document.write("<div>");
  document.write(`<h3>${i + 1}) ${products[i]} </h3>`);
  for (let n = 0; n < colors.length; n++) {
    document.write(`<p> ${colors[n]} </p>`);
  }
  document.write("</div>");
}
