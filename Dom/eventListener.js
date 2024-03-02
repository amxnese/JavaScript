original = document.querySelector("h4");

original.addEventListener("click", function () {
  let copy = original.cloneNode(true);
  copy.className = "clone";
  document.body.appendChild(copy);
});

original.addEventListener("click", function (event) {
  console.log(event.target);
});

window.addEventListener("click", function (event) {
  if(event.target.className === "clone"){
    console.log("i am Cloned");
  }
});
