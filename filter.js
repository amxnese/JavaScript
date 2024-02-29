let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(element) {
  return !(element % 2);
}

// Creating a new array That Contains The Even Numbers in nums array

// Regular Approach
let nums1 = [];
for (let i = 0; i < nums.length; i++) {
  if (isEven(nums[i])) {
    nums1.push(nums[i]);
  }
}
console.log(nums1); // [2,4,6,8]

// Using Filter
let nums2 = nums.filter(isEven);
console.log(nums2); // [2,4,6,8]

// Using Filter With anonymous Arrow Function
let nums3 = nums.filter(num => !(num % 2));
console.log(nums3);
