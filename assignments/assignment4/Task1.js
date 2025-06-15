//Write a function flexCurry(fn) that curries any function of any arity.
// It should keep returning functions until enough arguments are collected.
function sum5(a, b, c, d, e) {
    return a + b + c + d + e;
}

const flexCurry = (fn) => {
    function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return (...next) => curried(...args, ...next);
    }
    return curried;
};

const curriedSum = flexCurry(sum5);
console.log(curriedSum(1)(2)(3)(4)(5));      // 15
console.log(curriedSum(1, 2)(3, 4, 5));      // 15

