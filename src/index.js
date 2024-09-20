//import { functionName } from './modules/moduleName';
import makeTodoItem from "./modules/todo-items";
import makeProject from "./modules/projects";
import { defaultProject } from "./modules/projects";
import { layout } from "./modules/ui";
import { defaultProjectDisplay } from "./modules/ui";
import { projectDisplay } from "./modules/ui";

import './assets/styles/main.css';

// apply default project
//console.log('Default list to store all unassigned tasks, called defaultProject:');
//console.log(defaultProject);

// example todo-item
//const task = new makeTodoItem("renovate deck", "Old deck needs to be fixed", "2024-09-15T18:00", "average priority", ["old deck boards cannot be reused because bottom is rotting", "prefer natural wood to synthetic", "need protective coating for wooden deck boards"], ["choose and buy wooden deck boards from Lowe's", "rent a truck to deliver deck boards", "remove old deckboards", "install new deck boards", "treat new deck boards with protective coating", "tint deck boards to achieved desired color and look"]);
//console.log(task);

//assignByDefault(task);

// function to add todo-items to defaultProject
function assignByDefault(task) {
    defaultProject.tasks.push(task);
};

// add todo-items to projects
// project.todoItems.push(todoItems);


// delete todo-item
// project.splice(todo-item, 1);

layout();
defaultProjectDisplay(defaultProject.title, defaultProject.description, defaultProject.tasks.length, defaultProject.priority, function(taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes, taskChecklist) {
    const makedefaultTask = new makeTodoItem(taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes, taskChecklist);
    console.log('the task was created!');
    assignByDefault(makedefaultTask);
    console.log(`default task array: ${defaultProject.tasks.length}`);
    // the UI is not updating the number of tasks in the default list array
}, function(defaultTaskNumber) {
    defaultTaskNumber.textContent = `${defaultProject.tasks.length}`;
});


projectDisplay();