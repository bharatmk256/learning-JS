let isAccountLocked = false;
let userRole = "Admin";

// if (isAccountLocked) {
//   console.log("Account is locked");
// } else {
//   console.log("Welcome");
// }

if (isAccountLocked) {
  console.log("Is account locked");
} else if (userRole === "Admin") {
  console.log("Welcome admin");
} else {
  console.log("welcome");
}

// challenge area

let temp = 25;

if (temp <= 20) {
  console.log("it's freezing outside");
} else if (temp >= 30) {
  console.log("it's hot outside");
} else {
  console.log("don'worry just go for it");
}
