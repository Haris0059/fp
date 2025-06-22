// ************ TASK DESCRIPTION ************

// Create a curried function multiplyCurried that allows partial application.
// Expected output of console.log(multiplyCurried(2)(5)) is 10.

// TODO Your code here

/*function multiplyCurried(a) {
    return function(b) {
        return a * b;
    }
}*/

const multiplyCurried = (a) => (b) => a * b;

















// Below this comment any modification is prohibited. 
module.exports = multiplyCurried;
