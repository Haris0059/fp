//Rewrite the following into pointfree style:

const compose = (...fns) => (x) => fns.reduce(((value, fn) => fn(value)), x)

const isShortString = (str) => str.length < 8;
const getLength = (s) => s.length;