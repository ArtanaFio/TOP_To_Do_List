import plus from '../assets/images/add.svg';
import check from '../assets/images/check_circle.svg';
import checklist from '../assets/images/checklist.svg';
import date from '../assets/images/date.svg';
import edit from '../assets/images/edit.svg';
import exit from '../assets/images/exit.svg';
import high from '../assets/images/red-priority.svg';
import info from '../assets/images/info.svg';
import low from '../assets/images/green-priority.svg';
import mid from '../assets/images/yellow-priority.svg';
import notes from '../assets/images/notes.svg';
import trash from '../assets/images/delete.svg';

export function displayDefaultProject(noTasksLogic, arrayLength) {

    console.log('REMINDER: need to figure out how to remove "No tasks have been added yet" when there are tasks');
    
    const projectContainer = document.getElementById('project-container');
    const defaultList = makeElement('div', 'default', 'list close-list', '', projectContainer);
    const defaultTopDiv = makeElement('div', 'default-top-div', 'list-top-div', '', defaultList);
    const infoBox = makeElement('div', '', '', '', defaultTopDiv);
    const infoSvg = makeIcon(info, 'info-icon', infoBox);
    infoSvg.id = "default-info-icon";
    const editExitBox = makeElement('div', '', 'edit-exit-svg-pair', '', defaultTopDiv);
    const defaultEditBox = makeElement('div', '', 'invisible', '', editExitBox);
    const editSvg = makeIcon(edit, 'edit-icon', defaultEditBox);
    editSvg.id = "default-edit-button";
    const defaultExitBox = makeElement('div', '', '', '', editExitBox);
    const exitSvg = makeIcon(exit,['exit-icon', 'invisible'], defaultExitBox);
    const middleBox = makeElement('div', '', 'date-label-box', '', defaultList);
    const defaultListDueDateBox = makeElement('div', 'default-date-box', '', '', middleBox);
    const defaultListLabelBox = makeElement('div', 'default-label-box', '', '', middleBox);
    const taskContainer = makeElement('div', 'default-project-task-container', 'task-area', '', defaultList);
    const taskListContainer = makeElement('div', 'default-project-task-list-box', '', '', taskContainer);
    const noTaskStatement = makeElement('div', '', 'no-task', 'No tasks have been added yet', '');

    if (noTasksLogic) {
        taskContainer.appendChild(noTaskStatement);
    }
    
    const taskBlock = makeElement('div', 'add-task-box', 'invisible', '', taskContainer);
    const addSvg = makeIcon(plus, 'add-icon', taskBlock);
    addSvg.id = "default-addSvg";
    const dummyInput = makeElement('div', 'default-dummy-input', 'dummy-input', 'Enter a new task here', taskBlock);
    const defaultBottomDiv = makeElement('div', '', 'list-bottom-div', '', defaultList);
    const defaultTaskTracker = makeElement('div', 'default-task-tracker', 'track-task-box', '', defaultBottomDiv);
    const defaultTaskText  = makeElement('span', '', '', 'Tasks: ', defaultTaskTracker);
    const defaultTaskNumber = makeElement('span', 'default-task-number', 'array-number', '', defaultTaskTracker);
    const priorityBox = makeElement('div','priority-container', 'priority-box', '', defaultBottomDiv);
    
    clickDefaultList(defaultList, defaultEditBox, exitSvg, noTaskStatement, taskBlock);
    clickExitIcon(defaultExitBox, defaultList, defaultEditBox, exitSvg, taskBlock, noTasksLogic, taskContainer, noTaskStatement, arrayLength);

    return {priorityBox};
};

function clickDefaultList(defaultList, defaultEditBox, exitSvg, noTaskStatement, taskBlock) {
    defaultList.addEventListener('click', () => {
        defaultList.classList.add('open-list');
        defaultList.classList.remove('close-list');
        defaultEditBox.classList.remove('invisible');
        exitSvg.classList.remove('invisible');

        if (noTaskStatement) {
            noTaskStatement.remove();
        }
            
        show(taskBlock);
    });
    console.log(`show(taskBlock)`);
};

