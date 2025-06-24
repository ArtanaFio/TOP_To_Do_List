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
import { formatDateForInput } from './default_project_utility';

export function displayDefaultProject(closeLogic) {
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
    console.log("REMINDER: come back to the defaultListLabelBox in displayDefaultProject function");

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

    function clickExitIcon(closeLogic) {
        defaultExitBox.addEventListener("click", (event) => {
            event.stopPropagation();
            defaultList.style.flex = "0";
            defaultList.style.cursor = "pointer";
            defaultEditBox.classList.add('invisible');
            exitSvg.classList.add('invisible');
            taskBlock.remove();

            if (closeLogic) {
                console.log("there are no tasks");
                taskContainer.appendChild(noTaskStatement);
            } else {
                console.log(`arrayLength: ${arrayLength}`);
            }
        });
    };
    clickExitIcon(closeLogic);
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

export function displayDefaultProjectLabel(labelArray) {
    const defaultListLabelBox = document.getElementById('default-label-box');
    labelArray.forEach(label => {
        const listLabel = document.createElement('span');
        listLabel.classList.add('posted-label');
        listLabel.textContent = label;
        defaultListLabelBox.appendChild(listLabel);
    });
};

export function displayDefaultProjectTasks() {
    const taskContainer = document.getElementById('default-project-task-container');

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

    instructions.svgsToAppend.forEach(key => {
        const svg = createSvg(key);
        if (svg) priorityBox.appendChild(svg);
    });

};

export function createDefaultProjectEditForm(title, description, dueDate, priorityLogicFunction) {
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

    const defaultListBar = document.createElement('div');
    defaultListBar.classList.add('task-bar');
    defaultListFieldset.appendChild(defaultListBar);

    const defaultListTitleInput = document.createElement('input');
    defaultListTitleInput.classList.add('input-task');
    defaultListTitleInput.value = title;
    defaultListBar.appendChild(defaultListTitleInput);

    const defaultListLabelDiv = document.createElement('div');
    defaultListLabelDiv.classList.add('property-div');
    defaultListFieldset.appendChild(defaultListLabelDiv);

    const defaultListLabelLabel = document.createElement('label');
    defaultListLabelLabel.for = "label";
    defaultListLabelLabel.textContent = "Label:";
    defaultListLabelDiv.appendChild(defaultListLabelLabel);

    const defaultListTagBox = document.createElement('div');
    defaultListTagBox.id = "default-edit-form-label-container";
    defaultListTagBox.classList.add('tag-box');
    defaultListLabelDiv.appendChild(defaultListTagBox);

    function createLabelOptions(id, value, labelText) {
        const tagBox = document.createElement('div');
        tagBox.classList.add('tag');
        defaultListTagBox.appendChild(tagBox);

        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.id = id;
        checkBox.name = "label-option";
        checkBox.value = value;
        checkBox.classList.add('checkbox', 'default-checkbox');
        tagBox.appendChild(checkBox);

        const label = document.createElement('label');
        label.htmlFor = id; // associates the label with the checkbox
        label.textContent = labelText;
        label.classList.add('label-option', 'off');
        tagBox.appendChild(label);

        return [tagBox, checkBox, label];
    };

    const noneOption = createLabelOptions('none', 'tag1', 'None');
    const dailyOption = createLabelOptions('daily', 'tag2', 'Daily');
    const weeklyOption = createLabelOptions('weekly', 'tag3', 'Weekly');
    const monthlyOption = createLabelOptions('monthly', 'tag4', 'Monthly');
    const yearlyOption = createLabelOptions('yearly', 'tag5', 'Yearly');
    const workOption = createLabelOptions('work', 'tag6', 'Work');
    const studyOption = createLabelOptions('study', 'tag7', 'Study');
    const groceriesOption = createLabelOptions('groceries', 'tag8', 'Groceries');
    const goalsOption = createLabelOptions('goals', 'tag9', 'Goals');

    const allLabelOptions = [noneOption, dailyOption, weeklyOption, monthlyOption, yearlyOption, workOption, studyOption, groceriesOption, goalsOption];

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

    const defaultListDoubleDiv = document.createElement('div');
    defaultListDoubleDiv.classList.add('property-div', 'double-div');
    defaultListFieldset.appendChild(defaultListDoubleDiv);

    const defaultListDueDateDiv = document.createElement('div');
    defaultListDueDateDiv.classList.add('half-property');
    defaultListDoubleDiv.appendChild(defaultListDueDateDiv);

    const defaultListDueDateLabel = document.createElement('label');
    defaultListDueDateLabel.for = "due-date";
    defaultListDueDateLabel.textContent = "Due Date:";
    defaultListDueDateLabel.classList.add('half-label');
    defaultListDueDateDiv.appendChild(defaultListDueDateLabel);

    const defaultListDueDateInput = document.createElement('input');
    defaultListDueDateInput.type = "date";
    defaultListDueDateInput.id = "due-date";
    defaultListDueDateInput.name = "task_due_date";
    defaultListDueDateInput.classList.add('half-input');
    if (dueDate) {
        defaultListDueDateInput.value = formatDateForInput(dueDate);
    } else {
        defaultListDueDateInput.value = '';
    }
    defaultListDueDateDiv.appendChild(defaultListDueDateInput);

    const defaultListPriorityDiv = document.createElement('div');
    defaultListPriorityDiv.classList.add("half-property");
    defaultListDoubleDiv.appendChild(defaultListPriorityDiv);

    const defaultListPriorityLabel = document.createElement('label');
    defaultListPriorityLabel.for = "priority-level";
    defaultListPriorityLabel.textContent = "Priority:";
    defaultListPriorityLabel.classList.add("half-label", "priority-label");
    defaultListPriorityDiv.appendChild(defaultListPriorityLabel);
    
    const defaultListPriorityDropBox = document.createElement('select');
    defaultListPriorityDropBox.classList.add("drop-box");
    defaultListPriorityDiv.appendChild(defaultListPriorityDropBox);

    const defaultListNotOption = document.createElement('option');
    defaultListNotOption.textContent = "select";
    defaultListNotOption.value = '';
    defaultListNotOption.disabled = true;
    defaultListPriorityDropBox.appendChild(defaultListNotOption);
    const defaultListPriorityOptions = ['low priority', 'average priority', 'high priority'];

    defaultListPriorityOptions.forEach(priorityType => {
        const option = document.createElement('option');
        option.value = priorityType;
        option.textContent = priorityType;
        defaultListPriorityDropBox.appendChild(option);
    })

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
        closeOnCancel();
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
    });


    return allLabelOptions;
};

