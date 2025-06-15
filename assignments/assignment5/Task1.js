// Implement three functions:
// removeVowels(str) – removes all vowels from a string (a, e, i, o, u)
// reverse(str) – reverses the string
// addPeriod(str) – adds a period "." to the end of the string
// Use pipelining to create a new function that performs these operations in order:
// 	removeVowels, then reverse, then addPeriod.

const removeVowels =  (str) => {
    const vowels = ["a", "e", "i", "o", "u"];

    return str.split("")
        .filter(letter => !vowels.includes(letter))
        .reduce(((result, letter) => result += letter), "");
}

const reverse = (str) => str.split("").reduceRight(((result, letter) => result += letter), "");


const addPeriod = (str) => str + ".";

const pipeline = (value) =>  addPeriod(reverse(removeVowels(value)));
console.log(pipeline("haris"))

