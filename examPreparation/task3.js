// ************ TASK DESCRIPTION ************

// Write a function sumArray(arr) that takes an array of numbers and returns their sum.
// USE DECLARATIVE PROGRAMMING. 

// Example of a player object:
// * console.log(sumArray([1, 2, 3, 4])); // Output: 10





// TODO
[1, 2, 3, 4]


/*function sumArray(arr) {
    arr.reduce(function(sum, num) {
        return sum += num
    }, 0)
}*/

const sumArray = (arr) => arr.reduce((acc, num) => acc += num, 0)



























// Below this comment any modification is prohibited. 
module.exports = sumArray;