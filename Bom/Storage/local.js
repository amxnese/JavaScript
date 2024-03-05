/* Local storage, in the context of web development, refers to a web browser feature that allows websites 
to store data locally on a user's computer. This data can persist even after the browser is closed and 
reopened, making it useful for applications that need to store user preferences, login tokens, or other information.

Local storage operates on a key-value pair system, meaning that data is stored with an associated key that 
can later be used to retrieve it. The data is stored as strings, so if you need to store complex objects,
you'll need to serialize them (typically using JSON) before storing and deserialize them after retrieval. */

// Adding Items To The Local Storage
window.localStorage.setItem("color", "red");
// Or
window.localStorage.fontSize = "20px";
// Or
window.localStorage["fontWeight"] = "bold";

// Getting Items From The Local Storage
console.log(window.localStorage.getItem("color")); // red

// Removing an Item From The Local Storage
window.localStorage.removeItem("fontWeight");

// Indexing The Local Storage Items
console.log(window.localStorage.key(1));

// Clearing The Local Storage
window.localStorage.clear();
