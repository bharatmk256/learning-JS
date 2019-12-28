/* Globle scope (converter, tempOne, tempTwo)
    Local Scope(fahrenheit, celsius)
      Local Scope (isFreezing)
*/
let converter = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;

  if (celsius <= 0) {
    let isFreezing = true;
  }
  return celsius;
};

let tempOne = converter(32);
let tempTwo = converter(68);

console.log(tempOne);
console.log(tempTwo);
