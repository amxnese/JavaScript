// Creating a div
myElement = document.createElement("div");
myAttribute = document.createAttribute("data");
myText = document.createTextNode("My Product");
myComment = document.createComment("This is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttribute);
myElement.setAttribute("class", "product");

// Appending Text To Element
myElement.appendChild(myText);

// Appending Comment
myElement.appendChild(myComment);

// Creating a Header
myHeader = document.createElement("h3");
headerTxt = document.createTextNode("This is Header");

// Appending text to Header
myHeader.appendChild(headerTxt);

// Creating a paragraph
myPar = document.createElement("p");
parTxt = document.createTextNode("This is Paragraph");

// Appending text to paragraph
myPar.appendChild(parTxt);

// Appending Header To div
myElement.appendChild(myHeader);

// Appending paragraph To div
myElement.appendChild(myPar);

// Appending The Element to The body
document.body.appendChild(myElement);
