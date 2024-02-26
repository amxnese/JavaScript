/*Logical OR Operator: The logical OR operator, denoted by ||, is commonly used for Boolean operations.
It returns the first operand if it's truthy, otherwise it returns the second operand. 
it's often used for providing default values as well, but it doesn't distinguish between null/undefined 
and other falsy values.*/
console.log(`The Price is ${500 || 200}`);       // 500
console.log(`The Price is ${0 || 200}`);         // 200
console.log(`The Price is ${null || 200}`);      // 200
console.log(`The Price is ${false || 200}`);     // 200
console.log(`The Price is ${"" || 200}`);        // 200
console.log(`The Price is ${undefined || 200}`); // 200
console.log(`The Price is ${NaN || 200}`);       // 200


/* Nullish Coalescing Operator: This operator, denoted by ??, is used to provide a default value when dealing
with null or undefined values. It returns the right-hand operand when the left-hand operand is null or undefined;
otherwise, it returns the left-hand operand. This operator is particularly useful when you want to distinguish 
between null/undefined and other falsy values like 0 or ''. */
console.log(`The Price is ${500 ?? 200}`);       // 500
console.log(`The Price is ${0 ?? 200}`);         // 0
console.log(`The Price is ${null ?? 200}`);      // 200
console.log(`The Price is ${false ?? 200}`);     // false
console.log(`The Price is ${"" ?? 200}`);        // ""
console.log(`The Price is ${undefined ?? 200}`); // 200
console.log(`The Price is ${NaN ?? 200}`);       // NaN