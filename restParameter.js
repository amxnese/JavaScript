function add(...nums){
  let result = 0;
  for(let i = 0; i < nums.length; i++){
    result += nums[i];
  }
  return result;
}
console.log(add(1,2,3,4,5)) // 15