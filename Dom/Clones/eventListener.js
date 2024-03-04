// Getting The Original Header
original = document.querySelector("h2");

// Adding an EventListener to The Original Header
original.addEventListener("click", function () {
  // Cloning The Original Header
  let copy = original.cloneNode(true);
  // Setting a ClassName To The Copy Element
  copy.className = "clone";
  // Changing The copied Clone's Text
  copy.textContent = "Cloned"
  // Appending The Copy Element To The Body
  document.body.appendChild(copy);
});

// Adding Another EventListener To The Original Header
original.addEventListener("click", function (event) {
  console.log(event.target);
});

// Adding an Event Listener To The Cloned headers
window.addEventListener("click",  event => {
  // Checking if it's a Cloned Header By Checking The ClassName We Set Earlier
  if(event.target.className === "clone"){
    console.log("i am Cloned");
  }
});

// Adding a Global Event Listener That Intereact To All Headers <h2>

// Global Function
function GlobalEventListener(type, selector, callback){
  document.addEventListener(type, e => {
    // Checking if The Clicked element Matches The Selector
    if(e.target.matches(selector)) callback();
  })
}

GlobalEventListener('click', 'h2', () => {
    console.log("You Clicked a Header");
})
