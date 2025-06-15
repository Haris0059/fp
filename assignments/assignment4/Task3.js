//Create a function announce(who, action) that returns "who is action".
// Then, write a function partialWho(who) that partially applies the who
// argument using arrow functions and returns a new function waiting for action.

const announce = (who, action) => `${who} is ${action}`;

const partialWho = (who) => (action) => announce(who,action);

const announceAlice = partialWho("Alice");
console.log(announceAlice("coding")); // Alice is coding