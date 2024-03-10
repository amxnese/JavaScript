// Getting Current Time
let dateNow = new Date();
console.log(dateNow); // 15:22:02

// Getting Time Past Since 1st Jan 1970 in miliseconds
let timePast = Date.now();
console.log(timePast); // 1710080655780
console.log(dateNow.getTime()); // 1710080655780

// Getting Time Past Since 6th Apr 2002
let birthday = new Date("apr 6, 02");
let diff = dateNow - birthday;
console.log(diff / 1000 / 60 / 60 / 24 / 365); // 21...

// Getting The Day of The Month
console.log(dateNow.getDate()); // 10

// Getting The Year
console.log(dateNow.getFullYear()); // 2024

// Getting The index of The Month
console.log(dateNow.getMonth()); // 2 for march

// Getting The index of The Day of The Week
console.log(dateNow.getDay()); // 0 for sunday

// Getting The Hours From Current Time
console.log(dateNow.getHours()); // 17

// Getting The Minutes From Current Time
console.log(dateNow.getMinutes()); // 14

// Getting The Seconds From Current Time
console.log(dateNow.getSeconds()); // 20
