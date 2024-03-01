for (let i = 0; i < 5; i++) {
  // Creating a div
  myElement = document.createElement("div");
  myAttribute = document.createAttribute("data");
  myComment = document.createComment("This is Div");

  myElement.className = "product";
  myElement.setAttributeNode(myAttribute);
  myElement.setAttribute("class", "product");

  // Appending Comment
  myElement.appendChild(myComment);

  // Creating a Header
  myHeader = document.createElement("h3");
  headerTxt = document.createTextNode(`Product ${i + 1}`);

  // Appending text to Header
  myHeader.appendChild(headerTxt);
  myHeader.style.color = "red";
  myHeader.style.textDecoration = "underline";

  // Creating a paragraph
  myPar = document.createElement("p");
  parTxt = document.createTextNode(`Product Number ${i + 1} Description`);

  // Appending text to paragraph
  myPar.appendChild(parTxt);
  myPar.style.color = "blue";

  // Appending Header To div
  myElement.appendChild(myHeader);

  // Appending paragraph To div
  myElement.appendChild(myPar);

  // Appending The Element to The body
  document.body.appendChild(myElement);
}
