// ************ TASK DESCRIPTION ************
//? Robust Functional Form Processor
/*
*   In this assignment, you will build a fully functional form processor that uses
*   functional error handling concepts: Maybe, Either, Try, and AsyncTry.
*
*   Your processor must:
*   - Extract optional fields safely using the Maybe monad
*   - Validate inputs using the Either monad
*   - Safely parse risky values using Try
*   - Submit the form using an async-safe AsyncTry handler
*
*   You must implement and use the following monads:
*
*   MAYBE MONAD
*   - Maybe.of(x) → Just(x) if x is not null/undefined, otherwise Nothing()
*   - Just(x):
*       - .map(fn) → transforms the value and wraps in Just again
*       - .chain(fn) → flatMaps and avoids nesting
*       - .unwrap() → returns raw value
*       - .toString() → Just(value)
*   - Nothing():
*       - .map(fn) → returns itself
*       - .chain(fn) → returns itself
*       - .unwrap() → returns null
*       - .toString() → "Nothing"
*
*   EITHER MONAD
*   - Either.of(left, right): returns Left(left) if right is null/undefined, otherwise Right(right)
*   - Left(x):
*       - .map(fn), .chain(fn) → return itself
*       - .fold(errFn, _) → calls errFn(x)
*       - .toString() → Left(x)
*   - Right(x):
*       - .map(fn), .chain(fn) → apply fn and wrap in Right
*       - .fold(_, successFn) → calls successFn(x)
*       - .toString() → Right(x)
*
*   TRY MONAD
*   - Try.of(() => riskyExpr, msg) → returns Either:
*       - Right(value) if no error
*       - Left(msg) if error occurs
*
*   ASYNCTRY MONAD
*   - AsyncTry.of(asyncFn, msg) → returns a Promise of:
*       - Right(result) if successful
*       - Left(msg) if rejected or exception
*


*   REQUIRED UTILITIES:
*
*   - getOptional(key)
*       - A higher-order function that takes a key and returns a function expecting an object.
*       - When passed an object (e.g. formData), it safely retrieves the value under the key
*         and returns a Maybe (Just if found, Nothing if not).
*
*   - validateEmail(email)
*       - Validates the format of an email using regex (regex within if statement provided).
*       - Returns Right(email) if valid, or Left("Invalid email") otherwise.
*
*   - validatePassword(password)
*       - Checks that the password is defined and has at least 6 characters.
*       - Returns Right(password) if valid, or Left("Password too short") otherwise.
*
*   - parseAge(value)
*       - Attempts to parse the input string into an integer using Try.of().
*       - Returns Right(number) if successful, or Left("Invalid number") if parsing fails.
*
*   - checkAge(age)
*       - Checks that the age is >= 18.
*       - Returns Right(age) if valid, or Left("Too young") if underage.
*
*   - Main Function: processForm(formData, sendToAPI)
*       - Extracts 'email', 'password', and 'age' fields.
*       - Validates fields using Either and Try monads.
*       - If all checks pass, logs a success message.
*       - Uses AsyncTry to safely call the async sendToAPI function and logs the result.
*
*   Your final processor must demonstrate:
*       - Safe optional field handling (Maybe)
*       - Chained validation logic (Either)
*       - Risk-managed parsing (Try)
*       - Async error-safe submission (AsyncTry)
*
*? Example usage:
*? getOptional("email")({ email: "a@b.com" }) → Just("a@b.com")
*? validateEmail("a@b.com") → Right("a@b.com")
*? Try.of(() => parseInt("abc")) → Left("Invalid format")
*? await AsyncTry.of(() => sendData(data), "Failed") → Right(response) or Left("Failed")
*/

// TODO: IMPLEMENT MONADS AND PROCESSING BELOW ↓↓

class Maybe {
  static of(x) {
    if (x !== null || x !== undefined) {
      return new Just(x);
    } return new Nothing();
  }
}

class Just extends Maybe {
  constructor(x) {
    super();
    this.x = x;
  }

  map(fn) {
    return Maybe.of(fn(this.x));
  }

  chain(fn) {
    return fn(this.x);
  }

  unwrap() {
    return this.x;
  }

  toString() {
    return `${this.constructor.name}(${this.x})`;
  }
}

class Nothing extends Maybe {
  constructor(x) {
    super();
    this.x = null;
  }

  map(_) {
    return this;
  }

  chain(_) {
    return this;
  }

  unwrap() {
    return this.x;
  }

  toString() {
    return "Nothing";
  }
}


class Left {
  constructor(x) {
    this.x = x;
  }

  map(_) {
    return this;
  }

  chain(_) {
    return this;
  }
  fold (errFn, _) {
    return errFn(this.x);
  }

  toString() {
    return `Left(${this.x})`;
  }
}

class Right {
  constructor(x) {
    this.x = x;
  }

  map(fn) {
    return new Right(fn(this.x));
  }

  chain(fn) {
    return fn(this.x);
  }

  fold(_, successFn) {
    return new Right(successFn(this.x));
  }

  toString() {
    return `Right(${this.x})`;
  }
}

class Either {
  static of (left,right) {
    if (right === null || right === undefined) {
      return new Left(left);
    } return new Right(right);
  }
}


class Try {
  static of (fn, msg) {
    try {
      const value = fn();
      return new Right(value);
    } catch (_) {
      return new Left(msg);
    } 
    

  }
}

const AsyncTry = {
  of: async (fn, msg) => {
    try {
      const result = await fn();
      return Right(result); 
    } catch (_) {
      return new Left(msg)
    }
  }
};

const getOptional = (key) => (obj) => Maybe.of(obj[key]); 

function validateEmail(email){
  // this if statement will verify if the email format is correct (in that case returns true)
  if(/\S+@\S+\.\S+/.test(email)){
    return new Right(email);
  } return new Left("Invalid email");
}
  
const validatePassword = (pwd) => pwd.length() > 6 ? new Right(pwd) : new Left("Password too short");

function checkAge(age){
  if (age >= 18) {
    return Right(age);
  } return Left("Too young");
}


function parseAge(strAge) {
    return Try.of(() => {
      const parsed = parseInt(strAge);

      if (isNaN(parsed)) {
        throw new Error();
      }

      return parsed;

    }, "Invalid number");
    // to parse a string to an integer you can use parseInt(stringNumber) function
    // result of that function can be NaN if the function didn't parse correctly
    // you can use built-in function "isNaN(resultOfParsing)" to check that
}
  

//Main Function: processForm(formData, sendToAPI)
//*       - Extracts 'email', 'password', and 'age' fields.
//*       - Validates fields using Either and Try monads.
//*       - If all checks pass, logs a success message.
//*       - Uses AsyncTry to safely call the async sendToAPI function and logs the result.
async function processForm(formData, sendToAPI) {
    // TODO check if fields exist in the formData

    // TODO chain all validations (email validation, password validation, age parsing, age validation)
  const result =

  console.log(result);

    
    // TODO use AsyncTry and parameter "sendToAPI" function to simulate async function call, save it into "submission"
  const submission = 

  console.log(submission.toString());
}

















// Below this comment any modification is prohibited.
module.exports = {
  Maybe, Just, Nothing,
  Either, Left, Right,
  Try,
  AsyncTry,
  getOptional,
  validateEmail,
  validatePassword,
  checkAge,
  parseAge,
  processForm
};