const notes = [
  {
    title: "My next trip",
    body: "i would like to go to Sillicon velly"
  },
  {
    title: "Habbits to work on",
    body: "Excercise. Eating a bit better."
  },
  {
    title: "Office modification",
    body: "Get a new seat"
  }
];

const sortNotes = function(notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

// console.log(notes.pop());
// notes.push("My new note");

// console.log(notes.shift());
// console.log(notes.unshift('My first note'));

// notes.splice(1,1,'this is the new second iteam');

// notes[2] = "This is new Note3";

// notes.forEach(function(item, index) {
//   console.log(index);
//   console.log(item);
// });

// for (let i = 2; i >= 0; i--) {
//   console.log(`${i}. Hello world`);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//   console.log(`${notes[count]}`);
// }

const findNote = function(notes, noteTitle) {
  return notes.find(function(note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = function(notes, query) {
  return notes.filter(function(note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

// console.log(findNotes(notes, "work"));

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note, index) {
//       return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
//     return notes[index];
//   };

// const note = findNote(notes, "office modification");
// console.log(note);

// console.log(notes.length);
// console.log(notes);

// const index = notes.findIndex(function(note, index) {
//   console.log(note);
//   return note.title === "Habbits to work on";
// });
// console.log(index);


sortNotes(notes);
console.log(notes);