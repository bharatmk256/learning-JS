let todo = ["todo1", "todo2", "todo3", "todo4", "todo5"];

todo.splice(2, 1);
todo.push("hello world");
todo.shift();

console.log(`You have ${todo.length} in your to-do list!`);
// console.log(todo);

todo.forEach(function(item, index) {
  console.log(`${index + 1}. ${item}`);
});
