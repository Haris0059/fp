//Memoization is an optimization technique that stores computed results to avoid redundant calculations and improve performance.
// The goal of this task is to implement memoization for the Fibonacci sequence.
// Note: The function does NOT need to be pure. The focus is on performance optimization, not function purity.
// Implement memoization using a global cache variable.
// const fib = n => {
//     if (n in cache) {
//         return cache[n];
//     }
//
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         cache[n] = fib(n - 2) + fib(n - 1);
//         return cache[n];
//     }
// };

const cache = [];

const fib = n => {
    if (n in cache) {
        return cache[n];
    }

    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        cache[n] = fib(n-2) + fib(n-1);
        return cache[n];
    }
}