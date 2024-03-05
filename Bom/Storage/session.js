/* Session Storage is a web storage API provided by web browsers that allows web applications
to store key-value pairs locally within the user's browser session. It's similar to Session Storage,
but the data stored in Session Storage is only accessible for the duration of the page session.
Once the session ends, either by closing the browser tab or navigating away from the page, 
the data is cleared.

Session Storage is often used to store temporary data that needs to be accessed across different
pages within the same browser tab/session. */

// Adding Items To The Session Storage
window.sessionStorage.setItem("color", "red");

// Getting Items From The Session Storage
console.log(window.sessionStorage.getItem("color")); // red

// Removing an Item From The Session Storage
window.sessionStorage.removeItem("fontWeight");

// Indexing The Session Storage Items
console.log(window.sessionStorage.key(1));

// Clearing The Session Storage
window.sessionStorage.clear();