function clickExitIcon(defaultExitBox, defaultList, defaultEditBox, exitSvg, taskBlock, noTasksLogic, taskContainer, noTaskStatement, arrayLength) {
    defaultExitBox.addEventListener("click", (event) => {
        event.stopPropagation();
        defaultList.classList.add('close-list');
        defaultList.classList.remove('open-list');
        defaultEditBox.classList.add('invisible');
        exitSvg.classList.add('invisible');
        hide(taskBlock);

        if (noTasksLogic) {
            console.log("there are no tasks");
            taskContainer.appendChild(noTaskStatement);
            console.log(`arrayLength: ${arrayLength}`);
        } else {
            console.log(`arrayLength: ${arrayLength}`);
        }
        });
    };

export function displayDefaultProjectTitle(title) {
    const defaultTopDiv = document.getElementById('default-top-div');
    const defaultProjectTitle = makeElement('p', 'default-project-title', 'list-name', title, defaultTopDiv);
};

export function displayDefaultProjectDescription(description) {
    const defaultList = document.getElementById('default');
    const infoSvg = document.getElementById('default-info-icon');
    const defaultDescription = makeElement('div', 'default-description', 'description-pop-up invisible', description, defaultList);

    infoSvg.addEventListener('mouseover', () => {
        if (defaultList.classList.contains('open-list')) {
            defaultDescription.classList.remove('invisible');
        }
    });

    infoSvg.addEventListener('mouseleave', () => {
        if (defaultList.classList.contains('open-list')) {
            defaultDescription.classList.add('invisible');
        }
    });
};

export function displayDefaultProjectDueDate(formattedDueDate) {
    const defaultProjectDueDateBox = document.getElementById('default-date-box');
    const defaultProjectDueDate = makeElement('p', 'default-due-date-text', 'posted-date', formattedDueDate, defaultProjectDueDateBox);
};

export function displayDefaultProjectLabel(label) {
    const defaultListLabelBox = document.getElementById('default-label-box');
    while (defaultListLabelBox.lastElementChild) {
        defaultListLabelBox.removeChild(defaultListLabelBox.lastElementChild);
    }

    const listLabel = makeElement('span', '', label[1], label[0], defaultListLabelBox);
};

export function displayDefaultProjectTaskNumber(arrayLength) {
    const defaultTaskNumber = document.getElementById('default-task-number');
    defaultTaskNumber.textContent = arrayLength;
};

export function displayDefaultProjectPriority(instructions, container, priority) {
    if (!instructions) return;

    if (!container || !container.classList) {
        console.error('Container is missing or invalid:', container);
        return;
    }

    if (!instructions || !Array.isArray(instructions.classesToRemove)) {
        console.error('Instructions or classesToRemove missing:', instructions);
        return;
    }
    
    instructions.classesToRemove.forEach(cls => {
        if (cls) {
            container.classList.remove(cls);
        } else {
            console.error('Class name is invalid:', cls);
        }
    });

    instructions.classesToAdd.forEach(cls => {
        container.classList.add(cls);
    });

    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }

    instructions.svgsToAppend.forEach(key => {
        const svg = createSvg(key);
        if (svg) container.appendChild(svg);
    });

    const defaultList = document.getElementById('default');
    const defaultPriorityPopup = makeElement('div', 'default-priority-pop-up', 'priority-pop-up invisible', priority, container);
    
    container.addEventListener('mouseover', () => {
        if (defaultList.classList.contains('open-list')) {
            container.classList.add('pointer-cursor');
            defaultPriorityPopup.classList.remove('invisible');
        }
    });

    container.addEventListener('mouseleave', () => {
        if (defaultList.classList.contains('open-list')) {
            container.classList.remove('pointer-cursor');
            defaultPriorityPopup.classList.add('invisible');
        }
    });

};

