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
import { formatDateForInput, trim, easyFormatDate } from './default_project_utility';
import { defaultProjectLabelLogic, defaultProjectPriorityLogic, defaultProjectnoLabelLogic, defaultEmptyInputLogic } from './default_project_logic';

export function displayDefaultProject(closedMessageLogic) {
    const projectContainer = document.getElementById('project-container');
    
    const defaultList = document.createElement('div');
    defaultList.id = "default";
    defaultList.classList.add('list');
    projectContainer.appendChild(defaultList);

    const defaultTopDiv = document.createElement('div');
    defaultTopDiv.id = "default-top-div";
    defaultTopDiv.classList.add('list-top-div');
    defaultList.appendChild(defaultTopDiv);

    const infoBox = document.createElement('div');
    defaultTopDiv.appendChild(infoBox);

    const parser = new DOMParser();

    const infoDoc = parser.parseFromString(info, 'image/svg+xml');
    const infoSvg = infoDoc.querySelector('svg');
    infoSvg.id = "default-info-icon";
    infoSvg.classList.add('info-icon');
    infoBox.appendChild(infoSvg);

    const editExitBox = document.createElement('div');
    editExitBox.classList.add('edit-exit-svg-pair');
    defaultTopDiv.appendChild(editExitBox);

    const defaultEditBox = document.createElement('div');
    defaultEditBox.classList.add('invisible');
    editExitBox.appendChild(defaultEditBox);

    const editDoc = parser.parseFromString(edit, 'image/svg+xml');
    const editSvg = editDoc.querySelector('svg');
    editSvg.id = "default-edit-button";
    editSvg.classList.add('edit-icon');
    defaultEditBox.appendChild(editSvg);

    const defaultExitBox = document.createElement('div');
    editExitBox.appendChild(defaultExitBox);

    const exitDoc = parser.parseFromString(exit, 'image/svg+xml');
    const exitSvg = exitDoc.querySelector('svg');
    exitSvg.classList.add('exit-icon', 'invisible');
    defaultExitBox.appendChild(exitSvg);

    const middleBox = document.createElement('div');
    middleBox.classList.add('date-label-box');
    defaultList.appendChild(middleBox);

    const defaultListDueDateBox = document.createElement('div');
    defaultListDueDateBox.id = "default-date-box";
    middleBox.appendChild(defaultListDueDateBox);

    const defaultListLabelBox = document.createElement('div');
    defaultListLabelBox.id = "default-label-box";
    middleBox.appendChild(defaultListLabelBox);

    const taskContainer = document.createElement('div');
    taskContainer.id = "default-project-task-container";
    taskContainer.classList.add('task-area');
    defaultList.appendChild(taskContainer);

    const noTaskStatement = document.createElement('div');
    noTaskStatement.classList.add('no-task');
    noTaskStatement.textContent = "No tasks have been added yet";
    taskContainer.appendChild(noTaskStatement);

    const taskBlock = document.createElement('div');
    taskBlock.id = "add-task-box";

    const addDoc = parser.parseFromString(plus, 'image/svg+xml');
    const addSvg = addDoc.querySelector('svg');
    addSvg.classList.add('add-icon');
    taskBlock.appendChild(addSvg); 

    const dummyInput = document.createElement('div');
    dummyInput.classList.add('dummy-input');
    dummyInput.textContent = "Enter a new task here";
    taskBlock.appendChild(dummyInput);

    const defaultBottomDiv = document.createElement('div');
    defaultBottomDiv.classList.add('list-bottom-div');
    defaultList.appendChild(defaultBottomDiv);

    const defaultTaskTracker = document.createElement('div');
    defaultTaskTracker.id = "default-task-tracker";
    defaultTaskTracker.classList.add('track-task-box');
    defaultBottomDiv.appendChild(defaultTaskTracker);

    const defaultTaskText  = document.createElement('span');
    defaultTaskText.textContent = "Tasks: ";
    defaultTaskTracker.appendChild(defaultTaskText);

    const priorityBox = document.createElement('div');
    priorityBox.id = "priority-container";
    priorityBox.classList.add('priority-box');
    defaultBottomDiv.appendChild(priorityBox);

    function clickDefaultList() {
        defaultList.addEventListener('click', () => {
            defaultList.style.flex = "1";
            defaultList.style.cursor = "default";
            defaultEditBox.classList.remove('invisible');
            exitSvg.classList.remove('invisible');
            noTaskStatement.remove();
            taskContainer.appendChild(taskBlock);
        });
    };
    clickDefaultList();

    function clickExitIcon(closedMessageLogic) {
        defaultExitBox.addEventListener("click", (event) => {
            event.stopPropagation();
            defaultList.style.flex = "0";
            defaultList.style.cursor = "pointer";
            defaultEditBox.classList.add('invisible');
            exitSvg.classList.add('invisible');
            taskBlock.remove();

            if (closedMessageLogic) {
                console.log("there are no tasks");
                taskContainer.appendChild(noTaskStatement);
            } else {
                console.log(`arrayLength: ${arrayLength}`);
            }
        });
    };
    clickExitIcon(closedMessageLogic);
};

