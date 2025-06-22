//map 
//filter 
//reduce 
//reduceRight

const arr = [1, 2, 3, 4];

const test = arr.map(num => num*num);
const filterTest = arr.filter(num => num < 0);
const reduceTest = arr.reduce(sum, num => sum += num, 0);

console.log(arr);
console.log(test);
console.log(filterTest);