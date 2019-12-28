// function = inpt, code, output

let greetUser = function() {
  console.log("Wecome to function");
};

// greetUser();

let square = function(num) {
  let result = num * num;
  return result;
};

// console.log(square(3));
// console.log(square(10));

// challenge area

let converter = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

console.log(converter(68));
