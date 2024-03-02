// DOM : Document Object Model

let myIdElement = document.getElementById("mainTitle");
let myTagElement = document.getElementsByTagName("h1");
let myClassElement = document.getElementsByClassName("container");
let myQueryElement = document.querySelector(".container", "#myContainer"); // Returns The First Matching Query
let myQueriesElement = document.querySelectorAll("p"); // Returns All Matching Queries

console.log(myIdElement);
console.log(myTagElement);
console.log(myClassElement);
console.log(myQueryElement);
console.log(myQueriesElement);
myQueriesElement[0].innerHTML = "Hello From getAndSet.js File";

// Getting and Setting Attributes Indirectly
console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.links);

let myEle = document.querySelector("#js");
myEle.innerHTML = "this is &lt;span&gt;";
myEle.textContent = "This is <span>";

myImg = document.images[0];
myImg.src = "code.jpeg";
myImg.alt = "alternative text";
myImg.title = "code";
myImg.id = "pic";
myImg.className = "img";
console.log(myImg);

// Getting and Setting Attributes Using Methods
let myLink = document.querySelector(".google");
myLink.setAttribute("class", "myLink");
myLink.setAttribute("href", "https://www.google.com");
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

// Getting The Attributes of an Element
element = document.getElementsByTagName("img")[0];
console.log(element.attributes);

// Checking if an Element Has a Specific Attribute
console.log(element.hasAttribute("src")); // true

// Checking if an Element Has Attributes
console.log(element.hasAttributes()); // true

// Removing an Attribute
element.removeAttribute("alt");
console.log(element.hasAttribute("alt")); // false
