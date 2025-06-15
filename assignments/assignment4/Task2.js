//Create an autoCurry(obj) function that takes an object with functions and returns a
// new object where all functions are curried (based on their fn.length).

const utils = {
    join3: (a, b, c) => `${a}-${b}-${c}`,
    add2: (x, y) => x + y,
};

const flexCurry = (fn, ...args) => {
    return function(...newArgs) {
        const allArgs = [...args, ...newArgs];
        if (allArgs.length >= fn.length) {
            return fn(...allArgs);
        } return flexCurry(fn, ...allArgs);
    }
}

const autoCurry = (obj) => {
    const result = {};

    for (const key in obj) {
        if (typeof obj[key] == "function") {
            result[key] = flexCurry(obj[key]);
        }
    }

    return result;
}

const curriedUtils = autoCurry(utils);
console.log(curriedUtils.join3("A")("B")("C"));  // A-B-C
console.log(curriedUtils.add2(5)(7));            // 12

