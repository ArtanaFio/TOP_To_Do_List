//import { functionName } from './modules/moduleName';
import makeTodoItem from './modules/todo-items';
import makeProject from './modules/projects';
import { defaultProject } from './modules/projects';
import { basicPageLayout } from './modules/page_layout';
import { getTodayDate, formatDateForInput, trim, easyFormatDate } from './modules/default_project_utility';
import { defaultProjectDueDateLogic, defaultProjectLabelLogic, defaultProjectPriorityLogic, emptyArrayLogic, oneTaskLogic, priorityFormLogic, defaultProjectnoLabelLogic, defaultEmptyInputLogic, greaterThan } from './modules/default_project_logic';
import { displayDefaultProject, displayDefaultProjectTitle, displayDefaultProjectDescription, displayDefaultProjectDueDate, displayDefaultProjectLabel, displayDefaultProjectTaskNumber, displayDefaultProjectPriority, updateTaskStatement, createDefaultProjectEditForm, createTaskForm, makeEditTaskButton, makeDeleteTaskButton } from './modules/default_project_DOM';
import { projectDisplay } from './modules/new_project_DOM';

import './assets/styles/main.css';
import './assets/styles/project_list.css';

console.log("REMINDER: after fixing all, unenclose this code from 'function everything()'");

// function to add todo-items to any project
function addTasksToList(list, task) {
    list.tasks.push(task);
};

// delete todo-item from project
function deleteTaskFromList(list, task) {
    list.tasks.splice(task, 1); // (task, 1), where task = index where I want to start removing items, and 1 is the number of items I want to remove.
};

function giveArrayIndex(thisArray, item) {
    thisArray.indexOf(item);
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

const defaultProjectUI = displayDefaultProject(emptyArrayLogic(defaultProject.tasks.length), defaultProject.tasks.length);
displayDefaultProjectTitle(defaultProject.title);
displayDefaultProjectDescription(defaultProject.description);
displayDefaultProjectDueDate(defaultProjectDueDateLogic(defaultProject.dueDate));
displayDefaultProjectLabel(defaultProjectLabelLogic(defaultProject.label));
displayDefaultProjectPriority(defaultProjectPriorityLogic(defaultProject.priority), defaultProjectUI.priorityBox, defaultProject.priority);
displayDefaultProjectTaskNumber(defaultProject.tasks.length);
updateTaskStatement(emptyArrayLogic(defaultProject.tasks.length), oneTaskLogic(defaultProject.tasks.length));

createDefaultProjectEditForm(defaultProject.title, defaultProject.description, defaultProject.dueDate, getTodayDate(), formatDateForInput, priorityFormLogic(defaultProject.priority), defaultEmptyInputLogic, trim, easyFormatDate, defaultProjectnoLabelLogic, defaultProjectLabelLogic, defaultProjectPriorityLogic, function(newProperties) {
    editProject(defaultProject, newProperties);
    console.log(defaultProject);
});

createTaskForm(defaultEmptyInputLogic, getTodayDate(), trim, easyFormatDate, defaultProjectPriorityLogic, function(taskPropertiesAndElements) {
    // taskProperties[i] where 0 = title | 1 = description | 2 = priority, 3 = due date | 4 = notes | 5 = checklist
    let index = defaultProject.tasks.length;
    const taskProperties = taskPropertiesAndElements[0];
    const newTask = new makeTodoItem(index, taskProperties.title, taskProperties.description, taskProperties.dueDate, taskProperties.priority, taskProperties.notes, taskProperties.checklist);
    console.log(newTask);

    addTasksToList(defaultProject, newTask);
    console.log(`You've created ${newTask.title} with index ${index}`);
    const taskBox = taskPropertiesAndElements[1].taskBox;
    const pictographBox = taskPropertiesAndElements[1].pictographBox;

    makeEditTaskButton(taskBox, pictographBox);
    const taskDeleteButton = makeDeleteTaskButton(taskBox);

    taskDeleteButton.addEventListener('click', () => {
        deleteTaskFromList(defaultProject, newTask.index);
        const tasks = defaultProject.tasks;
        tasks.forEach(task => {
            if (greaterThan(task.index, newTask.index)) {
                task.index--;
            }
        });

        if (emptyArrayLogic(defaultProject.tasks.length)) {
            console.log(`no tasks in the array`);
        } else {
            console.log(defaultProject.tasks);
        }

        displayDefaultProjectTaskNumber(defaultProject.tasks.length);
        updateTaskStatement(emptyArrayLogic(defaultProject.tasks.length), oneTaskLogic(defaultProject.tasks.length));
    });

    displayDefaultProjectTaskNumber(defaultProject.tasks.length);
    updateTaskStatement(emptyArrayLogic(defaultProject.tasks.length), oneTaskLogic(defaultProject.tasks.length));
    console.log(defaultProject.tasks);
});


projectDisplay();

console.log(defaultProject);