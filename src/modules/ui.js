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
    title.textContent = "TOP ToDo";
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
}

// function to create default project to be exported to entry point

export function defaultProjectDisplay(title, description, arrayLength, priority, makeTask, getTaskArray) {
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
    pairBox.appendChild(defaultEditBox);

    const editDoc = parser.parseFromString(edit, 'image/svg+xml');
    const editSvg = editDoc.querySelector('svg');
    editSvg.classList.add("edit-icon", "invisible");
    defaultEditBox.appendChild(editSvg);

    const defaultExitBox  = document.createElement('div');
    pairBox.appendChild(defaultExitBox);
    
    const exitDoc = parser.parseFromString(exit, 'image/svg+xml');
    const exitSvg = exitDoc.querySelector('svg');
    exitSvg.classList.add("exit-icon", "invisible");
    defaultExitBox.appendChild(exitSvg);

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
    midSvgTwo.classList.add("two");

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
        priorityBox.appendChild(undefinedSvg);
    } else if (priority === "low priority") {
        priorityBox.appendChild(lowSvg);
    } else if (priority === "average priority") {
        priorityBox.appendChild(midSvg);
        priorityBox.appendChild(midSvgTwo);
    } else if (priority === "high priority") {
        priorityBox.appendChild(highSvg);
        priorityBox.appendChild(highSvgTwo);
        priorityBox.appendChild(highSvgThree);
    } else {
        console.log("Error: UI doesn't recognize default priority");
    }

    const taskBlock = document.createElement('div');
    taskBlock.id = "add-task";
    

    const addDoc = parser.parseFromString(plus, 'image/svg+xml');
    const addSvg = addDoc.querySelector('svg');
    addSvg.classList.add("add-icon");
    taskBlock.appendChild(addSvg);

    const dummyInput = document.createElement('input');
    dummyInput.classList.add('input-task');
    dummyInput.placeholder = "Enter a new task";
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

    taskBlock.addEventListener("click", (event) => {
        taskBlock.remove();
        taskArea.appendChild(taskFormContainer);                
        taskFieldset.classList.add("fieldset-border");
    });

    submitButton.addEventListener("mouseup", () => {
        submitButton.classList.add("unpressed");
        submitButton.classList.remove("pressed");

        // enter code to convert form into text
        const taskTitle = taskTitleInput.value;
        const taskDescription = descriptionInput.value;
        const taskDueDate = dueDateInput.value;
        const taskPriority = priorityDropBox.value;
        const taskNotes = notesInput.value;
        const taskChecklist = checklistInput.value;

        //come back to this for returning values to make tasks
        makeTask(taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes, taskChecklist);
        getTaskArray(defaultTaskNumber);
        /*
        console.log(`taskTitle: ${taskTitle}`);
        console.log(`taskDescription: ${taskDescription}`);
        console.log(`taskDueDate: ${taskDueDate}`);
        console.log(`taskPriority: ${taskPriority}`);
        console.log(`taskNotes: ${taskNotes}`);
        console.log(`taskChecklist: ${taskChecklist}`);
        */

        taskFormContainer.remove();
                
        const fullTaskContainer = document.createElement('div');
        fullTaskContainer.classList.add("block", "full-task");
        taskArea.appendChild(fullTaskContainer);

        const emptyCircle = document.createElement('div');
        emptyCircle.classList.add("circle");
        fullTaskContainer.appendChild(emptyCircle);

        const checkDoc = parser.parseFromString(check, 'image/svg+xml');
        const checkSvg = checkDoc.querySelector('svg');
        checkSvg.classList.add("add-icon");

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
        pictographBox.appendChild(taskPriorityBox);

                
        if (!taskPriority) {
        } else if (taskPriority === "low priority") {
            taskPriorityBox.appendChild(lowSvg);
        } else if (taskPriority === "average priority") {
            taskPriorityBox.appendChild(midSvg);
            taskPriorityBox.appendChild(midSvgTwo);
        } else if (taskPriority === "high priority") {
            taskPriorityBox.appendChild(highSvg);
            taskPriorityBox.appendChild(highSvgTwo);
            taskPriorityBox.appendChild(highSvgThree);
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
                
        pictographBox.appendChild(editSvg);

        const taskDeleteBox = document.createElement('div');
        taskDeleteBox.classList.add("invisible");
        fullTaskContainer.appendChild(taskDeleteBox);

        const deleteDoc = parser.parseFromString(trash, 'image/svg+xml');
        const deleteSvg = deleteDoc.querySelector('svg');
        deleteSvg.classList.add("delete-icon");
        taskDeleteBox.appendChild(deleteSvg);

        fullTaskContainer.addEventListener("mouseover", () => {
            taskDeleteBox.classList.remove("invisible");
        });

        fullTaskContainer.addEventListener("mouseleave", () => {
            taskDeleteBox.classList.add("invisible");
        });

        taskDeleteBox.addEventListener("click", () => {
            fullTaskContainer.remove();
        });

        taskTitleInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
        priorityDropBox.selectedIndex = 0;
        notesInput.value = '';
        checklistInput.value = '';

        taskArea.appendChild(taskBlock);
    });

    let fullSize = false;
    let newTaskMade = false;

    defaultList.addEventListener("click", (event) => {

        if (fullSize) return;

        defaultList.style.flex = "1";
        fullSize = true;

        defaultList.style.cursor = "default";
        editSvg.classList.remove("invisible");
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
        editSvg.classList.add("invisible");
        exitSvg.classList.add("invisible");
        fullSize = false;

        taskBlock.remove();

        if (arrayLength === 0) {
            console.log("there are no tasks");
            taskArea.appendChild(taskItem);
        } else {
            console.log(`arrayLength: ${arrayLength}`);
        }
    })

    defaultEditBox.addEventListener("click", (event) => {
        event.stopPropagation();
    })

}

export function projectDisplay() {
    const space = document.getElementById("space");

    const newListButton = document.getElementById("new-list-button");
    newListButton.addEventListener("click", () => {
        const newProject = document.createElement("div");
        newProject.classList.add("list");
        space.appendChild(newProject);
    })
    
}
