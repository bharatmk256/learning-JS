const notes = ["Note1", "Note2", "Note3"];

// console.log(notes.pop());
// notes.push("My new note");

// console.log(notes.shift());
// console.log(notes.unshift('My first note'));

// notes.splice(1,1,'this is the new second iteam');

notes[2] = "This is new Note3";

notes.forEach(function(item, index) {
  console.log(index);
  console.log(item);
});

console.log(notes.length);
console.log(notes);
