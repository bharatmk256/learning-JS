// Multiple argumest

let add = function(a, b, c) {
  return a + b + c;
};

let result = add(10, 20, 20);
// console.log(result);

// Default arguments

let getScoreText = function(name = "Anonymous", score = 30) {
  return `Name: ${name}\nScore: ${score}`; // this is template String
  //   return "Name: " + name + "\nScore: " + score;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge area

let getTip = function(total, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent}% tip on $${total} would be $${tip}`;
};

console.log(getTip(100, 0.25));

// template Strings
let name = "Bharat";
let age = 21;
console.log(`Hey, my name is ${name}! I am ${age} years old`);
