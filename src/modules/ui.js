import plus from '../assets/images/add.svg';
import info from '../assets/images/info.svg';
import edit from '../assets/images/edit.svg';
import exit from '../assets/images/exit.svg';
import exclamation from '../assets/images/priority_high.svg';
import low from '../assets/images/green-priority.svg';
import mid from '../assets/images/yellow-priority.svg';
import high from '../assets/images/red-priority.svg';
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

export function defaultProjectDisplay(title, description, arrayLength, priority) {
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

    const editDoc = parser.parseFromString(edit, 'image/svg+xml');
    const editSvg = editDoc.querySelector('svg');
    editSvg.classList.add("edit-icon", "invisible");
    pairBox.appendChild(editSvg);

    const exitDoc = parser.parseFromString(exit, 'image/svg+xml');
    const exitSvg = exitDoc.querySelector('svg');
    exitSvg.classList.add("exit-icon", "invisible");
    pairBox.appendChild(exitSvg);

    const taskArea = document.createElement('div');
    taskArea.classList.add("task-area");
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
            const taskBlock = document.createElement('div');
            taskArea.appendChild(taskBlock);

            const addDoc = parser.parseFromString(plus, 'image/svg+xml');
            const addSvg = addDoc.querySelector('svg');
            addSvg.classList.add("add-icon");
            taskBlock.appendChild(addSvg);

            const taskForm = document.createElement('form');
            taskBlock.classList.add("block");
            taskBlock.appendChild(taskForm);

            const taskFieldset = document.createElement('fieldset');
            taskForm.appendChild(taskFieldset);

            const taskBar = document.createElement('div');
            taskBar.classList.add("task-bar");
            taskFieldset.appendChild(taskBar);
    
            const taskTitleInput = document.createElement('input');
            taskTitleInput.classList.add("input-task");
            taskTitleInput.placeholder = "Enter a new task";
            taskBar.appendChild(taskTitleInput);

            let initiateTask = false;

            taskTitleInput.addEventListener("click", (event) => {
                
                if (initiateTask) return;
                initiateTask = true;

                const descriptionDiv = document.createElement('div');
                descriptionDiv.classList.add("task-property");
                taskFieldset.appendChild(descriptionDiv);

                const descriptionLabel = document.createElement('label');
                descriptionLabel.for = "description";
                descriptionLabel.textContent = "Description:";
                descriptionLabel.classList.add("first-label");
                descriptionDiv.appendChild(descriptionLabel);

                const descriptionInput = document.createElement('textarea');
                descriptionInput.id = "description";
                descriptionInput.name = "task_description";
                descriptionInput.placeholder = "Enter description";
                descriptionDiv.appendChild(descriptionInput);

                const dueDateDiv = document.createElement('div');
                dueDateDiv.classList.add("task-property");
                taskFieldset.appendChild(dueDateDiv);

                const dueDateLabel = document.createElement('label');
                dueDateLabel.for = "due-date";
                dueDateLabel.textContent = "Due Date:";
                dueDateDiv.appendChild(dueDateLabel);

                const dueDateInput = document.createElement('input');
                dueDateInput.type = "date";
                dueDateInput.id = "due-date";
                dueDateInput.name = "task_due_date";
                dueDateInput.placeholder = "Enter due date";
                dueDateInput.classList.add("input-element");
                dueDateDiv.appendChild(dueDateInput);

                const notesDiv = document.createElement('div');
                notesDiv.classList.add("task-property");
                taskFieldset.appendChild(notesDiv);

                const notesLabel = document.createElement('label');
                notesLabel.for = "notes";
                notesLabel.textContent = "Notes:";
                notesDiv.appendChild(notesLabel);

                const notesInput = document.createElement('input');
                notesInput.type = "text";
                notesInput.id = "notes";
                notesInput.name = "task_notes";
                notesInput.placeholder = "Enter notes";
                notesInput.classList.add("input-element");
                notesDiv.appendChild(notesInput);

                const bottomSvgs = document.createElement('div');
                bottomSvgs.classList.add("task-bottom");
                taskFieldset.appendChild(bottomSvgs);

                bottomSvgs.appendChild(editSvg);

                const deleteDoc = parser.parseFromString(trash, 'image/svg+xml');
                const deleteSvg = deleteDoc.querySelector('svg');
                deleteSvg.classList.add("delete-icon");
                bottomSvgs.appendChild(deleteSvg);

                const taskPriorityBox = document.createElement('div');
                taskPriorityBox.classList.add("priority-box");
                bottomSvgs.appendChild(taskPriorityBox);
                taskPriorityBox.appendChild(undefinedSvg);
                /*
                priority
                checklist
                */
            })

            function convertInput(input) {
                const taskContent = taskTitleInput.value;

                const taskParagraph = document.createElement('p');
                taskParagraph.classList.add("task-paragraph");
                taskParagraph.textContent = taskContent;
                input.parentNode.replaceChild(taskParagraph, taskTitleInput);
            }

            taskTitleInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    convertInput(taskTitleInput);
                    addSvg.remove();

                    const newTaskBar = document.createElement('div');
                    newTaskBar.classList.add("task-bar");
                    taskArea.appendChild(newTaskBar);
        
                    newTaskBar.appendChild(addSvg);
        
                    const newTaskInput = document.createElement('input');
                    newTaskInput.classList.add("input-task");
                    newTaskInput.placeholder = "Enter a new task";
                    newTaskBar.appendChild(newTaskInput);
                }
                
            });

            /*
            taskTitleInput.addEventListener('blur', () => {
                convertInput();
            });
            */

            newTaskMade = true;

            addSvg.addEventListener("click", (event) => {

                addSvg.remove();
    
                const newTaskBlock = document.createElement('div');
                newTaskBlock.classList.add("block");
                taskArea.appendChild(newTaskBlock);

                newTaskBlock.appendChild(addSvg);

                const newTaskBar = document.createElement('div');
                newTaskBar.classList.add("task-bar");
                newTaskBlock.appendChild(newTaskBar);
    
                const newTaskInput = document.createElement('input');
                newTaskInput.classList.add("input-task");
                newTaskInput.placeholder = "Enter a new task";
                newTaskBar.appendChild(newTaskInput);

                newTaskInput.addEventListener('keypress', (event) => {
                    if (event.key === 'Enter') {
                        console.log("At least this worked");
                    }
                });

                /*
                newTaskInput.addEventListener('keypress', (event) {
                    if (event.key === 'Enter') {
                        convertInput(newTaskInput);
                    }
                })
                    */
            })
        }
    })

    exitSvg.addEventListener("click", (event) => {
        event.stopPropagation();
        defaultList.style.flex = "0";
        defaultList.style.cursor = "pointer";
        editSvg.classList.add("invisible");
        exitSvg.classList.add("invisible");
        fullSize = false;
    })

    editSvg.addEventListener("click", (event) => {
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
