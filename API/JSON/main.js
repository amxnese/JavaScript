// Assuming That We Grabbed JSON File From a Server
let jsonFromServer = '{"name":"amine","age":21,"level":3}';

// Parsing The Grabbed JSON
let parsedJson = JSON.parse(jsonFromServer);

// Modifying The Parsed Json File
parsedJson["level"] = 4;

// Converting The Modified File Into a String Again
let jsonToServer = JSON.stringify(parsedJson);

// Received File
console.log(jsonFromServer); // {"name":"amine","age":21,"level":3}

// Sent File
console.log(jsonToServer); // {"name":"amine","age":21,"level":4}