export function displayDefaultProjectTitle(title) {
    const defaultTopDiv = document.getElementById('default-top-div');
    const defaultProjectTitle = document.createElement('p');
    defaultProjectTitle.id = "default-project-title";
    defaultProjectTitle.classList.add('list-name');
    defaultProjectTitle.textContent = title;
    defaultTopDiv.appendChild(defaultProjectTitle);
};

export function displayDefaultProjectDescription(description) {
    const defaultList = document.getElementById('default');
    const infoSvg = document.getElementById('default-info-icon');
    const defaultDescription = document.createElement('div');
    defaultDescription.id = "default-description";
    defaultDescription.classList.add('description', 'invisible');
    defaultDescription.textContent = description;
    defaultList.appendChild(defaultDescription);

    infoSvg.addEventListener('mouseover', () => {
        defaultDescription.classList.remove('invisible');
    })

    infoSvg.addEventListener('mouseleave', () => {
        defaultDescription.classList.add('invisible')
    })
};

export function displayDefaultProjectDueDate(formattedDueDate) {
    const defaultProjectDueDateBox = document.getElementById('default-date-box');
    const defaultProjectDueDate = document.createElement('p');
    defaultProjectDueDate.id = "default-due-date-text";
    defaultProjectDueDate.classList.add('posted-date');
    defaultProjectDueDate.textContent = formattedDueDate;
    defaultProjectDueDateBox.appendChild(defaultProjectDueDate);
};

export function displayDefaultProjectLabel(label) {
    const defaultListLabelBox = document.getElementById('default-label-box');
    while (defaultListLabelBox.lastElementChild) {
        defaultListLabelBox.removeChild(defaultListLabelBox.lastElementChild);
    }

    const listLabel = document.createElement('span');
    listLabel.classList.add(label[1]);
    listLabel.textContent = label[0];
    defaultListLabelBox.appendChild(listLabel);
};

export function displayDefaultProjectTasks() {
    const taskContainer = document.getElementById('default-project-task-container');
    console.log("REMINDER: displayDefaultProjectTasks() function is incomplete");
};

