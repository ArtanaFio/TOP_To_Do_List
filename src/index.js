//import { functionName } from './modules/moduleName';
import { makeTodoItem } from "./modules/todo-items";

// example todo-item
const task = new makeTodoItem("buy trash can", "Go to Lowe's to choose a new outdoor trash can", "8.4.2024", "medium", [], []);

console.log(task);
task.notes.push("trash can must fit inside the car");
console.log(`Task's notes: ${task.notes}`);
task.title = "new title";
console.log(task);