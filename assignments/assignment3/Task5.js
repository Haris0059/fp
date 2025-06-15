//Write a function flattenAndSum(arr) that flattens a nested array (depth = 2)
// and returns the sum of all numbers. Use declarative programming.

const flattenAndSum = (arr) => arr.flat(2).reduce(((sum, num) => sum += num), 0);

console.log(flattenAndSum([[1, 2], [3, 4, [5, 6]], 7])); // Output: 28