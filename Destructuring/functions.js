let car = {
  model: "mustang",
  price: "20000",
  colors: {
    color1: "red",
    color2: "blue",
    color3: "black",
  },
};

function carDetails({ model: m, price: p, colors: { color1: c1 } } = car) {
  console.log(m); // mustang
  console.log(p); // 200000
  console.log(c1); // red
}

carDetails(car);
