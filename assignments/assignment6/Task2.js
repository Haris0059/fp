// ************ TASK DESCRIPTION ************
//? Wrapper

/*
*   Write a function `withLogging` that:
*   - Takes a function `fn` as input
*   - Returns a **new function** that:
*     - Logs the arguments it was called with
*     - Logs the returned result
*   - Does not modify the original function
*
*? Example:
*? const add = (x, y) => x + y;
*? const loggedAdd = withLogging(add);
*? loggedAdd(2, 3); // Logs: "Calling with: [2, 3]", "Result: 5"
*/

const withLogging = (fn) => (...args) => {
    console.log("arguments: " + args);
    let result = fn(...args);
    console.log("results: " + result);
}

const add = (x, y) => x + y;
const loggedAdd = withLogging(add);
