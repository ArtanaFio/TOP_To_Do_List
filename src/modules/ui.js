import plus from '../assets/images/add.svg';
import check from '../assets/images/check_circle.svg';
import info from '../assets/images/info.svg';
import edit from '../assets/images/edit.svg';
import exit from '../assets/images/exit.svg';
import exclamation from '../assets/images/priority_high.svg';
import low from '../assets/images/green-priority.svg';
import mid from '../assets/images/yellow-priority.svg';
import high from '../assets/images/red-priority.svg';
import date from '../assets/images/date.svg';
import trash from '../assets/images/delete.svg';

document.getElementById('')

// basic page display without lists
export function layout() {
    const container = document.getElementById('container');
    const title = document.createElement('h1');
    title.id = "title";
    title.textContent = "TOP ToDo Hub";
    container.appendChild(title);

    const space = document.createElement('div');
    space.id = "space";
    container.appendChild(space);

    const buttonSpace = document.createElement('div');
    buttonSpace.id = "button-space";
    container.appendChild(buttonSpace);

    const newListButton = document.createElement('button');
    newListButton.id = "new-list-button";
    newListButton.textContent = "Create Project";
    buttonSpace.appendChild(newListButton);

    const footer = document.createElement('footer');
    document.body.appendChild(footer);

    const text = document.createElement('span');
    text.classList.add("footer-text");
    text.textContent = 'Created by "ArtanaFio" on ';
    footer.appendChild(text);

    const githubLink = document.createElement('a');
    githubLink.classList.add("footer-link");
    githubLink.href = "https://github.com/ArtanaFio/";
    githubLink.target = "_blank";
    githubLink.textContent = "GitHub";
    footer.appendChild(githubLink);
    
    const copyright = document.createElement('span');
    copyright.classList.add("footer-text");
    copyright.textContent = "\u00A9";
    footer.appendChild(copyright);

    const copyrightYear = document.createElement('span');
    copyrightYear.classList.add("footer-text");
    copyrightYear.className = 'year';
    copyrightYear.textContent = new Date().getFullYear();
    footer.appendChild(copyrightYear);
};

// function to create default project to be exported to entry point

