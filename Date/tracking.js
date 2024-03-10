let start = new Date()
for(i = 0; i < 100000; i++){
  document.write(`<div> ${i} </div>`)
}
let end = new Date()
console.log(end-start)