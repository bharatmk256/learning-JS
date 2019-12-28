let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
  /*drive: function(title) {
    this.title = title;
  }*/
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal Farm";
// myBook.drive(30);

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area

// name, age, location

let person = {
  name: "bharat",
  age: 21,
  location: "Ahmedabad",
  travel: function(destination) {
    this.location = destination;
  }
};

console.log(
  `Hey my name is ${person.name} i am ${person.age} years old i am living in ${person.location}`
);
person.travel("Gandhinagar");
console.log(
  `Hey my name is ${person.name} i am ${person.age} years old and now i am living in ${person.location}`
);
