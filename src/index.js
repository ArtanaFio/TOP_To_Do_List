//import { functionName } from './modules/moduleName';
import makeTodoItem from './modules/todo-items';
import makeProject from './modules/projects';
import { defaultProject } from './modules/projects';
import { basicPageLayout } from './modules/page_layout';
import { getTodayDate, formatDateForInput, trim, easyFormatDate } from './modules/default_project_utility';
import { defaultProjectDueDateLogic, defaultProjectLabelLogic, defaultProjectPriorityLogic, emptyArrayLogic, priorityFormLogic, defaultProjectnoLabelLogic, defaultEmptyInputLogic } from './modules/default_project_logic';
import { displayDefaultProject, displayDefaultProjectTitle, displayDefaultProjectDescription, displayDefaultProjectDueDate, displayDefaultProjectLabel, displayDefaultProjectTaskNumber, displayDefaultProjectPriority, createDefaultProjectEditForm, createTaskForm} from './modules/default_project_DOM';
import { projectDisplay } from './modules/new_project_DOM';

import './assets/styles/main.css';
import './assets/styles/project_list.css';

console.log("REMINDER: after fixing all, unenclose this code from 'function everything()'");

// apply default project
//console.log('Default list to store all unassigned tasks, called defaultProject:');
//console.log(defaultProject);

// example todo-item
//const task = new makeTodoItem("renovate deck", "Old deck needs to be fixed", "2024-09-15T18:00", "average priority", ["old deck boards cannot be reused because bottom is rotting", "prefer natural wood to synthetic", "need protective coating for wooden deck boards"], ["choose and buy wooden deck boards from Lowe's", "rent a truck to deliver deck boards", "remove old deckboards", "install new deck boards", "treat new deck boards with protective coating", "tint deck boards to achieved desired color and look"]);
//console.log(task);

// function to add todo-items to any project
function addTasksToList(list, task) {
    list.tasks.push(task); // project.todoItems.push(todoItems);
};

// delete todo-item from project
function deleteTaskFromList(list, task) {
    list.tasks.splice(task, 1); // project.splice(todo-item, 1);
};

// edit any project
function editProject(list, properties) {
    list.editTitle(properties[0]);
    list.editDescription(properties[1]);
    list.editDueDate(properties[2]);
    list.editPriority(properties[3]);
    list.editLabel(properties[4]);
};

basicPageLayout();


// !!! 6/3/2025 REFACTORING!!!


const defaultProjectUI = displayDefaultProject(emptyArrayLogic(defaultProject.tasks.length), defaultProject.tasks.length);
displayDefaultProjectTitle(defaultProject.title);
displayDefaultProjectDescription(defaultProject.description);

displayDefaultProjectDueDate(defaultProjectDueDateLogic(defaultProject.dueDate));

displayDefaultProjectLabel(defaultProjectLabelLogic(defaultProject.label));
displayDefaultProjectTaskNumber(defaultProject.tasks.length);
displayDefaultProjectPriority(defaultProjectPriorityLogic(defaultProject.priority), defaultProjectUI.priorityBox, defaultProject.priority);

createDefaultProjectEditForm(defaultProject.title, defaultProject.description, defaultProject.dueDate, getTodayDate(), formatDateForInput, priorityFormLogic(defaultProject.priority), defaultEmptyInputLogic, trim, easyFormatDate, defaultProjectnoLabelLogic, defaultProjectLabelLogic, defaultProjectPriorityLogic, function(newProperties) {
    editProject(defaultProject, newProperties);
    console.log(defaultProject);
});

createTaskForm(defaultEmptyInputLogic, getTodayDate(), trim, easyFormatDate, defaultProjectPriorityLogic, function(taskProperties) {
    // taskProperties[i] where 0 = title | 1 = description | 2 = priority, 3 = due date | 4 = notes | 5 = checklist
    addTasksToList(defaultProject, taskProperties);
    console.log(`default project tasks: ${defaultProject.tasks}`);
    console.log(`Default Project task array length: ${defaultProject.tasks.length}`);
    displayDefaultProjectTaskNumber(defaultProject.tasks.length);

});


projectDisplay();

console.log(defaultProject);