function closeOnCancel() {
    const defaultListFormContainer = document.getElementById('default-list-form-box');
    defaultListFormContainer.remove();
};

export function selectDefaultListEditFormLabels() {
    const defaultListTagBox = document.getElementById('default-edit-form-label-container');

    const allLabelOptions = createDefaultProjectEditForm();
    const noneOption = allLabelOptions[0];
    const dailyOption = allLabelOptions[1];
    const weeklyOption = allLabelOptions[2];
    const monthlyOption = allLabelOptions[3];
    const yearlyOption = allLabelOptions[4];
    const workOption = allLabelOptions[5];
    const studyOption = allLabelOptions[6];
    const groceriesOption = allLabelOptions[7];
    const goalsOption = allLabelOptions[8];
    
    noneOption[1].checked = true;
    noneOption[2].classList.remove("off", "inactive");

    if (noneOption[1].checked) {
        allLabelOptions.filter(([tagBox, checkBox, label]) => checkBox.id !== "none").forEach(([tagBox, checkBox, label]) => {
            checkBox.disabled = true;
            label.classList.add("inactive");
            label.classList.remove("off");
        });
    }

    const nonRelationalUncheckedOptions = allLabelOptions.filter(([tagBox, checkBox, label]) => 
        (checkBox.id !== "none" && checkBox.id !== "work" && checkBox.id !== "study" && checkBox.id !== "groceries" && checkBox.id !== "daily" && checkBox.id !== "weekly" && checkBox.id !== "monthly" && checkBox.id !== "yearly") && !checkBox.checked);
    const nonRelationalCheckedOptions = allLabelOptions.filter(([tagBox, checkBox, label]) => 
        (checkBox.id !== "none" && checkBox.id !== "work" && checkBox.id !== "study" && checkBox.id !== "groceries" && checkBox.id !== "daily" && checkBox.id !== "weekly" && checkBox.id !== "monthly" && checkBox.id !== "yearly") && checkBox.checked);

};

