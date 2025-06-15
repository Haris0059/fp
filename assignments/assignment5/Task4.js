//Process a given array of integers with the following pipeline:
// Keep only numbers divisible by 5
// Subtract 2 from each remaining number
// Find their average
// Use tap (or a custom debug function) to log intermediate steps

const keepDivisibleBy5 = (arr) => arr.filter(num => num % 5 == 0);

const subtract2 = (arr) => arr.map(num => num - 2)

const average = (arr) => arr.reduce(((sum,num) => sum += num), 0) / arr.length;

const pipeline = (...fns) => (value) => fns.reduce(((acc, fn) => fn(acc)), value);

const final = pipeline(keepDivisibleBy5, subtract2, average);

console.log(final([3, 7, 8, 10, 15]));

//Example input: [3, 7, 8, 10, 15]
// Expected output:
// Divisible by 5: [10, 15]
// After subtracting 2: [8, 13]
// Average: 10.5