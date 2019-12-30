let todo = [
  {
    text: "todo1",
    completed: true
  },
  {
    text: "todo2",
    completed: false
  },
  {
    text: "todo3",
    completed: true
  },
  {
    text: "todo4",
    completed: false
  },
  {
    text: "todo5",
    completed: false
  }
];

// convert arry to arry of objects -> text, completed
// create function to remove a todo by text value

let deleteTodo = function(todo, todoTitle) {
  const index = todo.findIndex(function(doo, index) {
    return doo.text.toLowerCase() === todoTitle.toLowerCase();
  });
  if (index > 1) {
    todo.splice(index, 1);
  }
};

deleteTodo(todo, "todo4");

console.log(todo);
