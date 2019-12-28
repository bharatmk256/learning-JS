let name;

if (name === undefined) {
  console.log("The name is not defined");
} else {
  console.log(name);
}

// Undefined for functhin arguments

let square = function(num) {
  console.log(num);
};

let result = square();
console.log(result);

// Null as assigned value
let age = 27;
age = null;

console.log(age);