export function defaultProjectDisplay(title, description, dueDate, arrayLength, priority, label, getTaskElements, getDefaultElements) {
    const space = document.getElementById("space");
    
    const defaultList = document.createElement('div');
    defaultList.id = "default";
    defaultList.classList.add("list");
    space.appendChild(defaultList);

    const defaultTop = document.createElement('div');
    defaultTop.classList.add("top");
    defaultList.appendChild(defaultTop);

    const infoBox = document.createElement('div');
    defaultTop.appendChild(infoBox);

    const parser = new DOMParser();
    
    const infoDoc = parser.parseFromString(info, 'image/svg+xml');
    const infoSvg = infoDoc.querySelector('svg');
    infoSvg.classList.add("info-icon");
    infoBox.appendChild(infoSvg);

    const defaultDescription = document.createElement('div');
    defaultDescription.classList.add("description", "invisible");
    defaultDescription.textContent = description; //defaultProject.description;
    defaultList.appendChild(defaultDescription);

    infoSvg.addEventListener('mouseover', () => {
        defaultDescription.classList.remove("invisible");
    })

    infoSvg.addEventListener('mouseleave', () => {
        defaultDescription.classList.add("invisible")
    })

    const defaultName = document.createElement('p');
    defaultName.classList.add("list-name");
    defaultName.textContent = title; //defaultProject.title;
    defaultTop.appendChild(defaultName);

    const pairBox = document.createElement('div');
    pairBox.classList.add("svg-pair");
    defaultTop.appendChild(pairBox);

    const defaultEditBox = document.createElement('div');
    defaultEditBox.classList.add("invisible");
    pairBox.appendChild(defaultEditBox);

    const editDoc = parser.parseFromString(edit, 'image/svg+xml');
    const editSvg = editDoc.querySelector('svg');
    editSvg.classList.add("edit-icon");
    defaultEditBox.appendChild(editSvg);

    const defaultExitBox  = document.createElement('div');
    pairBox.appendChild(defaultExitBox);
    
    const exitDoc = parser.parseFromString(exit, 'image/svg+xml');
    const exitSvg = exitDoc.querySelector('svg');
    exitSvg.classList.add("exit-icon", "invisible");
    defaultExitBox.appendChild(exitSvg);

    const middleBox = document.createElement('div');
    middleBox.classList.add("date-label-box");
    defaultList.appendChild(middleBox);

    const defaultListDueDateBox = document.createElement('div');
    middleBox.appendChild(defaultListDueDateBox);

    const defaultPostedDueDate = document.createElement('p');
    defaultPostedDueDate.classList.add("posted-date");
    defaultListDueDateBox.appendChild(defaultPostedDueDate);

    if (dueDate !== null) {
        defaultPostedDueDate.textContent = dueDate;
    } else {
        defaultPostedDueDate.textContent = "no due date";
    }

    const defaultListLabelBox = document.createElement('div');
    middleBox.appendChild(defaultListLabelBox);

    const defaultPostedLabel = document.createElement('div');
    defaultPostedLabel.classList.add("posted-label");
    defaultListLabelBox.appendChild(defaultPostedLabel);

    defaultPostedLabel.textContent = Array.from(label).join(', ');
    

    const taskArea = document.createElement('div');
    taskArea.classList.add("task-area");
    taskArea.id = "task-area";
    defaultList.appendChild(taskArea);
    
    const taskItem = document.createElement("div");
    taskItem.classList.add("no-task");
    taskItem.textContent = "No tasks have been added yet";
    taskArea.appendChild(taskItem);

    const bottomLine = document.createElement('div');
    bottomLine.classList.add("bottom");
    defaultList.appendChild(bottomLine);

    const defaultTaskTracker = document.createElement('div');
    defaultTaskTracker.classList.add("track");
    bottomLine.appendChild(defaultTaskTracker);

    const defaultTaskText = document.createElement('span');
    defaultTaskText.textContent = "Tasks: ";
    defaultTaskTracker.appendChild(defaultTaskText);

    const defaultTaskNumber = document.createElement('span');
    defaultTaskNumber.textContent = arrayLength;
    defaultTaskNumber.classList.add("arrayNumber");
    defaultTaskTracker.appendChild(defaultTaskNumber);

    const priorityBox = document.createElement('div');
    priorityBox.classList.add("priority-box");
    bottomLine.appendChild(priorityBox);

    const undefinedDoc = parser.parseFromString(exclamation, 'image/svg+xml');
    const undefinedSvg = undefinedDoc.querySelector('svg');
    undefinedSvg.classList.add("empty-priority-icon");

    const lowDoc = parser.parseFromString(low, 'image/svg+xml');
    const lowSvg = lowDoc.querySelector('svg');
    lowSvg.classList.add("one");

    const midDoc = parser.parseFromString(mid, 'image/svg+xml');
    const midSvg = midDoc.querySelector('svg');
    midSvg.classList.add("one");
    const midDocTwo = parser.parseFromString(mid, 'image/svg+xml');
    const midSvgTwo = midDocTwo.querySelector('svg');
    midSvgTwo.classList.add("three");

    const highDoc = parser.parseFromString(high, 'image/svg+xml');
    const highSvg = highDoc.querySelector('svg');
    highSvg.classList.add("one");
    const highDocTwo = parser.parseFromString(high, 'image/svg+xml');
    const highSvgTwo = highDocTwo.querySelector('svg');
    highSvgTwo.classList.add("two");
    const highDocThree = parser.parseFromString(high, 'image/svg+xml');
    const highSvgThree = highDocThree.querySelector('svg');
    highSvgThree.classList.add("three");

    if (!priority) {
        priorityBox.classList.remove("second-level-priority-box", "third-level-priority-box");
        priorityBox.classList.add("first-level-priority-box");
        priorityBox.appendChild(undefinedSvg);
    } else if (priority === "low priority") {
        priorityBox.classList.remove("second-level-priority-box", "third-level-priority-box");
        priorityBox.classList.add("first-level-priority-box");
        priorityBox.appendChild(lowSvg);
    } else if (priority === "average priority") {
        priorityBox.classList.remove("first-level-priority-box", "third-level-priority-box");
        priorityBox.classList.add("second-level-priority-box");
        priorityBox.appendChild(midSvg);
        priorityBox.appendChild(midSvgTwo);
    } else if (priority === "high priority") {
        priorityBox.classList.remove("first-level-priority-box", "second-level-priority-box");
        priorityBox.classList.add("third-level-priority-box");
        priorityBox.appendChild(highSvg);
        priorityBox.appendChild(highSvgTwo);
        priorityBox.appendChild(highSvgThree);
    } else {
        console.log("Error: UI doesn't recognize default priority");
    }

    // don't forget to make the form invisible when everything is finished
    const defaultListFormContainer = document.createElement('div');
    defaultListFormContainer.id = "default-list-form-box";
    document.body.appendChild(defaultListFormContainer);

    defaultEditBox.addEventListener("click", () => {
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
    defaultListBar.classList.add("task-bar");
    defaultListFieldset.appendChild(defaultListBar);
    
    const defaultListTitleInput = document.createElement('input');
    defaultListTitleInput.classList.add("input-task");
    //defaultListTitleInput.placeholder = "Edit default list name";
    defaultListTitleInput.value = defaultName.textContent;
    defaultListBar.appendChild(defaultListTitleInput);

    const defaultListHalfDiv = document.createElement('div');
    defaultListHalfDiv.classList.add("task-property", "double-div");
    defaultListFieldset.appendChild(defaultListHalfDiv);

    const defaultListLabelDiv = document.createElement('div');
    defaultListLabelDiv.classList.add("half-property");
    defaultListHalfDiv.appendChild(defaultListLabelDiv);

    const defaultListLabelLabel = document.createElement('label');
    defaultListLabelLabel.for = "label";
    defaultListLabelLabel.textContent = "Label:";
    defaultListLabelLabel.classList.add("half-label");
    defaultListLabelDiv.appendChild(defaultListLabelLabel);

    const defaultListLabelDropBox = document.createElement('select');
    defaultListLabelDropBox.classList.add("drop-box");

    const defaultListLabelNotOption = document.createElement('option');
    defaultListLabelNotOption.textContent = "select";
    defaultListLabelNotOption.value = '';
    defaultListLabelNotOption.disabled = true;
    //defaultListLabelNotOption.selected = true;
    defaultListLabelDropBox.appendChild(defaultListLabelNotOption);
    const defaultListLabelOptions = ["None", "Work", "Study", "Groceries", "Goals", "Daily", "Weekly", "Monthly", "Yearly"];
    defaultListLabelOptions.forEach(priorityType => {
        const option = document.createElement('option');
        option.value = priorityType;
        option.textContent = priorityType;
        defaultListLabelDropBox.appendChild(option);
    })
    defaultListLabelDiv.appendChild(defaultListLabelDropBox);
    
    if (defaultPostedLabel.textContent === "label not assigned") {
        defaultListLabelDropBox.selectedIndex = 1;
    } else if (defaultPostedLabel.textContent === "Work") {
        defaultListLabelDropBox.selectedIndex = 2;
    } else if (defaultPostedLabel.textContent === "Study") {
        defaultListLabelDropBox.selectedIndex = 3;
    } else if (defaultPostedLabel.textContent === "Groceries") {
        defaultListLabelDropBox.selectedIndex = 4;
    } else if (defaultPostedLabel.textContent === "Goals") {
        defaultListLabelDropBox.selectedIndex = 5;
    } else if (defaultPostedLabel.textContent === "Daily") {
        defaultListLabelDropBox.selectedIndex = 6;
    } else if (defaultPostedLabel.textContent === "Weekly") {
        defaultListLabelDropBox.selectedIndex = 7;
    } else if (defaultPostedLabel.textContent === "Monthly") {
        defaultListLabelDropBox.selectedIndex = 8;
    } else if (defaultPostedLabel.textContent === "Yearly") {
        defaultListLabelDropBox.selectedIndex = 9;
    } else {
        alert(`Error detection at line 313 of module ui.js. The default list label is not defined correctly.`);
    }
    
    const defaultListDescriptionDiv = document.createElement('div');
    defaultListDescriptionDiv.classList.add("task-property");
    defaultListFieldset.appendChild(defaultListDescriptionDiv);

    const defaultListDescriptionLabel = document.createElement('label');
    defaultListDescriptionLabel.for = "description";
    defaultListDescriptionLabel.textContent = "Description:";
    defaultListDescriptionLabel.classList.add("textarea-label");
    defaultListDescriptionDiv.appendChild(defaultListDescriptionLabel);

    const defaultListDescriptionInput = document.createElement('textarea');
    defaultListDescriptionInput.id = "description";
    defaultListDescriptionInput.name = "task_description";
    defaultListDescriptionInput.value = defaultDescription.textContent;
    defaultListDescriptionDiv.appendChild(defaultListDescriptionInput);

    const defaultListDoubleDiv = document.createElement('div');
    defaultListDoubleDiv.classList.add("task-property", "double-div");
    defaultListFieldset.appendChild(defaultListDoubleDiv);

    const defaultListDueDateDiv = document.createElement('div');
    defaultListDueDateDiv.classList.add("half-property");
    defaultListDoubleDiv.appendChild(defaultListDueDateDiv);

    const defaultListDueDateLabel = document.createElement('label');
    defaultListDueDateLabel.for = "due-date";
    defaultListDueDateLabel.textContent = "Due Date:";
    defaultListDueDateLabel.classList.add("half-label");
    defaultListDueDateDiv.appendChild(defaultListDueDateLabel);

    const defaultListDueDateInput = document.createElement('input');
    defaultListDueDateInput.type = "date";
    defaultListDueDateInput.id = "due-date";
    defaultListDueDateInput.name = "task_due_date";
    defaultListDueDateInput.classList.add("half-input");
    defaultListDueDateDiv.appendChild(defaultListDueDateInput);

    
    if (defaultPostedDueDate.textContent === "no due date") {
        defaultListDueDateInput.value = '';
    }
    
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

    const defaultListNotOption = document.createElement('option');
    defaultListNotOption.textContent = "select";
    defaultListNotOption.value = '';
    defaultListNotOption.disabled = true;
    //defaultListNotOption.selected = true;
    defaultListPriorityDropBox.appendChild(defaultListNotOption);
    const defaultListPriorityOptions = ['low priority', 'average priority', 'high priority'];
    defaultListPriorityOptions.forEach(priorityType => {
        const option = document.createElement('option');
        option.value = priorityType;
        option.textContent = priorityType;
        defaultListPriorityDropBox.appendChild(option);
    })

    if (priorityBox.contains(lowSvg)) {
        defaultListPriorityDropBox.selectedIndex = 1;
    } else if (priorityBox.contains(midSvg)) {
        defaultListPriorityDropBox.selectedIndex = 2;
    } else if (priorityBox.contains(highSvg)) {
        defaultListPriorityDropBox.selectedIndex = 3;
    } else {
        console.log("Something went wrong with displaying the correct priority type in the dropbox");
    }
    
    defaultListPriorityDiv.appendChild(defaultListPriorityDropBox);

    const defaultListSubmitDiv = document.createElement('div');
    defaultListSubmitDiv.classList.add("submit-div", "shift-down");
    defaultListFieldset.appendChild(defaultListSubmitDiv);

    const defaultListCancelButton = document.createElement('button');
    defaultListCancelButton.type = "button";
    defaultListCancelButton.classList.add("cancel-button", "cancel-unpressed");
    defaultListCancelButton.textContent = "Cancel";
    defaultListSubmitDiv.appendChild(defaultListCancelButton);

    defaultListCancelButton.addEventListener("mousedown", () => {
        defaultListCancelButton.classList.add("cancel-pressed");
        defaultListCancelButton.classList.remove("cancel-unpressed");
    });

    defaultListCancelButton.addEventListener("mouseup", () => {
        defaultListCancelButton.classList.add("cancel-unpressed");
        defaultListCancelButton.classList.remove("cancel-pressed");

        defaultListFormContainer.remove();
    });

    const DefaultListSubmitButton = document.createElement('button');
    DefaultListSubmitButton.type = "button";
    DefaultListSubmitButton.classList.add("submit-button", "unpressed");
    DefaultListSubmitButton.textContent = "Submit";
    defaultListSubmitDiv.appendChild(DefaultListSubmitButton);

    DefaultListSubmitButton.addEventListener("mousedown", () => {
        DefaultListSubmitButton.classList.add("pressed");
        DefaultListSubmitButton.classList.remove("unpressed");
    });

    DefaultListSubmitButton.addEventListener("mouseup", () => {
        DefaultListSubmitButton.classList.add("unpressed");
        DefaultListSubmitButton.classList.remove("pressed");

        const defaultTitle = defaultListTitleInput.value;
        const defaultLabel = defaultListLabelDropBox.value;
        const defaultNewDescription = defaultListDescriptionInput.value;
        const defaultDueDate = defaultListDueDateInput.value;
        const defaultPriority = defaultListPriorityDropBox.value;

        if (defaultTitle.trim() === '') {
            // use invalid stying;
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

            defaultName.textContent = defaultTitle;

            if (defaultLabel === "None") {
                defaultPostedLabel.textContent = "label not assigned";
            } else if (defaultLabel === "Work") {
                defaultPostedLabel.textContent = "Work";
            }  else if (defaultLabel === "Study") {
                defaultPostedLabel.textContent = "Study";
            }  else if (defaultLabel === "Groceries") {
                defaultPostedLabel.textContent = "Groceries";
            }  else if (defaultLabel === "Goals") {
                defaultPostedLabel.textContent = "Goals";
            }  else if (defaultLabel === "Daily") {
                defaultPostedLabel.textContent = "Daily";
            }  else if (defaultLabel === "Weekly") {
                defaultPostedLabel.textContent = "Weekly";
            }  else if (defaultLabel === "Monthly") {
                defaultPostedLabel.textContent = "Monthly";
            }  else if (defaultLabel === "Yearly") {
                defaultPostedLabel.textContent = "Yearly";
            } else {
                alert("Error: default list label drop box issue needs fixing")
            }

            defaultDescription.textContent = defaultNewDescription;

            if (defaultListDescriptionInput.value === "") {
                defaultListDescriptionInput.placeholder = "Edit default list description";
                defaultDescription.textContent = "This list prefers to stay mysterious";
            }

            if (defaultDueDate === '') {
                defaultPostedDueDate.textContent = "no due date";
            } else {
                const [year, month, day] = defaultDueDate.split('-');

                const formattedDueDate = `${month}/${day}/${year}`;
                defaultPostedDueDate.textContent = formattedDueDate;
            }

            if (defaultPriority === "low priority") {
                priorityBox.classList.remove("second-level-priority-box", "third-level-priority-box");
                priorityBox.classList.add("first-level-priority-box");
                priorityBox.appendChild(lowSvg);
            } else if (defaultPriority === "average priority") {
                priorityBox.classList.remove("first-level-priority-box", "third-level-priority-box");
                priorityBox.classList.add("second-level-priority-box");
                priorityBox.appendChild(midSvg);
                priorityBox.appendChild(midSvgTwo);
            } else if (defaultPriority === "high priority") {
                priorityBox.classList.remove("first-level-priority-box", "second-level-priority-box");
                priorityBox.classList.add("third-level-priority-box");
                priorityBox.appendChild(highSvg);
                priorityBox.appendChild(highSvgTwo);
                priorityBox.appendChild(highSvgThree);
            } else {
                console.log("Error: UI doesn't recognize the default priority");
            }

            getDefaultElements(defaultTitle, defaultLabel, defaultNewDescription, defaultDueDate, defaultPriority);
        }

        // add the code to make the form work with backend
    });

    defaultEditBox.addEventListener("click", () => {
        //add the code to open the default list edit form
    });

    // DON'T EDIT PAST THIS LINE!
    const taskBlock = document.createElement('div');
    taskBlock.id = "add-task";
    
    const addDoc = parser.parseFromString(plus, 'image/svg+xml');
    const addSvg = addDoc.querySelector('svg');
    addSvg.classList.add("add-icon");
    taskBlock.appendChild(addSvg);

    const dummyInput = document.createElement('div');
    dummyInput.classList.add('dummy-input');
    dummyInput.textContent = "Enter a new task here";
    taskBlock.appendChild(dummyInput);

    const taskFormContainer = document.createElement('div');
    taskFormContainer.classList.add("block");
    taskFormContainer.id = "task-form-box";

    const taskForm = document.createElement('form');
    taskBlock.classList.add("block");
    taskFormContainer.appendChild(taskForm);
            
    const taskFieldset = document.createElement('fieldset');
    taskForm.appendChild(taskFieldset);

    const taskBar = document.createElement('div');
    taskBar.classList.add("task-bar");
    taskFieldset.appendChild(taskBar);
    
    const taskTitleInput = document.createElement('input');
    taskTitleInput.classList.add("input-task");
    taskTitleInput.placeholder = "Enter a new task";
    taskBar.appendChild(taskTitleInput);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add("task-property");
    taskFieldset.appendChild(descriptionDiv);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.for = "description";
    descriptionLabel.textContent = "Description:";
    descriptionLabel.classList.add("textarea-label");
    descriptionDiv.appendChild(descriptionLabel);

    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = "description";
    descriptionInput.name = "task_description";
    descriptionInput.placeholder = "Enter description";
    descriptionDiv.appendChild(descriptionInput);

    const doubleDiv = document.createElement('div');
    doubleDiv.classList.add("task-property", "double-div");
    taskFieldset.appendChild(doubleDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.classList.add("half-property");
    doubleDiv.appendChild(dueDateDiv);

    const dueDateLabel = document.createElement('label');
    dueDateLabel.for = "due-date";
    dueDateLabel.textContent = "Due Date:";
    dueDateLabel.classList.add("half-label");
    dueDateDiv.appendChild(dueDateLabel);

    const dueDateInput = document.createElement('input');
    dueDateInput.type = "date";
    dueDateInput.id = "due-date";
    dueDateInput.name = "task_due_date";
    dueDateInput.placeholder = "Enter due date";
    dueDateInput.classList.add("half-input");
    dueDateDiv.appendChild(dueDateInput);

    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add("half-property");
    doubleDiv.appendChild(priorityDiv);

    const priorityLabel = document.createElement('label');
    priorityLabel.for = "priority-level";
    priorityLabel.textContent = "Priority:";
    priorityLabel.classList.add("half-label", "priority-label");
    priorityDiv.appendChild(priorityLabel);

    const priorityDropBox = document.createElement('select');
    priorityDropBox.classList.add("drop-box");
    const notOption = document.createElement('option');
    notOption.textContent = "select";
    notOption.value = '';
    notOption.disabled = true;
    notOption.selected = true;
    priorityDropBox.appendChild(notOption);
    const priorityOptions = ['low priority', 'average priority', 'high priority'];
    priorityOptions.forEach(priorityType => {
        const option = document.createElement('option');
        option.value = priorityType;
        option.textContent = priorityType;
        priorityDropBox.appendChild(option);
    })
    priorityDiv.appendChild(priorityDropBox);

    const notesDiv = document.createElement('div');
    notesDiv.classList.add("task-property");
    taskFieldset.appendChild(notesDiv);

    const notesLabel = document.createElement('label');
    notesLabel.for = "notes";
    notesLabel.textContent = "Notes:";
    notesLabel.classList.add("textarea-label");
    notesDiv.appendChild(notesLabel);

    const notesInput = document.createElement('input');
    notesInput.type = "text";
    notesInput.id = "notes";
    notesInput.name = "task_notes";
    notesInput.placeholder = "Enter notes";
    notesInput.classList.add("input-element");
    notesDiv.appendChild(notesInput);

    const checklistDiv = document.createElement('div');
    checklistDiv.classList.add("task-property");
    taskFieldset.appendChild(checklistDiv);

    const checklistLabel = document.createElement('label');
    checklistLabel.for = "checklist";
    checklistLabel.textContent = "Checklist:";
    checklistLabel.classList.add("textarea-label");
    checklistDiv.appendChild(checklistLabel);

    const checklistInput = document.createElement('input');
    checklistInput.type = "text";
    checklistInput.id = "checklist";
    checklistInput.name = "checklist_items";
    checklistInput.placeholder = "Enter checklist reminders";
    checklistInput.classList.add("input-element");
    checklistDiv.appendChild(checklistInput);

    const submitDiv = document.createElement('div');
    submitDiv.classList.add("submit-div");
    taskFieldset.appendChild(submitDiv);

    const cancelButton = document.createElement('button');
    cancelButton.type = "button";
    cancelButton.classList.add("cancel-button", "cancel-unpressed");
    cancelButton.textContent = "Cancel";
    submitDiv.appendChild(cancelButton);

    cancelButton.addEventListener("mousedown", () => {
        cancelButton.classList.add("cancel-pressed");
        cancelButton.classList.remove("cancel-unpressed");
    });

    cancelButton.addEventListener("mouseup", () => {
        cancelButton.classList.add("cancel-unpressed");
        cancelButton.classList.remove("cancel-pressed");

        taskFormContainer.remove();
        taskArea.appendChild(taskBlock);
    });

    const submitButton = document.createElement('button');
    submitButton.type = "button";
    submitButton.classList.add("submit-button", "unpressed");
    submitButton.textContent = "Submit";
    submitDiv.appendChild(submitButton);

    submitButton.addEventListener("mousedown", () => {
        submitButton.classList.add("pressed");
        submitButton.classList.remove("unpressed");
    });

    taskBlock.addEventListener("click", () => {
        taskBlock.remove();
        taskArea.appendChild(taskFormContainer);                
        taskFieldset.classList.add("fieldset-border");
        taskTitleInput.focus();
    });

    submitButton.addEventListener("mouseup", () => {
        submitButton.classList.add("unpressed");
        submitButton.classList.remove("pressed");

        const taskTitle = taskTitleInput.value;
        const taskDescription = descriptionInput.value;
        const taskDueDate = dueDateInput.value;
        const taskPriority = priorityDropBox.value;
        const taskNotes = notesInput.value;
        const taskChecklist = checklistInput.value;

        if (taskTitle.trim() === '') {
            taskTitleInput.classList.remove("input-task");
            taskTitleInput.classList.add("invalid");

            taskTitleInput.addEventListener("blur", () => {
                if (taskTitleInput.value.trim() !== '') {
                    taskTitleInput.classList.remove("invalid");
                    taskTitleInput.classList.add("input-task");
                }
            });
        } 

        if (!taskPriority) {
            priorityDropBox.classList.remove("drop-box");
            priorityDropBox.classList.add("red-border");

            priorityDropBox.addEventListener("blur", () => {
                if (priorityDropBox.value) {
                    console.log(taskPriority);
                    priorityDropBox.classList.remove("red-border");
                    priorityDropBox.classList.add("drop-box");
                }
                console.log(priorityDropBox.classList, priorityDropBox.value);
            });
        }
        
        if (taskTitle.trim() !== '' && taskPriority) {

            taskFormContainer.remove();
                    
            const fullTaskContainer = document.createElement('div');
            fullTaskContainer.classList.add("block", "full-task");
            taskArea.appendChild(fullTaskContainer);

            const emptyCircle = document.createElement('div');
            emptyCircle.classList.add("circle");
            fullTaskContainer.appendChild(emptyCircle);

            const checkDoc = parser.parseFromString(check, 'image/svg+xml');
            const checkSvg = checkDoc.querySelector('svg');
            checkSvg.classList.add("check-icon");

            const fullTaskTitle = document.createElement('p');
            fullTaskTitle.classList.add("task-paragraph");
            fullTaskTitle.textContent = taskTitle;
            fullTaskContainer.appendChild(fullTaskTitle);

            emptyCircle.addEventListener("click", () => {
                if (!fullTaskTitle.classList.contains("strike-through")) {
                    fullTaskTitle.classList.add("strike-through");
                    emptyCircle.classList.remove("circle");
                    emptyCircle.appendChild(checkSvg);
                } else {
                    checkSvg.remove();
                    emptyCircle.classList.add("circle");
                    fullTaskTitle.classList.remove("strike-through");
                }
            });

            const pictographBox = document.createElement('div');
            pictographBox.classList.add("pictographs");
            fullTaskContainer.appendChild(pictographBox);

            const taskPriorityBox = document.createElement('div');
            taskPriorityBox.classList.add("priority-box");

            if (taskPriority) {
                fullTaskContainer.addEventListener("mouseenter", () => {
                    taskPriorityBox.classList.add("white-out");
                });
    
                fullTaskContainer.addEventListener("mouseleave", () => {
                    taskPriorityBox.classList.remove("white-out");
                });
            }
            
            const clonedLowSvg = lowSvg.cloneNode(true);
            clonedLowSvg.classList.remove("one");
            clonedLowSvg.classList.add("two");

            const clonedMidSvg = midSvg.cloneNode(true);
            const clonedMidSvgTwo = midSvgTwo.cloneNode(true);
            clonedMidSvgTwo.classList.remove("two");
            clonedMidSvgTwo.classList.add("three");

            const clonedHighSvg = highSvg.cloneNode(true);
            const clonedHighSvgTwo = highSvgTwo.cloneNode(true);
            const clonedHighSvgThree = highSvgThree.cloneNode(true);

            if (taskPriority === "low priority") {
                taskPriorityBox.classList.remove("empty-box", "second-level-priority-box", "third-level-priority-box");
                taskPriorityBox.classList.add("first-level-priority-box");
                pictographBox.appendChild(taskPriorityBox);
                taskPriorityBox.appendChild(clonedLowSvg);
            } else if (taskPriority === "average priority") {
                taskPriorityBox.classList.remove("empty-box", "first-level-priority-box", "third-level-priority-box");
                taskPriorityBox.classList.add("second-level-priority-box");
                pictographBox.appendChild(taskPriorityBox);
                taskPriorityBox.appendChild(clonedMidSvg);
                taskPriorityBox.appendChild(clonedMidSvgTwo);
            } else if (taskPriority === "high priority") {
                taskPriorityBox.classList.remove("empty-box", "first-level-priority-box", "second-level-priority-box");
                taskPriorityBox.classList.add("third-level-priority-box");
                pictographBox.appendChild(taskPriorityBox);
                taskPriorityBox.appendChild(clonedHighSvg);
                taskPriorityBox.appendChild(clonedHighSvgTwo);
                taskPriorityBox.appendChild(clonedHighSvgThree);
            } else {
                console.log("Error: UI doesn't recognize task priority");
            }
                    
            const dateDoc = parser.parseFromString(date, 'image/svg+xml');
            const dateSvg = dateDoc.querySelector('svg');
            dateSvg.classList.add("date-icon");
            pictographBox.appendChild(dateSvg);

            const datePopup = document.createElement('div');
            datePopup.classList.add("date-popup", "invisible");
            if (taskDueDate) {
                datePopup.textContent = `Due Date: ${taskDueDate}`;
            } else {
                datePopup.textContent = "No due date";
            }
                    
            pictographBox.appendChild(datePopup);

            dateSvg.addEventListener("mouseover", () => {
                datePopup.classList.remove("invisible");
            });

            dateSvg.addEventListener("mouseleave", () => {
                datePopup.classList.add("invisible");
            });
                
            const taskEditBox = document.createElement('div');
            taskEditBox.classList.add("invisible");
            pictographBox.appendChild(taskEditBox);
            
            const clonedEditSvg = editSvg.cloneNode(true);
            taskEditBox.appendChild(clonedEditSvg);

            const taskDeleteBox = document.createElement('div');
            taskDeleteBox.classList.add("invisible");
            fullTaskContainer.appendChild(taskDeleteBox);

            const deleteDoc = parser.parseFromString(trash, 'image/svg+xml');
            const deleteSvg = deleteDoc.querySelector('svg');
            deleteSvg.classList.add("delete-icon");
            taskDeleteBox.appendChild(deleteSvg);

            fullTaskContainer.addEventListener("mouseover", () => {
                taskDeleteBox.classList.remove("invisible");
                taskEditBox.classList.remove("invisible");
            });

            fullTaskContainer.addEventListener("mouseleave", () => {
                taskDeleteBox.classList.add("invisible");
                taskEditBox.classList.add("invisible");
            });

            taskDeleteBox.addEventListener("click", () => {
                fullTaskContainer.remove();
            });

            getTaskElements(taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes, taskChecklist, taskDeleteBox, defaultTaskNumber);

            taskTitleInput.value = '';
            descriptionInput.value = '';
            dueDateInput.value = '';
            priorityDropBox.selectedIndex = 0;
            notesInput.value = '';
            checklistInput.value = '';

            taskArea.appendChild(taskBlock);
        }
    });

    let fullSize = false;
    let newTaskMade = false;

    defaultList.addEventListener("click", (event) => {

        if (fullSize) return;

        defaultList.style.flex = "1";
        fullSize = true;

        defaultList.style.cursor = "default";
        defaultEditBox.classList.remove("invisible");
        exitSvg.classList.remove("invisible");

        taskItem.remove();

        if (!newTaskMade) {
            taskArea.appendChild(taskBlock);
        }
    })

    defaultExitBox.addEventListener("click", (event) => {
        event.stopPropagation();
        defaultList.style.flex = "0";
        defaultList.style.cursor = "pointer";
        defaultEditBox.classList.add("invisible");
        exitSvg.classList.add("invisible");
        fullSize = false;

        taskBlock.remove();

        if (arrayLength === 0) {
            console.log("there are no tasks");
            taskArea.appendChild(taskItem);
        } else {
            console.log(`arrayLength: ${arrayLength}`);
        }
    });

};

export function projectDisplay() {
    const space = document.getElementById("space");

    const newListButton = document.getElementById("new-list-button");
    newListButton.classList.add("static-list-button");
    
    newListButton.addEventListener("click", () => {
        const newProject = document.createElement("div");
        newProject.classList.add("list");
        space.appendChild(newProject);
    });

    newListButton.addEventListener("mouseover", () => {
        newListButton.classList.add("list-button-unpressed");
        newListButton.classList.remove("list-button-pressed", "static-list-button");
    });

    newListButton.addEventListener("mouseleave", () => {
        newListButton.classList.add("static-list-button");
        newListButton.classList.remove("list-button-pressed", "list-button-unpressed");
    });

    newListButton.addEventListener("mousedown", () => {
        newListButton.classList.add("list-button-pressed");
        newListButton.classList.remove("list-button-unpressed", "static-list-button");
    });

    newListButton.addEventListener("mouseup", () => {
        newListButton.classList.add("list-button-unpressed");
        newListButton.classList.remove("list-button-pressed", "static-list-button");
    });
    
};
