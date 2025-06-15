//Write a function sumArray(arr) that takes an array of numbers and returns their sum.
// Use declarative programming.

const sumArray = (arr) => arr.reduce(((sum, num) => sum += num), 0);

console.log(sumArray([1, 2, 3, 4])); // Output 10