function editDefaultProjectDetails(title, description, dueDate, priorityLogicFunction) {
    //console.log('REMINDER: This bit of code dealing with the due date might need to be refactored too');
    /*
        const defaultNewTitle = defaultListTitleInput.value;
        const defaultNewDescription = defaultListDescriptionInput.value;
        const defaultNewDueDate = defaultListDueDateInput.value;
        const defaultNewPriority = defaultListPriorityDropBox.value;

        if (defaultNewTitle.trim() === '') {
            defaultListTitleInput.classList.remove("input-task");
            defaultListTitleInput.classList.add("invalid");
            defaultListTitleInput.value = '';
            defaultListTitleInput.placeholder = "Enter a valid list title";

            defaultListTitleInput.addEventListener("blur", () => {
                console.log("You clicked outside the default title input");
                if (defaultListTitleInput.value.trim() !== '') {
                    defaultListTitleInput.classList.remove("invalid");
                    defaultListTitleInput.classList.add("input-task");
                    console.log(defaultListTitleInput.value);
                }
            });
        } else {
            defaultListFormContainer.remove();

            // rethink how to use the logic functions here


            const defaultProjectTitle = document.getElementById('default-project-title');
            defaultProjectTitle.textContent = defaultNewTitle;

            const defaultDescription = document.getElementById('default-description');
            const defaultListDueDate = document.getElementById('default-due-date-text');

            if (defaultListDescriptionInput.value === '') {
                defaultListDescriptionInput.placeholder = "Edit default list description";
                defaultDescription.textContent = "This list prefers to stay mysterious";
            } else {
                defaultDescription.textContent = defaultNewDescription;
            }

            if (defaultNewDueDate === '') {
                defaultListDueDate.textContent = "no due date";
            } else {
                const [year, month, day] = defaultNewDueDate.split('-');
                defaultListDueDate.textContent = `${month}/${day}/${year}`;
            }
        }
    });
    */
};



/*
work on this later:
function checkForDuplicateLabels() {
        const existingTagOptions = defaultListTagBox.querySelectorAll(".label-option");
        const currentTagArray = Array.from(existingTagOptions);
        
        let labelDuplicate = currentTagArray.find(existingTag => 
            existingTag.textContent === titleCaseFunction(addNewLabelInput.value.trim())
        );

        newLabelTextLogic();
        
        if (addNewLabelInput.value.trim() === "") {
            addNewLabelInput.classList.remove('input-task');
            addNewLabelInput.classList.add('invalid');
            addNewLabelInput.value = '';
            addNewLabelInput.placeholder = "Cancel or enter a label";

            addNewLabelInput.addEventListener('click', () => {
                if (addNewLabelInput.placeholder === "Cancel or enter a label") {
                    addNewLabelInput.classList.remove('invalid');
                    addNewLabelInput.classList.add('input-task');
                    addNewLabelInput.placeholder = '';
                }
            });
        }else if (labelDuplicate) {

            addNewLabelInput.classList.remove("input-task");
            addNewLabelInput.classList.add("invalid");
            addNewLabelInput.value = '';
            addNewLabelInput.placeholder = "That label already exists";

            addNewLabelInput.addEventListener("click", () => {
                if (addNewLabelInput.placeholder === "That label already exists") {
                    addNewLabelInput.classList.remove("invalid");
                    addNewLabelInput.classList.add("input-task");
                    addNewLabelInput.placeholder = '';
                }
            });
        }else {
            checkboxCount++; // this needs to go to logic

            const newCustomLabelOption = createCustomLabelOptions(); // where is this function?
            allLabelOptions.push(newCustomLabelOption);

            let customLabelName = newCustomLabelOption[2].textContent;

            getCustomLabel(customLabelName);

            addNewLabelInput.placeholder = '';
            addNewLabelFormContainer.remove();

            if (noneOption[1].checked === true) {
                newCustomLabelOption[1].disabled = true;
                newCustomLabelOption[2].classList.add("inactive");
            } else {
                newCustomLabelOption[1].disabled = false;
                newCustomLabelOption[2].classList.add("off");
            }

            addNewLabelInput.value = "";
            console.log(`New option's id: ${newCustomLabelOption[1].id}, name: ${newCustomLabelOption[1].name}, value: ${newCustomLabelOption[1].value}, label: ${newCustomLabelOption[2].textContent}`);
            
            }
    };
*/