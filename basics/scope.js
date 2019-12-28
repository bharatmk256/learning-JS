// Lexical scope (Static Scope)

// Globle Scope = Define outside of all code blocks {}
// Local Scope = Define inside of code block {}

// Globle Scope (varOne)
// Local Scope (varTwo)

let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo"; // this var is not accessible outside of the curly braces    (Local Scope)
  console.log(varTwo);
}

// console.log(varTwo);
