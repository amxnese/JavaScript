let Ele = document.getElementById("hello");
let par = document.createElement("p");
console.log(Ele);
par.innerHTML =
  "This is Paragraph From <span style='color:red'> dealWithElements.js </span> File";

// Adding an Element Before an Element
Ele.before(par);

// Adding an Element After an Element
Ele.after("  This was Added Using The After Method,");

// prepending an Element To The End Of an Element
Ele.prepend("  This was Added Using The Prepend Method, ");

// appending an Element To The Begining of an Element
Ele.append("  This Was Added Using The Append Method, ");

// Removing an Element
par.remove();
