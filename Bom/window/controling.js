// Stoping The Page From Loading
window.stop();

// Printing a Page
window.print();

// Focusing on a Specific Page
window.focus("https:google.com");

// Scrolling The Window To a Specific Coordinates
window.scrollTo(x=30,y=40);
// Or
window.scrollTo({
  left:30,
  top:40,
  behavior:'smooth'
})

// Scrolling By a Specific Coordiantes
window.scrollBy(30,40);

// Getting The X Coordinates
console.log(window.scrollX)

// Getting The Y Coordinates
console.log(window.scrollY)
