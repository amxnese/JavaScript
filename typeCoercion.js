console.log('5' + 8)          // "58"
console.log(+'5' + 8)         // 13
console.log('5' - '8')        // -3
console.log("hello" + 5)      // "hello5"
console.log("hello" - 5)      // NaN
console.log("" - 2)           // -2
console.log(false - true)     // -1
console.log(20 + true)        // 21
console.log(20 + '12' + true) // "2012true"

// We Can Convert a String To a Number Using Unary Operators or The Number() Method
result = (+'12') + (-'6') + Number('2');
console.log(result); // 8