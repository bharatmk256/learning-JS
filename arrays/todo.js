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

const getThingsToDo = function(todos) {
  return todos.filter(function(todo, index) {
    return todo.completed === false;
  });
};

const sortTodos = function(todo) {
  todo.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todo);
console.log(todo);

// console.log(getThingsToDo(todo));

// deleteTodo(todo, "todo4");
// console.log(todo);
