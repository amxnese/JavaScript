// map Syntax : array.map(function(element, index:opt, array:opt), thisArg:opt);

let myArr = [1,2,3,4,5];
// Creating a New Array That Has all arr Elements Incremnted by One

// Regular Approach
let newArr = [];
for(let i = 0; i < myArr.length; i++){
  newArr.push(++myArr[i]);
}
console.log(newArr); // [2, 3, 4, 5, 6]

// Using a map with a Pre Defined Function
function inc(num){
  return num++;
}
let newArr1 = myArr.map(inc);
console.log(newArr1); // [2, 3, 4, 5, 6]

// Using a map With an Anonymous Function
let newArr2 = myArr.map(function(num){
  return num++;
});
console.log(newArr2); // [2, 3, 4, 5, 6]

// Using a map With an Arrow Function
let newArr3 = myArr.map(num => num++);
console.log(newArr3); // [2, 3, 4, 5, 6]