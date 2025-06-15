//Analyze the given function to determine whether it is pure. If it is impure, refactor it into a pure function. If it is already pure, retain its original form.
// In either case, you will need to create the function under the "TODO" comment.


function sayHello(){
  console.log("Hello world");
}

// TODO

const sayHello = () => "Hello world";
console.log(sayHello());