// Create a new Date object
var date = new Date();

// Set specific components of the date and time
date.setFullYear(date.getFullYear()-1); // We Can Decrement One Year and Add 12 Months
date.setMonth(date.getMonth()+12);
date.setDate(date.getDate() + 1); // We Can Increment one Day and Decrement 24 Hours
date.setHours(date.getHours() - 24);
date.setMinutes(date.getMinutes());
date.setSeconds(date.getSeconds());

console.log(`Today is ${date}`);
