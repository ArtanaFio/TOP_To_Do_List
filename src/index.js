//import { functionName } from './modules/moduleName';
import makeTodoItem from "./modules/todo-items";
import { labels } from "./modules/projects";
import { userUniqueLabels } from "./modules/projects";
import { makeLabels } from "./modules/projects";
import makeProject from "./modules/projects";
import { defaultProject } from "./modules/projects";
import { basicPageLayout } from "./modules/page_layout";
import { defaultProjectDueDateLogic, defaultProjectPriorityLogic, closeListLogic, priorityFormLogic } from "./modules/default_project_logic";
import { displayDefaultProject, displayDefaultProjectTitle, displayDefaultProjectDescription, displayDefaultProjectDueDate, displayDefaultProjectTasks, displayDefaultProjectTaskNumber, displayDefaultProjectPriority, editDefaultProjectDetails } from "./modules/default_project_DOM";
import { projectDisplay } from "./modules/new_project_DOM";

import './assets/styles/main.css';
import './assets/styles/project_list.css';

function everything(){
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
};
everything();

basicPageLayout();

// !!! 6/3/2025 REFACTORING!!!

displayDefaultProject(closeListLogic(defaultProject.tasks.length));
displayDefaultProjectTitle(defaultProject.title);
displayDefaultProjectDescription(defaultProject.description);
displayDefaultProjectDueDate(defaultProjectDueDateLogic(defaultProject.dueDate));
displayDefaultProjectTasks();
displayDefaultProjectTaskNumber(defaultProject.tasks.length);
displayDefaultProjectPriority(defaultProjectPriorityLogic(defaultProject.priority));
console.log(defaultProject.dueDate);
editDefaultProjectDetails(defaultProject.title, defaultProject.description, defaultProject.dueDate, priorityFormLogic(defaultProject.priority));

projectDisplay();

//console.log(defaultProject);