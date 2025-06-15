//Compose URL Formatter
// Create three string functions:
// removeProtocol(str) – removes http:// or https:// if present
// toLowerCase(str) – converts the string to lowercase
// addWWW(str) – adds www. at the beginning of the string
// Use function composition to combine them into one function that prepares URLs for display.

const removeProtocol = (str) => str.replace("http://", "").replace("https://", "");

const toLowerCase = (str) => str.toLowerCase();

const addWWW = (str) => "www." + str;

const pipeline = (value) => addWWW(removeProtocol(toLowerCase(value)))

console.log(pipeline("https://functionalProgramming.com"))

// For input: "https://functionalProgramming.com"
// Output: "www.functionalprogramming.com"