// Function Rest Parameter
function add(...nums){ // nums is an Array
  let result = 0;
  for(let i = 0; i < nums.length; i++){
    result += nums[i];
  }
  return result;
}
console.log(add(1,2,3,4,5)) // 15

// Anonymous Function
let calc = function(x, y){
  return x + y;
};
console.log(calc(4,5)) // 9

// Arrow Function
let pow = (num1, num2) => num1**num2;
console.log(pow(4,2)); // 16