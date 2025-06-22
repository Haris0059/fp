// ************ TASK DESCRIPTION ************
//? Task 2: Pure registration validator

/*
* The following code validates registration data but relies on console logs and side effects.
* Your job is to:
* - Break it into composable pure functions.
* - Use Left or Right monads to represent success or failure.
* - Use currying to partially apply name and age validators.
*
* You must define:
* - validateName :: minLen => name => Left/Right
*   - must check if name is at least minLen characters long
* - validateAge :: minAge => age => Left/Right
*   - must check if age is 18 or above
* - validateRegistration :: Object → Left/Right
*   - should chain the two above validations
*   - if successful, should return "Registered: name (age)"
*/

function register(user) {
  if (!user.name || user.name.length < 2) {
    console.log("Invalid name");
    return;
  }
  if (user.age < 18) {
    console.log("User too young");
    return;
  }
  return `Registered: ${user.name} (${user.age})`;
}

const validateNameCurried = (minLen) => (name) => name && name.length >= minLen ? new Right(name) : new Left("Invalid name");

const validateAgeCurried = (minAge) => (age) => age >= minAge ? new Right(age) : new Left("User too young");

// Default versions used in tests (assuming minLen = 2, minAge = 18)
const validateName = validateNameCurried(2);
const validateAge = validateAgeCurried(18);

const validateRegistration = (obj) => {
  const nameResult = validateName(obj.name);
  if (nameResult.isLeft) return nameResult;

  const ageResult = validateAge(obj.age);
  if (ageResult.isLeft) return ageResult;

  return new Right(`Registered: ${obj.name} (${obj.age})`);
};





// ? OTHER MONADS (Left and Right) DEFINED BELOW
// Below this comment any modification is prohibited.

class Left {
  constructor(error) {
    this.error = error;
  }

  map(_) {
    return this;
  }

  chain(_) {
    return this;
  }

  unwrap() {
    return this.error;
  }

  toString() {
    return `Left(${this.error})`;
  }

  get isLeft() {
    return true;
  }
}

class Right {
  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return new Right(fn(this.value));
  }

  chain(fn) {
    return fn(this.value);
  }

  unwrap() {
    return this.value;
  }

  toString() {
    return `Right(${this.value})`;
  }

  get isLeft() {
    return false;
  }
}

module.exports = { validateName, validateAge, validateRegistration };
