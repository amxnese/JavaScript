/* copyWithin() Method copies a sequence of array elements within the array, 
to and from specified positions, effectively modifying the array in place. 
Synatax : array.copyWithin(target, start=0, end=-1)
The copyWithin() method modifies the original array and returns a reference to the modified array.*/
let array = [1, 2, 3, 4, 5];

// Copy the sequence starting from index 0 to index 3
array.copyWithin(3, 0);
console.log(array); // Output: [1, 2, 3, 1, 2]

// Copy the sequence starting from index 0 to index 4
array.copyWithin(4, 0);
console.log(array); // Output: [1, 2, 3, 1, 1]

// Copy the sequence starting from index 1 to index 4
array.copyWithin(4, 1);
console.log(array); // Output: [1, 2, 3, 1, 2]

// Copy the sequence starting from index 2 to index 4
array.copyWithin(4, 2);
console.log(array); // Output: [1, 2, 3, 1, 3]