export function createDefaultProjectEditForm(title, description, dueDate, getDateFunction, formatInputDate, priorityLogicFunction, emptyLogic,cut, easyDateFormat, noLabelLogic, labelLogic, priorityLogic, getInputValues) {
    const defaultListEditButton = document.getElementById('default-edit-button');
    const defaultListFormContainer = makeElement('div', 'default-list-form-box', '', '', '');

    defaultListEditButton.addEventListener('click', () => {
        document.body.appendChild(defaultListFormContainer);
    });

    const defaultListForm = makeElement('form', 'default-form', '', '', defaultListFormContainer);
    const defaultListFieldset = makeElement('fieldset', '', '', '', defaultListForm);
    const defaultListLegend = makeElement('legend', 'default-legend', '', 'Edit Default List Details', defaultListFieldset);
    const defaultListTitleDiv = makeElement('div', '', 'property-div', '', defaultListFieldset);
    const defaultListTitleLabel = makeLabelsOrInputsOrButtons('label', '', 'title', '', '', '', '', 'Title:', defaultListTitleDiv);
    const defaultListTitleInput = makeElement('input', 'title', 'default-input', '', defaultListTitleDiv);
    defaultListTitleInput.value = title;
    const defaultListDescriptionDiv = makeElement('div', '', 'property-div', '', defaultListFieldset);
    const defaultListDescriptionLabel = makeLabelsOrInputsOrButtons('label', '', 'description', '', '', '', 'textarea-label', 'Description:', defaultListDescriptionDiv);
    const defaultListDescriptionInput = makeLabelsOrInputsOrButtons('textarea', 'description', '', 'task_description', '', '', '', '', defaultListDescriptionDiv);
    defaultListDescriptionInput.value = description;
    const defaultListDueDateDiv = makeElement('div', '', 'property-div', '', defaultListFieldset);
    const defaultListDueDateLabel = makeLabelsOrInputsOrButtons('label', '', 'due-date', '', '', '', '', 'Due Date:', defaultListDueDateDiv);
    const defaultListDueDateInput = makeLabelsOrInputsOrButtons('input', 'due-date', '', 'due_date', '', 'date', 'default-input', '', defaultListDueDateDiv);
    defaultListDueDateInput.min = getDateFunction;
    defaultListDueDateInput.value = getDateFunction;

    if (dueDate) {
        defaultListDueDateInput.value = formatInputDate(dueDate);
    } else {
        defaultListDueDateInput.value = '';
    }

    const defaultListDoubleDiv = makeElement('div', '', 'property-div double-property-gap', '', defaultListFieldset);
    const defaultListLabelDiv = makeElement('div', '', 'half-property', '', defaultListDoubleDiv);
    const defaultListLabelLabel = makeLabelsOrInputsOrButtons('label', '', 'label', '', '', '', '', 'Label:', defaultListLabelDiv);
    const defaultListLabelDropBox = makeElement('select', 'label', 'drop-box', '', defaultListLabelDiv);
    const defaultListLabelNotOption = makeNotAnOption(defaultListLabelDropBox);
    const defaultListLabelOptions = ['None', 'Daily', 'Weekly', 'Monthly', 'Yearly'];
    
    defaultListLabelOptions.forEach(label => {
        const option = makeDropDownOptions(label, defaultListLabelDropBox);
    });

    const defaultListPriorityDiv = makeElement('div', '', 'half-property', '', defaultListDoubleDiv);
    const defaultListPriorityLabel = makeLabelsOrInputsOrButtons('label', '', 'priority', '', '', '', '', 'Priority:', defaultListPriorityDiv);
    const defaultListPriorityDropBox = makeElement('select', 'priority', 'drop-box', '', defaultListPriorityDiv);
    const defaultListNotOption = makeNotAnOption(defaultListPriorityDropBox);
    const defaultListPriorityOptions = ['Minor', 'Important', 'Urgent'];

    defaultListPriorityOptions.forEach(priorityType => {
        const option = makeDropDownOptions(priorityType, defaultListPriorityDropBox);
    });

    defaultListPriorityDropBox.selectedIndex = priorityLogicFunction;

    const defaultListEditFormButtonContainer = makeElement('div', '', 'submit-div shift-down', '', defaultListFieldset);
    const defaultListCancelButton = makeLabelsOrInputsOrButtons('button', 'default-edit-cancel', '', '', '', 'button', 'cancel-button cancel-unpressed', 'Cancel', defaultListEditFormButtonContainer);

    defaultListCancelButton.addEventListener('mousedown', () => {
        defaultListCancelButton.classList.add('cancel-pressed');
        defaultListCancelButton.classList.remove('cancel-unpressed');
    });

    defaultListCancelButton.addEventListener('mouseup', () => {
        defaultListCancelButton.classList.add('cancel-unpressed');
        defaultListCancelButton.classList.remove('cancel-pressed');
        closeOnClick();
    });

    const defaultListSubmitButton = makeLabelsOrInputsOrButtons('button', '', '', '', '', 'button', 'submit-button unpressed', 'Submit', defaultListEditFormButtonContainer);

    defaultListSubmitButton.addEventListener('mousedown', () => {
        defaultListSubmitButton.classList.add('pressed');
        defaultListSubmitButton.classList.remove('unpressed');
    });

    defaultListSubmitButton.addEventListener('mouseup', () => {
        defaultListSubmitButton.classList.add('unpressed');
        defaultListSubmitButton.classList.remove('pressed');
        const editResults = editDefaultProjectDetails(emptyLogic, cut, easyDateFormat, noLabelLogic, labelLogic, priorityLogic);
        
        if (Array.isArray(editResults)) {
            getInputValues(editResults);
            closeOnClick();
        }
    });
};

