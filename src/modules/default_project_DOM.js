import plus from '../assets/images/add.svg';
import check from '../assets/images/check_circle.svg';
import info from '../assets/images/info.svg';
import edit from '../assets/images/edit.svg';
import exit from '../assets/images/exit.svg';
import low from '../assets/images/green-priority.svg';
import mid from '../assets/images/yellow-priority.svg';
import high from '../assets/images/red-priority.svg';
import date from '../assets/images/date.svg';
import trash from '../assets/images/delete.svg';
import { getTodayDate, formatDateForInput, trim, easyFormatDate } from './default_project_utility';
import { defaultProjectLabelLogic, defaultProjectPriorityLogic, defaultProjectnoLabelLogic, defaultEmptyInputLogic } from './default_project_logic';

export function displayDefaultProject(closedMessageLogic) {
    const projectContainer = document.getElementById('project-container');    //makeElement(element, elementId, classes, text, parent)
    
    const defaultList = makeElement('div', 'default', 'list close-list', '', projectContainer);

    const defaultTopDiv = makeElement('div', 'default-top-div', 'list-top-div', '', defaultList);

    const infoBox = makeElement('div', '', '', '', defaultTopDiv);

    console.log("REMINDER: need to edit displayDefaultProjectPriority(instructions, priority) so that it can work with both list and task priorities and replace code unknown");

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

    const noTaskStatement = makeElement('div', '', 'no-task', 'No tasks have been added yet', taskContainer);

    const taskBlock = makeElement('div', 'add-task-box', 'invisible', '', taskContainer);

    const addSvg = makeIcon(plus, 'add-icon', taskBlock);
    addSvg.id = "default-addSvg";

    const dummyInput = makeElement('div', 'default-dummy-input', 'dummy-input', 'Enter a new task here', taskBlock);

    const defaultBottomDiv = makeElement('div', '', 'list-bottom-div', '', defaultList);

    const defaultTaskTracker = makeElement('div', 'default-task-tracker', 'track-task-box', '', defaultBottomDiv);

    const defaultTaskText  = makeElement('span', '', '', 'Tasks: ', defaultTaskTracker);

    const priorityBox = makeElement('div','priority-container', 'priority-box', '', defaultBottomDiv);

    function clickDefaultList() {
        defaultList.addEventListener('click', () => {
            defaultList.classList.add('open-list');
            defaultList.classList.remove('close-list');
            defaultEditBox.classList.remove('invisible');
            exitSvg.classList.remove('invisible');
            noTaskStatement.remove();
            show(taskBlock);
        });
        console.log(`show(taskBlock)`);
    };
    clickDefaultList();

    function clickExitIcon(closedMessageLogic) {
        defaultExitBox.addEventListener("click", (event) => {
            event.stopPropagation();
            defaultList.classList.add('close-list');
            defaultList.classList.remove('open-list');
            defaultEditBox.classList.add('invisible');
            exitSvg.classList.add('invisible');
            hide(taskBlock);

            if (closedMessageLogic) {
                console.log("there are no tasks");
                taskContainer.appendChild(noTaskStatement);
            } else {
                console.log(`arrayLength: ${arrayLength}`);
            }
        });
    };
    clickExitIcon(closedMessageLogic);

    return {priorityBox};
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
    const defaultTaskTracker = document.getElementById('default-task-tracker');
    const defaultTaskNumber = document.createElement('span');
    defaultTaskNumber.classList.add('array-number');
    defaultTaskNumber.textContent = arrayLength;
    defaultTaskTracker.appendChild(defaultTaskNumber);
    console.log("REMINDER: Why won't makeElement() work on defaultTaskNumber?");
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

export function createDefaultProjectEditForm(title, description, dueDate, priorityLogicFunction, getInputValues) {
    const defaultListEditButton = document.getElementById('default-edit-button');

    const defaultListFormContainer = makeElement('div', 'default-list-form-box', '', '', '');

    defaultListEditButton.addEventListener('click', () => {
        document.body.appendChild(defaultListFormContainer);
    });

    const defaultListForm = makeElement('form', 'default-form', '', '', defaultListFormContainer);

    const defaultListFieldset = makeElement('fieldset', '', '', '', defaultListForm);

    const defaultListLegend = makeElement('legend', 'default-legend', '', 'Edit Default List Details', defaultListFieldset);

    const defaultListTitleDiv = makeElement('div', '', 'property-div', '', defaultListFieldset);

    const defaultListTitleLabel = makeElement('label', '', '', 'Title:', defaultListTitleDiv);
    defaultListTitleLabel.for = "title";

    const defaultListTitleInput = makeElement('input', 'title', 'default-input', '', defaultListTitleDiv);
    defaultListTitleInput.value = title;
    
    const defaultListDescriptionDiv = makeElement('div', '', 'property-div', '', defaultListFieldset);

    const defaultListDescriptionLabel = makeElement('label', '', 'textarea-label', 'Description:', defaultListDescriptionDiv);
    defaultListDescriptionLabel.for = "description";

    const defaultListDescriptionInput = makeElement('textarea', 'description', '', '', defaultListDescriptionDiv);
    defaultListDescriptionInput.name = "task_description";
    defaultListDescriptionInput.value = description;

    const defaultListDueDateDiv = makeElement('div', '', 'property-div', '', defaultListFieldset);

    const defaultListDueDateLabel = makeElement('label', '', '', 'Due Date:', defaultListDueDateDiv);
    defaultListDueDateLabel.for = "due-date";

    const defaultListDueDateInput = makeElement('input', 'due-date', 'default-input', '', defaultListDueDateDiv);
    defaultListDueDateInput.type = "date";
    defaultListDueDateInput.name = "due_date";
    defaultListDueDateInput.min = getTodayDate();
    defaultListDueDateInput.value = getTodayDate();
    if (dueDate) {
        defaultListDueDateInput.value = formatDateForInput(dueDate);
    } else {
        defaultListDueDateInput.value = '';
    }

    const defaultListDoubleDiv = makeElement('div', '', 'property-div double-property-gap', '', defaultListFieldset);

    const defaultListLabelDiv = makeElement('div', '', 'half-property', '', defaultListDoubleDiv);

    const defaultListLabelLabel = makeElement('label', '', '', 'Label:', defaultListLabelDiv);
    defaultListLabelLabel.for = "label";

    const defaultListLabelDropBox = makeElement('select', 'label', 'drop-box', '', defaultListLabelDiv);

    const defaultListLabelNotOption = makeElement('option', '', '', 'select', defaultListLabelDropBox);
    defaultListLabelNotOption.value = '';
    defaultListLabelNotOption.disabled = true;
    const defaultListLabelOptions = ['None', 'Daily', 'Weekly', 'Monthly', 'Yearly'];
    
    defaultListLabelOptions.forEach(label => {
        const option = makeElement('option', '', 'drop-box-option', label, defaultListLabelDropBox);
        option.value = label;
    });

    const defaultListPriorityDiv = makeElement('div', '', 'half-property', '', defaultListDoubleDiv);

    const defaultListPriorityLabel = makeElement('label', '', '', 'Priority:', defaultListPriorityDiv);
    defaultListPriorityLabel.for = "priority";
    
    const defaultListPriorityDropBox = makeElement('select', 'priority', 'drop-box', '', defaultListPriorityDiv);

    const defaultListNotOption = makeElement('option', '', '', 'select', defaultListPriorityDropBox);
    defaultListNotOption.value = '';
    defaultListNotOption.disabled = true;
    
    const defaultListPriorityOptions = ['Minor', 'Important', 'Urgent'];
    defaultListPriorityOptions.forEach(priorityType => {
        const option = makeElement('option', '', 'drop-box-option', priorityType, defaultListPriorityDropBox);
        option.value = priorityType;
    });

    defaultListPriorityDropBox.selectedIndex = priorityLogicFunction;

    const defaultListEditFormButtonContainer = makeElement('div', '', 'submit-div shift-down', '', defaultListFieldset);

    const defaultListCancelButton = makeElement('button', 'default-edit-cancel', 'cancel-button cancel-unpressed', 'Cancel', defaultListEditFormButtonContainer);
    defaultListCancelButton.type = "button";

    defaultListCancelButton.addEventListener('mousedown', () => {
        defaultListCancelButton.classList.add('cancel-pressed');
        defaultListCancelButton.classList.remove('cancel-unpressed');
    });

    defaultListCancelButton.addEventListener('mouseup', () => {
        defaultListCancelButton.classList.add('cancel-unpressed');
        defaultListCancelButton.classList.remove('cancel-pressed');
        closeOnClick();
    });

    const DefaultListSubmitButton = makeElement('button', '', 'submit-button unpressed', 'Submit', defaultListEditFormButtonContainer);
    DefaultListSubmitButton.type = "button";

    DefaultListSubmitButton.addEventListener('mousedown', () => {
        DefaultListSubmitButton.classList.add('pressed');
        DefaultListSubmitButton.classList.remove('unpressed');
    });

    DefaultListSubmitButton.addEventListener('mouseup', () => {
        DefaultListSubmitButton.classList.add('unpressed');
        DefaultListSubmitButton.classList.remove('pressed');
        const editResults = editDefaultProjectDetails();
        console.log(editResults);
        getInputValues(editResults);
        
        if (editResults) {
            closeOnClick();
        }
    });
};

function editDefaultProjectDetails() {
    const defaultTitleInput = document.getElementById('title');
    const defaultDescriptionInput = document.getElementById('description');
    const defaultDueDateInput = document.getElementById('due-date');
    const defaultLabelInput = document.getElementById('label');
    const defaultPriorityInput = document.getElementById('priority');

    if (defaultEmptyInputLogic(defaultTitleInput.value)) {
        defaultTitleInput.classList.remove("input-task");
        defaultTitleInput.classList.add("invalid");
        defaultTitleInput.value = '';
        defaultTitleInput.placeholder = "Enter a valid list title";

        defaultTitleInput.addEventListener("blur", () => {
            console.log("You clicked outside the default title input");
            if (!defaultEmptyInputLogic(defaultTitleInput.value)) {
                defaultTitleInput.classList.remove("invalid");
                defaultTitleInput.classList.add("input-task");
                console.log(defaultTitleInput.value);
            }
        });
    } else {
        const defaultProjectTitle = document.getElementById('default-project-title');
        const newTitle = trim(defaultTitleInput.value);
        defaultProjectTitle.textContent = newTitle;

        const defaultDescription = document.getElementById('default-description');
        let newDescription;

        if (defaultEmptyInputLogic(defaultDescriptionInput.value)) {
            defaultDescriptionInput.placeholder = "Edit default list description";
            defaultDescription.textContent = "This list prefers to stay mysterious";
            newDescription = null;
        } else {
            defaultDescription.textContent = trim(defaultDescriptionInput.value);
            newDescription = trim(defaultDescriptionInput.value);
        }

        const defaultProjectDueDate = document.getElementById('default-due-date-text');
        let newDueDate;

        if (defaultEmptyInputLogic(defaultDueDateInput.value)) {
            defaultProjectDueDate.textContent = "no due date";
            newDueDate = null;
        } else {
            defaultProjectDueDate.textContent = easyFormatDate(defaultDueDateInput.value);
            newDueDate = easyFormatDate(defaultDueDateInput.value);
        }

        const newPriority = defaultPriorityInput.value;

        let newLabel;
        if (defaultProjectnoLabelLogic(defaultLabelInput.value)) {
            newLabel = null;
        } else {
            newLabel = defaultLabelInput.value;
        }

        const priorityBox = document.getElementById('priority-container');

        displayDefaultProjectPriority(defaultProjectPriorityLogic(defaultPriorityInput.value), priorityBox, defaultPriorityInput.value);
        displayDefaultProjectLabel(defaultProjectLabelLogic(defaultLabelInput.value));

        return [newTitle, newDescription, newDueDate, newPriority, newLabel];
    }
};

export function createTaskForm(priorityLogic) {
    const taskContainer = document.getElementById('default-project-task-container');
    const taskBlock = document.getElementById('add-task-box');
    const addSvg = document.getElementById('default-addSvg');
    const dummyInput = document.getElementById('default-dummy-input');
    const taskFormContainer = document.createElement('div');
    taskFormContainer.id = "default-task-form-box";

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

    const taskForm = document.createElement('form');
    taskForm.classList.add('task-form');
    taskFormContainer.appendChild(taskForm);

    const taskFieldset = document.createElement('fieldset');
    taskForm.appendChild(taskFieldset);

    const taskTitleDiv = document.createElement('div');
    taskTitleDiv.classList.add("task-bar");
    taskFieldset.appendChild(taskTitleDiv);

    const taskTitleLabel = document.createElement('label');
    taskTitleLabel.for = "task-title";
    taskTitleLabel.textContent = "Task:";
    taskTitleDiv.appendChild(taskTitleLabel);

    const taskTitleInput = document.createElement('input');
    taskTitleInput.type = "text";
    taskTitleInput.id = "task-title";
    taskTitleInput.classList.add("input-task");
    taskTitleInput.placeholder = "Enter a new task";
    taskTitleDiv.appendChild(taskTitleInput);

    const taskDescriptionDiv = document.createElement('div');
    taskDescriptionDiv.classList.add("task-property");
    taskFieldset.appendChild(taskDescriptionDiv);

    const taskDescriptionLabel = document.createElement('label');
    taskDescriptionLabel.for = "task-description";
    taskDescriptionLabel.textContent = "Description:";
    taskDescriptionLabel.classList.add("textarea-label");
    taskDescriptionDiv.appendChild(taskDescriptionLabel);

    const taskDescriptionInput = document.createElement('textarea');
    taskDescriptionInput.id = "task-description";
    taskDescriptionInput.name = "task_description";
    taskDescriptionInput.placeholder = "Enter description (optional)";
    taskDescriptionDiv.appendChild(taskDescriptionInput);

    const taskDoubleDiv = document.createElement('div');
    taskDoubleDiv.classList.add('property-div', 'double-property-gap');
    taskFieldset.appendChild(taskDoubleDiv);

    const taskDueDateDiv = document.createElement('div');
    taskDueDateDiv.classList.add("half-property");
    taskDoubleDiv.appendChild(taskDueDateDiv);

    const taskDueDateLabel = document.createElement('label');
    taskDueDateLabel.for = "task-due-date";
    taskDueDateLabel.textContent = "Due Date:";
    taskDueDateLabel.classList.add("half-label");
    taskDueDateDiv.appendChild(taskDueDateLabel);

    const taskDueDateInput = document.createElement('input');
    taskDueDateInput.type = "date";
    taskDueDateInput.id = "task-due-date";
    taskDueDateInput.name = "task_due_date";
    taskDueDateInput.classList.add('drop-box');
    taskDueDateInput.min = getTodayDate();
    taskDueDateDiv.appendChild(taskDueDateInput);

    const taskPriorityDiv = document.createElement('div');
    taskPriorityDiv.classList.add('half-property');
    taskDoubleDiv.appendChild(taskPriorityDiv);

    const taskPriorityLabel = document.createElement('label');
    taskPriorityLabel.for = "task-priority";
    taskPriorityLabel.textContent = "Priority:";
    taskPriorityDiv.appendChild(taskPriorityLabel);
    
    const taskPriorityDropBox = document.createElement('select');
    taskPriorityDropBox.id = "task-priority";
    taskPriorityDropBox.classList.add('drop-box');
    taskPriorityDiv.appendChild(taskPriorityDropBox);

    const taskNotOption = document.createElement('option');
    taskNotOption.textContent = "select";
    taskNotOption.value = '';
    taskNotOption.disabled = true;
    taskPriorityDropBox.appendChild(taskNotOption);

    const taskPriorityOptions = ['Minor', 'Important', 'Urgent'];
    taskPriorityOptions.forEach(priorityType => {
        const option = document.createElement('option');
        option.classList.add('drop-box-option');
        option.value = priorityType;
        option.textContent = priorityType;
        taskPriorityDropBox.appendChild(option);
    });

    const taskNotesDiv = document.createElement('div');
    taskNotesDiv.classList.add('task-property');
    taskFieldset.appendChild(taskNotesDiv);

    const taskNoteslabel = document.createElement('label');
    taskNoteslabel.for = "task-notes";
    taskNoteslabel.textContent = "Notes:";
    taskNoteslabel.classList.add('textarea-label');
    taskNotesDiv.appendChild(taskNoteslabel);

    const taskNotesInput = document.createElement('textarea');
    taskNotesInput.id = "task-notes";
    taskNotesInput.name = "task_notes";
    taskNotesInput.placeholder = "Enter notes (optional)";
    taskNotesDiv.appendChild(taskNotesInput);

    const taskChecklistDiv = document.createElement('div');
    taskChecklistDiv.classList.add("task-property");
    taskFieldset.appendChild(taskChecklistDiv);

    const taskChecklistLabel = document.createElement('label');
    taskChecklistLabel.for = "task-checklist";
    taskChecklistLabel.textContent = "Checklist:";
    taskChecklistLabel.classList.add("textarea-label");
    taskChecklistDiv.appendChild(taskChecklistLabel);

    const taskChecklistInput = document.createElement('textarea');
    taskChecklistInput.id = "task-checklist";
    taskChecklistInput.name = "checklist_items";
    taskChecklistInput.placeholder = "Enter checklist reminders (optional)";
    taskChecklistDiv.appendChild(taskChecklistInput);

    const taskFormButtonContainer = document.createElement('div');
    taskFormButtonContainer.classList.add('submit-div');
    taskFieldset.appendChild(taskFormButtonContainer);

    const taskCancelButton = document.createElement('button');
    taskCancelButton.id = 'default-edit-cancel';
    taskCancelButton.type = "button";
    taskCancelButton.classList.add('cancel-button', 'cancel-unpressed');
    taskCancelButton.textContent = "Cancel";
    taskFormButtonContainer.appendChild(taskCancelButton);

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
    console.log(`show(taskBlock)`)

    const taskSubmitButton = document.createElement('button');
    taskSubmitButton.type = "button";
    taskSubmitButton.classList.add('submit-button', 'unpressed');
    taskSubmitButton.textContent = "Submit";
    taskFormButtonContainer.appendChild(taskSubmitButton);

    taskSubmitButton.addEventListener('mousedown', () => {
        taskSubmitButton.classList.add('pressed');
        taskSubmitButton.classList.remove('unpressed');
    });

    taskSubmitButton.addEventListener('mouseup', () => {
        taskSubmitButton.classList.add('unpressed');
        taskSubmitButton.classList.remove('pressed');
        createNewTasks(priorityLogic);
    });

};

function createNewTasks(priorityLogic) {
    const taskTitleInput = document.getElementById('task-title');
    const taskDescriptionInput = document.getElementById('task-description');
    const taskDueDateInput = document.getElementById('task-due-date');
    const taskPriorityInput = document.getElementById('task-priority');
    const taskNotesInput = document.getElementById('task-notes');
    const taskChecklistInput = document.getElementById('task-checklist');

    if (defaultEmptyInputLogic(taskTitleInput.value)) {
        taskTitleInput.classList.remove("input-task");
        taskTitleInput.classList.add("invalid");
        taskTitleInput.value = '';
        taskTitleInput.placeholder = "Don't forget to record your task";

        taskTitleInput.addEventListener("blur", () => {
            console.log("You clicked outside the default title input");
            if (!defaultEmptyInputLogic(taskTitleInput.value)) {
                taskTitleInput.classList.remove("invalid");
                taskTitleInput.classList.add("input-task");
                console.log(taskTitleInput.value);
            }
        });
    } else {
        const taskFormContainer = document.getElementById('default-task-form-box');
        const taskListContainer = document.getElementById('default-project-task-list-box');
        const taskBox = makeElement('div', '', 'block task-box', '', taskListContainer);

        taskFormContainer.remove();

        const taskCompletionCircle = makeElement('div', '', 'circle', '', taskBox);

        const emptyCircle = makeElement('div', '', 'empty-circle', '', taskCompletionCircle);

        const checkSvg = makeIcon(check, 'check-icon');

        const taskTitle = makeElement('p', '', 'task-entry', trim(taskTitleInput.value), taskBox);

        taskCompletionCircle.addEventListener('click', () => {
            if (!taskTitle.classList.contains('strike-through')) {
                taskTitle.classList.add('strike-through');
                emptyCircle.remove();
                taskCompletionCircle.appendChild(checkSvg);
            } else {
                checkSvg.remove();
                taskCompletionCircle.appendChild(emptyCircle);
                taskTitle.classList.remove('strike-through');
            }
        });

        const pictographBox = makeElement('div', '', 'pictographs', '', taskBox);

        const taskPriorityBox = makeElement('div', 'priority-task', 'priority-box', '', pictographBox);

        taskBox.addEventListener('mouseenter', () => {
            taskPriorityBox.classList.add('white-out');
        });

        taskBox.addEventListener('mouseleave', () => {
            taskPriorityBox.classList.remove('white-out');
        });

        if(taskPriorityInput.value) {
            priorityLogic(taskPriorityInput.value).classesToRemove.forEach(cls => {
                taskPriorityBox.classList.remove(cls);
            });

            priorityLogic(taskPriorityInput.value).classesToAdd.forEach(cls => {
                taskPriorityBox.classList.add(cls);
            });

            while(taskPriorityBox.lastElementChild) {
                taskPriorityBox.removeChild(taskPriorityBox.lastElementChild);
            }

            priorityLogic(taskPriorityInput.value).svgsToAppend.forEach(key => {
                const svg = createSvg(key);
                if (svg) taskPriorityBox.appendChild(svg);
            });
        }
        
        const dateSvg = makeIcon(date, null, pictographBox);

        const datePopup = makeElement('div', '', 'date-popup invisible', '', pictographBox);
        if (taskDueDateInput.value) {
            datePopup.textContent = `Due Date: ${easyFormatDate(taskDueDateInput.value)}`;
        } else {
            datePopup.textContent = "No due date";
        }

        dateSvg.addEventListener('mouseover', () => {
            datePopup.classList.remove('invisible');
        });

        dateSvg.addEventListener('mouseleave', () => {
            datePopup.classList.add('invisible');
        });

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
        taskPriorityInput.selectedIndex = 0;
        taskNotesInput.value = "";
        taskChecklistInput.value = "";
    }
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

/*
function displayTaskPriority(instructions, priority) {
    const taskPriorityBox = document.getElementById('priority-task');

    instructions.classesToRemove.forEach(cls => {
        taskPriorityBox.classList.remove(cls);
    });

    instructions.classesToAdd.forEach(cls => {
        taskPriorityBox.classList.add(cls);
    });

    while(taskPriorityBox.lastElementChild) {
        taskPriorityBox.removeChild(taskPriorityBox.lastElementChild);
    }

    instructions.svgsToAppend.forEach(key => {
        const svg = createSvg(key);
        if (svg) taskPriorityBox.appendChild(svg);
    });
};
*/

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