export function displayDefaultProjectTaskNumber(arrayLength) {
    const defaultTaskTracker = document.getElementById('default-task-tracker');
    const defaultTaskNumber = document.createElement('span');
    defaultTaskNumber.classList.add('array-number');
    defaultTaskNumber.textContent = arrayLength;
    defaultTaskTracker.appendChild(defaultTaskNumber);
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

export function displayDefaultProjectPriority(instructions) {
    const priorityBox = document.getElementById('priority-container');
    if (!instructions) return;
    
    instructions.classesToRemove.forEach(cls => {
        priorityBox.classList.remove(cls);
    });

    instructions.classesToAdd.forEach(cls => {
        priorityBox.classList.add(cls);
    });

    while(priorityBox.lastElementChild) {
        priorityBox.removeChild(priorityBox.lastElementChild);
    }

    instructions.svgsToAppend.forEach(key => {
        const svg = createSvg(key);
        if (svg) priorityBox.appendChild(svg);
    });

};

export function createDefaultProjectEditForm(title, description, dueDate, priorityLogicFunction, getInputValues) {
    const defaultListEditButton = document.getElementById('default-edit-button');

    const defaultListFormContainer = document.createElement('div');
    defaultListFormContainer.id = "default-list-form-box";

    defaultListEditButton.addEventListener('click', () => {
        document.body.appendChild(defaultListFormContainer);
    });

    const defaultListForm = document.createElement('form');
    defaultListForm.id = "default-form";
    defaultListFormContainer.appendChild(defaultListForm);

    const defaultListFieldset = document.createElement('fieldset');
    defaultListForm.appendChild(defaultListFieldset);

    const defaultListLegend = document.createElement('legend');
    defaultListLegend.id = "default-legend";
    defaultListLegend.textContent = "Edit Default List Details";
    defaultListFieldset.appendChild(defaultListLegend);

    const defaultListTitleDiv = document.createElement('div');
    defaultListTitleDiv.classList.add('property-div');
    defaultListFieldset.appendChild(defaultListTitleDiv);

    const defaultListTitleLabel = document.createElement('label');
    defaultListTitleLabel.for = "title";
    defaultListTitleLabel.textContent = "Title:";
    defaultListTitleDiv.appendChild(defaultListTitleLabel);

    const defaultListTitleInput = document.createElement('input');
    defaultListTitleInput.id = "title";
    defaultListTitleInput.value = title;
    defaultListTitleInput.classList.add('default-input');
    defaultListTitleDiv.appendChild(defaultListTitleInput);
    
    const defaultListDescriptionDiv = document.createElement('div');
    defaultListDescriptionDiv.classList.add('property-div');
    defaultListFieldset.appendChild(defaultListDescriptionDiv);

    const defaultListDescriptionLabel = document.createElement('label');
    defaultListDescriptionLabel.for = "description";
    defaultListDescriptionLabel.textContent = "Description:";
    defaultListDescriptionLabel.classList.add('textarea-label');
    defaultListDescriptionDiv.appendChild(defaultListDescriptionLabel);

    const defaultListDescriptionInput = document.createElement('textarea');
    defaultListDescriptionInput.id = "description";
    defaultListDescriptionInput.name = "task_description";
    defaultListDescriptionInput.value = description;
    defaultListDescriptionDiv.appendChild(defaultListDescriptionInput);

    const defaultListDueDateDiv = document.createElement('div');
    defaultListDueDateDiv.classList.add('property-div');
    defaultListFieldset.appendChild(defaultListDueDateDiv);

    const defaultListDueDateLabel = document.createElement('label');
    defaultListDueDateLabel.for = "due-date";
    defaultListDueDateLabel.textContent = "Due Date:";
    defaultListDueDateDiv.appendChild(defaultListDueDateLabel);

    const defaultListDueDateInput = document.createElement('input');
    defaultListDueDateInput.type = "date";
    defaultListDueDateInput.id = "due-date";
    defaultListDueDateInput.name = "task_due_date";
    defaultListDueDateInput.classList.add('default-input');
    if (dueDate) {
        defaultListDueDateInput.value = formatDateForInput(dueDate);
    } else {
        defaultListDueDateInput.value = '';
    }
    defaultListDueDateDiv.appendChild(defaultListDueDateInput);

    const defaultListDoubleDiv = document.createElement('div');
    defaultListDoubleDiv.classList.add('property-div', 'double-property-gap');
    defaultListFieldset.appendChild(defaultListDoubleDiv);

    const defaultListLabelDiv = document.createElement('div');
    defaultListLabelDiv.classList.add('half-property');
    defaultListDoubleDiv.appendChild(defaultListLabelDiv);

    const defaultListLabelLabel = document.createElement('label');
    defaultListLabelLabel.for = "label";
    defaultListLabelLabel.textContent = "Label:";
    defaultListLabelDiv.appendChild(defaultListLabelLabel);

    const defaultListLabelDropBox = document.createElement('select');
    defaultListLabelDropBox.id = "label";
    defaultListLabelDropBox.classList.add('drop-box');
    defaultListLabelDiv.appendChild(defaultListLabelDropBox);

    const defaultListLabelNotOption = document.createElement('option');
    defaultListLabelNotOption.textContent = "select";
    defaultListLabelNotOption.value = '';
    defaultListLabelNotOption.disabled = true;
    defaultListLabelDropBox.appendChild(defaultListLabelNotOption);
    const defaultListLabelOptions = ['None', 'Daily', 'Weekly', 'Monthly', 'Yearly'];
    
    defaultListLabelOptions.forEach(label => {
        const option = document.createElement('option');
        option.classList.add('drop-box-option');
        option.value = label;
        option.textContent = label;
        defaultListLabelDropBox.appendChild(option);
    });

    const defaultListPriorityDiv = document.createElement('div');
    defaultListPriorityDiv.classList.add('half-property');
    defaultListDoubleDiv.appendChild(defaultListPriorityDiv);

    const defaultListPriorityLabel = document.createElement('label');
    defaultListPriorityLabel.for = "priority-level";
    defaultListPriorityLabel.textContent = "Priority:";
    defaultListPriorityDiv.appendChild(defaultListPriorityLabel);
    
    const defaultListPriorityDropBox = document.createElement('select');
    defaultListPriorityDropBox.id = "priority";
    defaultListPriorityDropBox.classList.add('drop-box');
    defaultListPriorityDiv.appendChild(defaultListPriorityDropBox);

    const defaultListNotOption = document.createElement('option');
    defaultListNotOption.textContent = "select";
    defaultListNotOption.value = '';
    defaultListNotOption.disabled = true;
    defaultListPriorityDropBox.appendChild(defaultListNotOption);
    const defaultListPriorityOptions = ['Minor', 'Important', 'Urgent'];

    defaultListPriorityOptions.forEach(priorityType => {
        const option = document.createElement('option');
        option.classList.add('drop-box-option');
        option.value = priorityType;
        option.textContent = priorityType;
        defaultListPriorityDropBox.appendChild(option);
    });

    defaultListPriorityDropBox.selectedIndex = priorityLogicFunction;

    const defaultListEditFormButtonContainer = document.createElement('div');
    defaultListEditFormButtonContainer.classList.add('submit-div', 'shift-down');
    defaultListFieldset.appendChild(defaultListEditFormButtonContainer);

    const defaultListCancelButton = document.createElement('button');
    defaultListCancelButton.id = 'default-edit-cancel';
    defaultListCancelButton.type = "button";
    defaultListCancelButton.classList.add('cancel-button', 'cancel-unpressed');
    defaultListCancelButton.textContent = "Cancel";
    defaultListEditFormButtonContainer.appendChild(defaultListCancelButton);

    defaultListCancelButton.addEventListener('mousedown', () => {
        defaultListCancelButton.classList.add('cancel-pressed');
        defaultListCancelButton.classList.remove('cancel-unpressed');
    });

    defaultListCancelButton.addEventListener('mouseup', () => {
        defaultListCancelButton.classList.add('cancel-unpressed');
        defaultListCancelButton.classList.remove('cancel-pressed');
        closeOnClick();
    });

    const DefaultListSubmitButton = document.createElement('button');
    DefaultListSubmitButton.type = "button";
    DefaultListSubmitButton.classList.add('submit-button', 'unpressed');
    DefaultListSubmitButton.textContent = "Submit";
    defaultListEditFormButtonContainer.appendChild(DefaultListSubmitButton);

    DefaultListSubmitButton.addEventListener('mousedown', () => {
        DefaultListSubmitButton.classList.add('pressed');
        DefaultListSubmitButton.classList.remove('unpressed');
    });

    DefaultListSubmitButton.addEventListener('mouseup', () => {
        DefaultListSubmitButton.classList.add('unpressed');
        DefaultListSubmitButton.classList.remove('pressed');
        editDefaultProjectDetails();
        console.log(editDefaultProjectDetails());
        getInputValues(editDefaultProjectDetails());
        
        if (editDefaultProjectDetails()) {
            closeOnClick();
        }
    });
    console.log("REMINDER: Now we need to figure out how to send this to the entry point safely");
};

function closeOnClick() {
    const defaultListFormContainer = document.getElementById('default-list-form-box');
    defaultListFormContainer.remove();
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

        displayDefaultProjectPriority(defaultProjectPriorityLogic(defaultPriorityInput.value));
        displayDefaultProjectLabel(defaultProjectLabelLogic(defaultLabelInput.value));

        return [newTitle, newDescription, newDueDate, newPriority, newLabel];
    }
};