function editDefaultProjectDetails(emptyLogic, cut, easyDateFormat, noLabelLogic, labelLogic, priorityLogic) {
    const defaultTitleInput = document.getElementById('title');
    const defaultDescriptionInput = document.getElementById('description');
    const defaultDueDateInput = document.getElementById('due-date');
    const defaultLabelInput = document.getElementById('label');
    const defaultPriorityInput = document.getElementById('priority');

    if (emptyLogic(defaultTitleInput.value)) {
        defaultTitleInput.classList.remove("input-task");
        defaultTitleInput.classList.add("invalid");
        defaultTitleInput.value = '';
        defaultTitleInput.placeholder = "Enter a valid list title";

        defaultTitleInput.addEventListener("blur", () => {
            console.log("You clicked outside the default title input");
            if (!emptyLogic(defaultTitleInput.value)) {
                defaultTitleInput.classList.remove("invalid");
                defaultTitleInput.classList.add("input-task");
                console.log(defaultTitleInput.value);
            }
        });
    } else {
        const defaultProjectTitle = document.getElementById('default-project-title');
        const newTitle = cut(defaultTitleInput.value);
        defaultProjectTitle.textContent = newTitle;

        const defaultDescription = document.getElementById('default-description');
        let newDescription;

        if (emptyLogic(defaultDescriptionInput.value)) {
            defaultDescriptionInput.placeholder = "Edit default list description";
            defaultDescription.textContent = "This list prefers to stay mysterious";
            newDescription = null;
        } else {
            defaultDescription.textContent = cut(defaultDescriptionInput.value);
            newDescription = cut(defaultDescriptionInput.value);
        }

        const defaultProjectDueDate = document.getElementById('default-due-date-text');
        let newDueDate;

        if (emptyLogic(defaultDueDateInput.value)) {
            defaultProjectDueDate.textContent = "no due date";
            newDueDate = null;
        } else {
            defaultProjectDueDate.textContent = easyDateFormat(defaultDueDateInput.value);
            newDueDate = easyDateFormat(defaultDueDateInput.value);
        }

        const newPriority = defaultPriorityInput.value;

        let newLabel;
        if (noLabelLogic(defaultLabelInput.value)) {
            newLabel = null;
        } else {
            newLabel = defaultLabelInput.value;
        }

        const priorityBox = document.getElementById('priority-container');

        displayDefaultProjectPriority(priorityLogic(defaultPriorityInput.value), priorityBox, defaultPriorityInput.value);
        displayDefaultProjectLabel(labelLogic(defaultLabelInput.value));

        return [newTitle, newDescription, newDueDate, newPriority, newLabel];
    }
};

