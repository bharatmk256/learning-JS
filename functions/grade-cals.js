// Students score, total possible score
// 15/20 -> you got a C (75%)!
// A = 90-100, B = 80-89, C = 70-79, D = 60-69, F = 0-59

// let score = 10;

let getGrade = function(score, total = 100) {
  let percentage = (score / total) * 100;
  let letterGrade = "";
  if (percentage >= 90 && percentage <= 100) {
    letterGrade = "A";
  } else if (percentage >= 80 && percentage < 90) {
    letterGrade = "B";
  } else if (percentage >= 70 && percentage < 80) {
    letterGrade = "C";
  } else if (percentage >= 60 && percentage < 70) {
    letterGrade = "D";
  } else if (percentage >= 0 && percentage < 60) {
    letterGrade = "D";
  }
  console.log(`You got a ${letterGrade} with (${percentage}%)!`);
};

getGrade(22, 20);
