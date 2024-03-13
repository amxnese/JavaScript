/* 
Ready State:
0 (UNSENT): The XMLHttpRequest object has been created, but the open() method has not been called yet.

1 (OPENED): The open() method has been called. During this state, you can set request headers using the 
setRequestHeader() method.

2 (HEADERS_RECEIVED): The send() method has been called, and the request headers and status are available.
You can access the response headers at this stage.

3 (LOADING): The response body is being received. Progress of the download can be monitored using the progress event.

4 (DONE): The operation is complete. The response data has been received and is available in the responseText, 
responseXML, response, or responseType properties, depending on how the request was configured.
*/

// Creating an XMLHttpRequest Object
let req = new XMLHttpRequest();
// Opening The Link in The 'GET' Mode
req.open("GET", "https://api.github.com/users/amxnese/repos");
//  Initiating an HTTP Request To The Specified URL
req.send();
// Checking if The Request Has Been Successfully Sent
req.addEventListener('readystatechange', function() {
  if(this.readyState === 4 && this.status === 200){
    // Parsing The Text
    let parsed = JSON.parse(this.responseText)
    // Looping Through Data
    for(let i = 0; i < parsed.length; i++){
      let div = document.createElement('div');
      let text = document.createTextNode(parsed[i].full_name)
      div.append(text)
      document.body.append(div);
      console.log('hi')
    }
  }
})