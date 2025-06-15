//Create a generic curry2f function that curries any two-argument function from left to right.

function announce(who, action) {
    return `${who} is ${action}`;
}

const curry2f = (fn) => (arg1) => (arg2) => fn(arg1, arg2);

const curriedAnnounce = curry2f(announce);
const annaAnnounce = curriedAnnounce("Anna");
console.log(annaAnnounce("teaching")); // Anna is teaching