export function createTaskForm(emptyLogic, getDateFunction, cut, easyDateFormat, priorityLogic, getTaskValues) {
    const taskContainer = document.getElementById('default-project-task-container');
    const taskBlock = document.getElementById('add-task-box');
    const addSvg = document.getElementById('default-addSvg');
    const dummyInput = document.getElementById('default-dummy-input');
    const taskFormContainer = makeElement('div', 'default-task-form-box', '', '', '');

    addSvg.addEventListener('click', (event) => {
        event.stopPropagation();
        hide(taskBlock);
        taskContainer.appendChild(taskFormContainer);
    });

    dummyInput.addEventListener('click', (event) => {
        event.stopPropagation();
        hide(taskBlock);
        taskContainer.appendChild(taskFormContainer);
    });
    console.log(`hide taskBlock`);

    const taskForm = makeElement('form', '', 'task-form', '', taskFormContainer);
    const taskFieldset = makeElement('fieldset', '', '', '', taskForm);
    const taskTitleDiv = makeElement('div', '', 'task-bar', '', taskFieldset);
    const taskTitleLabel = makeLabelsOrInputsOrButtons('label', '', 'task-title', '', '', '', '', 'Task:', taskTitleDiv);
    const taskTitleInput = makeLabelsOrInputsOrButtons('input', 'task-title', '', '', 'Enter a new task', 'text', 'input-task', '', taskTitleDiv);
    const taskDescriptionDiv = makeElement('div', '', 'task-property', '', taskFieldset);
    const taskDescriptionLabel = makeLabelsOrInputsOrButtons('label', '', 'task-description', '', '', '', 'textarea-label', 'Description:', taskDescriptionDiv);
    const taskDescriptionInput = makeLabelsOrInputsOrButtons('textarea', 'task-description', '', 'task_description', 'Enter description (optional)', '', '', '', taskDescriptionDiv);
    const taskDoubleDiv = makeElement('div', '', 'property-div double-property-gap', '', taskFieldset);
    const taskDueDateDiv = makeElement('div', '', 'half-property', '', taskDoubleDiv);
    const taskDueDateLabel = makeLabelsOrInputsOrButtons('label', '', 'task-due-date', '', '', '', 'half-label', 'Due Date:', taskDueDateDiv);
    const taskDueDateInput = makeLabelsOrInputsOrButtons('input', 'task-due-date', '', 'task_due_date', '', 'date', 'drop-box', '', taskDueDateDiv);
    taskDueDateInput.min = getDateFunction;
    const taskPriorityDiv = makeElement('div', '', 'half-property', '', taskDoubleDiv);
    const taskPriorityLabel = makeLabelsOrInputsOrButtons('label', '', 'task-priority', '', '', '', '', 'Priority:', taskPriorityDiv);
    const taskPriorityDropBox = makeElement('select', 'task-priority', 'drop-box',  '', taskPriorityDiv);
    const taskNotOption = makeNotAnOption(taskPriorityDropBox)
    const taskPriorityOptions = ['Minor', 'Important', 'Urgent'];

    taskPriorityOptions.forEach(priorityType => {
        const option = makeDropDownOptions(priorityType, taskPriorityDropBox);
    });

    const taskNotesDiv = makeElement('div', '', 'task-property', '', taskFieldset);
    const taskNoteslabel = makeLabelsOrInputsOrButtons('label', '', 'task-notes', '', '', '', 'textarea-label', 'Notes:', taskNotesDiv);
    const taskNotesInput = makeLabelsOrInputsOrButtons('textarea', 'task-notes', '', 'task_notes', 'Enter notes (optional)', '', '', '', taskNotesDiv);
    const taskChecklistDiv = makeElement('div', '', 'task-property', '', taskFieldset);
    const taskChecklistLabel = makeLabelsOrInputsOrButtons('label', '', '', '', '', '', 'textarea-label', 'Checklist:', taskChecklistDiv);
    const taskChecklistInput = makeLabelsOrInputsOrButtons('textarea', 'task-checklist', '', 'checklist_items', 'Enter checklist reminders (optional)', '', '', '', taskChecklistDiv);
    const taskFormButtonContainer = makeElement('div', '', 'submit-div', '', taskFieldset);
    const taskCancelButton = makeLabelsOrInputsOrButtons('button', 'default-edit-cancel', '', '', '', 'button', 'cancel-button cancel-unpressed', 'Cancel', taskFormButtonContainer);

    taskCancelButton.addEventListener('mousedown', () => {
        taskCancelButton.classList.add('cancel-pressed');
        taskCancelButton.classList.remove('cancel-unpressed');
    });

    taskCancelButton.addEventListener('mouseup', () => {
        taskCancelButton.classList.add('cancel-unpressed');
        taskCancelButton.classList.remove('cancel-pressed');
        taskFormContainer.remove();
        show(taskBlock);
    });
    console.log(`show(taskBlock)`);

    const taskSubmitButton = makeLabelsOrInputsOrButtons('button', '', '', '', '', 'button', 'submit-button unpressed', 'Submit', taskFormButtonContainer);

    taskSubmitButton.addEventListener('mousedown', () => {
        taskSubmitButton.classList.add('pressed');
        taskSubmitButton.classList.remove('unpressed');
    });

    taskSubmitButton.addEventListener('mouseup', () => {
        taskSubmitButton.classList.add('unpressed');
        taskSubmitButton.classList.remove('pressed');
        const taskResults = createNewTasks(emptyLogic, cut, easyDateFormat, priorityLogic);

        if (Array.isArray(taskResults)) {
            console.log(taskResults);
            getTaskValues(taskResults);
        }
    });
};

