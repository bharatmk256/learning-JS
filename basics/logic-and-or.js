let temp = 65;

// logical and operator = true if both side are true. false otherwise
// logical or operator = true if one side is true. false otherwise

if (temp >= 60 && temp <= 90) {
  console.log("it's pretty nice out");
} else if (temp <= 0 && temp >= 120) {
  console.log("go outside");
} else {
  console.log("Eh do what you want");
}

// chalenge area

let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Here is your vegan");
} else if (isGuestOneVegan || isGuestOneVegan) {
  console.log("Make sure to offer some vegan");
} else {
  console.log("Anything");
}
