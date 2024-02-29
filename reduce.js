// Syntax : reduce(CallBackFunction(Accumulator, Current Val, Current index, Source Array){}, Initial Value=0)
arr1 = [1, 2, 3, 4, 5];
let result = arr1.reduce(function (acc, cur, i, src) {
  return acc + cur;
}, 0);
console.log(result); // 15

// Longest Word
let words = ["jay", "clark", "micheal", "leonardo"];
let Longest = words.reduce(function (acc, cur) {
  return acc.length > cur.length ? acc : cur;
});
console.log(Longest); // leonardo

// Remove Odd Character
let letters = ["A", "M", "$", "I", "$", "N"];
let word = letters.filter(function (ele) {
  return !ele.startsWith("$");
}).reduce(function(acc, cur){
  return `${acc}${cur}`;
});
console.log(word); // AMIN