function createNewTasks(emptyLogic, cut, easyDateFormat, priorityLogic) {
    const taskTitleInput = document.getElementById('task-title');
    const taskDescriptionInput = document.getElementById('task-description');
    const taskDueDateInput = document.getElementById('task-due-date');
    const taskPriorityInput = document.getElementById('task-priority');
    const taskNotesInput = document.getElementById('task-notes');
    const taskChecklistInput = document.getElementById('task-checklist');

    if (emptyLogic(taskTitleInput.value)) {
        taskTitleInput.classList.remove("input-task");
        taskTitleInput.classList.add("invalid");
        taskTitleInput.value = '';
        taskTitleInput.placeholder = "Don't forget to record your task";

        taskTitleInput.addEventListener("blur", () => {
            if (!emptyLogic(taskTitleInput.value)) {
                taskTitleInput.classList.remove("invalid");
                taskTitleInput.classList.add("input-task");
            }
        });
    } else {
        const taskFormContainer = document.getElementById('default-task-form-box');
        taskFormContainer.remove();

        const taskTitle = cut(taskTitleInput.value);
        const taskDescription = taskDescriptionInput.value;
        const taskPriority = taskPriorityInput.value;
        const taskDueDate = taskDueDateInput.value;
        const taskNotes = taskNotesInput.value;
        const taskChecklist = taskChecklistInput.value;
        const taskListContainer = document.getElementById('default-project-task-list-box');
        const taskBox = makeElement('div', '', 'block task-box', '', taskListContainer);
        const taskCompletionCircle = makeElement('div', '', 'circle', '', taskBox);
        const emptyCircle = makeElement('div', '', 'empty-circle', '', taskCompletionCircle);
        const checkSvg = makeIcon(check, 'check-icon');
        const taskTitleText = makeElement('p', '', 'task-entry', taskTitle, taskBox);

        taskCompletionCircle.addEventListener('click', () => {
            if (!taskTitleText.classList.contains('strike-through')) {
                taskTitleText.classList.add('strike-through');
                emptyCircle.remove();
                taskCompletionCircle.appendChild(checkSvg);
            } else {
                checkSvg.remove();
                taskCompletionCircle.appendChild(emptyCircle);
                taskTitleText.classList.remove('strike-through');
            }
        });

        const pictographBox = makeElement('div', '', 'pictographs', '', taskBox);
        const taskPriorityBox = makeElement('div', 'priority-task', 'white-out priority-box icon-box', '', pictographBox);

        if(taskPriority) {
            displayTaskPriority(priorityLogic, taskPriority, taskPriorityBox);
        }

        const taskDescriptionBox = makeElement('div', '', 'icon-box', '', pictographBox);

        if (taskDescription) {
            const taskDescriptionSvg = makeIcon(info, 'full-icon', taskDescriptionBox);
        }

        const taskDescriptionPopup = makeElement('div', '', 'property-popup centered', taskDescription, taskDescriptionBox);
        const taskDateBox = makeElement('div', '', 'icon-box', '', pictographBox);

        if (taskDueDate) {
            const dateSvg = makeIcon(date, 'full-icon', taskDateBox);
        }

        const datePopup = makeElement('div', '', 'property-popup', '', taskDateBox);
        const dateHeader = makeElement('p', '', 'bold', 'Due Date:', datePopup);
        const taskDueDateText = makeElement('p', '', '', easyDateFormat(taskDueDate), datePopup);
        const taskNotesBox = makeElement('div', '', 'icon-box', '', pictographBox);

        if (taskNotes) {
            const notesSvg = makeIcon(notes, 'full-icon', taskNotesBox);
        }

        const taskNotesPopup = makeElement('div', '', 'property-popup', '', taskNotesBox);
        const notesheader = makeElement('p', '', 'bold', 'Notes:', taskNotesPopup);
        const taskNotesText = makeElement('p', '', 'centered', taskNotes, taskNotesPopup);
        const taskChecklistBox = makeElement('div', '', 'icon-box', '', pictographBox);

        if (taskChecklist) {
            const checklistSvg = makeIcon(checklist, 'full-icon', taskChecklistBox);
        }

        const taskChecklistPopup = makeElement('div', '', 'property-popup', '', taskChecklistBox);
        const checklistHeader = makeElement('p', '', 'bold', 'Checklist:', taskChecklistPopup);
        const taskChecklistText = makeElement('p', '', 'centered', taskChecklist, taskChecklistPopup);
        const taskEditBox = makeElement('div', '', 'invisible', '', pictographBox);
        const editSvg = makeIcon(edit, 'edit-icon', taskEditBox);
        const taskDeleteBox = makeElement('div', '', 'invisible', '', taskBox);
        const deleteSvg = makeIcon(trash, 'delete-icon', taskDeleteBox);

        taskBox.addEventListener('mouseover', () => {
            taskDeleteBox.classList.remove('invisible');
            taskEditBox.classList.remove('invisible');
        });

        taskBox.addEventListener('mouseleave', () => {
            taskDeleteBox.classList.add('invisible');
            taskEditBox.classList.add('invisible');
        });

        taskDeleteBox.addEventListener('click', () => {
            taskBox.remove();
        });

        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
        taskDueDateInput.value = "";
        taskPriorityInput.selectedIndex = 1;
        taskNotesInput.value = "";
        taskChecklistInput.value = "";
        
        return [taskTitle, taskDescription, taskPriority, taskDueDate, taskNotes, taskChecklist];
    }
};

