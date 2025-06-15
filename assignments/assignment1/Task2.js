//Write a function "sumAll" using rest parameters that takes ANY number of arguments and returns their sum.

const sumAll = (...args) => args.reduce(((sum,num) => sum += num), 0);

