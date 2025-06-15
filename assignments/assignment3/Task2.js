//Given an array of objects representing people, write a function extractNames(arr)
// that returns an array containing only the names. Use declarative programming.

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];

const extractNames = (arr) => arr.map(people => people.name);

console.log(extractNames(people)); // Output: ["Alice", "Bob"]