function displayTaskPriority(logic, value, container) {
    logic(value).classesToRemove.forEach(cls => {
        container.classList.remove(cls);
    });

    logic(value).classesToAdd.forEach(cls => {
        container.classList.add(cls);
    });

    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }

    logic(value).svgsToAppend.forEach(key => {
        const svg = createSvg(key);
        if (svg) container.appendChild(svg);
    });

    const defaultPriorityPopup = makeElement('div', 'default-priority-pop-up', 'task-priority-popup', value, container);
    
};

function makeLabelsOrInputsOrButtons(element, elementId, forLabel, inputName, inputPlaceholder, inputType, classes, text, parent) {
    const genElement = document.createElement(element);
    if (elementId) {
        genElement.id = elementId;
    }
    if (forLabel) {
        genElement.for = forLabel;
    }
    if (inputName) {
        genElement.name = inputName
    }
    if (inputPlaceholder) {
        genElement.placeholder = inputPlaceholder;
    }
    if (inputType) {
        genElement.type = inputType;
    }
    if (classes) {
        genElement.classList.add(...classes.split(' '));
    }
    if (text) {
        genElement.textContent = text;
    }
    if (parent) {
        parent.appendChild(genElement);
    }
    return genElement;
};

function makeElement(element, elementId, classes, text, parent) {
    const genElement = document.createElement(element);
    if (elementId) {
        genElement.id = elementId;
    }
    if (classes) {
        genElement.classList.add(...classes.split(' '));
    }
    if (text) {
        genElement.textContent = text;
    }
    if (parent) {
        parent.appendChild(genElement);
    }
    return genElement;
};

