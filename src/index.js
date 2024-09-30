//import { functionName } from './modules/moduleName';
import makeTodoItem from "./modules/todo-items";
import { labels } from "./modules/projects";
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
function deleteDefaultTask(task) {
    defaultProject.tasks.splice(task, 1);
};

function editDefaultProject() {
    // find ways to edit default list
};

layout();
defaultProjectDisplay(defaultProject.title, defaultProject.description, defaultProject.dueDate, defaultProject.tasks.length, defaultProject.priority, defaultProject.label, function(taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes, taskChecklist,taskDeleteBox, defaultTaskNumber) {
    const makeDefaultTask = new makeTodoItem(taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes, taskChecklist);
    console.log('the task was created!');
    assignByDefault(makeDefaultTask);
    
    console.log(`default task array: ${defaultProject.tasks.length}`);
    defaultTaskNumber.textContent = `${defaultProject.tasks.length}`;
    
    const taskDeleteButton = taskDeleteBox;
    taskDeleteButton.addEventListener("click", () => {
        const oldTask = defaultProject.tasks.findIndex(task =>
            task.title === taskTitle
        );
        
        if (oldTask !== -1) {
            deleteDefaultTask(oldTask);
        }
        console.log(`default task array: ${defaultProject.tasks.length}`);
        defaultTaskNumber.textContent = `${defaultProject.tasks.length}`;
    });
}, function(defaultTitle, defaultLabel, defaultNewDescription, defaultDueDate, defaultPriority) {
// function to edit the default list

    defaultProject.editTitle(defaultTitle);
    defaultProject.setLabel(defaultLabel);
    defaultProject.editDescription(defaultNewDescription);
    defaultProject.editDueDate(defaultDueDate);
    defaultProject.editPriority(defaultPriority);

    console.log(defaultProject);
});


projectDisplay();

console.log(defaultProject);