let button = document.querySelector("button")

// Adding a scroll EventListener To The window So The button Appears After a Specific coordinate of Y
window.addEventListener('scroll', () => {
  if(window.scrollY < 600){
    button.style.display = "none"
  }else{button.style.display = "block"}
})

button.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
})