function makeDropDownOptions(optionValue, parent) {
    const option = document.createElement('option');
    option.value = optionValue;
    option.classList.add('drop-box-option');
    option.textContent = optionValue;
    parent.appendChild(option);
    return option;
};

function makeNotAnOption(parent) {
    const option = document.createElement('option');
    option.value = '';
    option.disabled = true;
    option.textContent = 'select';
    parent.appendChild(option);
    return option;
};

function makeIcon(svgName, className, parentElement) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgName, 'image/svg+xml');
    const svg = doc.querySelector('svg');
    if (className) {
        if (Array.isArray(className)) {
            svg.classList.add(...className);
        } else {
            svg.classList.add(className);
        }
    }
    if (parentElement) {
        parentElement.appendChild(svg);
    }
    return svg;
};

function createSvg(key) {
    const parser = new DOMParser();
    let doc, svg;
    
    switch (key) {
        case 'low-1':
            doc = parser.parseFromString(low, 'image/svg+xml');
            svg = doc.querySelector('svg');
            svg.classList.add('first-position');
            return svg;
        case 'mid-1':
            doc = parser.parseFromString(mid, 'image/svg+xml');
            svg = doc.querySelector('svg');
            svg.classList.add('first-position');
            return svg;
        case 'mid-2':
            doc = parser.parseFromString(mid, 'image/svg+xml');
            svg = doc.querySelector('svg');
            svg.classList.add('third-position');
            return svg;
        case 'high-1':
            doc = parser.parseFromString(high, 'image/svg+xml');
            svg = doc.querySelector('svg');
            svg.classList.add('first-position');
            return svg;
        case 'high-2':
            doc = parser.parseFromString(high, 'image/svg+xml');
            svg = doc.querySelector('svg');
            svg.classList.add('second-position');
            return svg;
        case 'high-3':
            doc = parser.parseFromString(high, 'image/svg+xml');
            svg = doc.querySelector('svg');
            svg.classList.add('third-position');
            return svg;
        default:
            return null;
    }
};

function closeOnClick() {
    const defaultListFormContainer = document.getElementById('default-list-form-box');
    defaultListFormContainer.remove();
};

function show(element) {
    element.classList.remove('invisible');
    element.classList.add('flexing');
};

function hide(element) {
    element.classList.remove('flexing');
    element.classList.add('invisible');
};