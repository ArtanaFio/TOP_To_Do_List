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
    
    let checkboxCounter = 1;

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

    // HERE IS THE LABEL BOX ON THE DEFAULT LIST
    const defaultListLabelBox = document.createElement('div');
    defaultListLabelBox.id = "default-label-box";
    middleBox.appendChild(defaultListLabelBox);

    // THIS IS FOR THE DEFAULT LISTS TAGS
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

        const existingNoneLabel = Array.from(defaultListLabelBox.children).find(
            (label) => label.textContent === "None"
        );


        if (existingNoneLabel) {
            console.log("let's activate the 'inactive' class");
            tags.forEach((tag) => {
                if (tag.textContent !== "None") {
                    tag.classList.add("inactive");
                    tag.classList.remove("off");
                }
            })
        }
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

    const defaultListLabelDiv = document.createElement('div');
    defaultListLabelDiv.classList.add("task-property");
    defaultListFieldset.appendChild(defaultListLabelDiv);

    const defaultListLabelLabel = document.createElement('label');
    defaultListLabelLabel.for = "label";
    defaultListLabelLabel.textContent = "Label:";
    //defaultListLabelLabel.classList.add("textarea-label");
    defaultListLabelDiv.appendChild(defaultListLabelLabel);

    const defaultListTagBox = document.createElement('div');
    defaultListTagBox.classList.add("tag-box");
    defaultListLabelDiv.appendChild(defaultListTagBox);

    const firstTag = document.createElement('div');
    firstTag.classList.add("tag");
    defaultListTagBox.appendChild(firstTag);

    const noneLabelCheckBox = document.createElement('input');
    noneLabelCheckBox.type = "checkbox";
    noneLabelCheckBox.id = "label1";
    noneLabelCheckBox.name = "label1";
    noneLabelCheckBox.value = "None";
    noneLabelCheckBox.classList.add("invisible", "checkbox");
    firstTag.appendChild(noneLabelCheckBox);

    const noneLabelLabel = document.createElement('label');
    noneLabelLabel.for = "label1";
    noneLabelLabel.textContent = "None";
    noneLabelLabel.classList.add("label-option", "off");
    firstTag.appendChild(noneLabelLabel);

    const secondTag = document.createElement('div');
    secondTag.classList.add("tag");
    defaultListTagBox.appendChild(secondTag);

    const workLabelCheckBox = document.createElement('input');
    workLabelCheckBox.type = "checkbox";
    workLabelCheckBox.id = "label2";
    workLabelCheckBox.name = "label2";
    workLabelCheckBox.value = "Work";
    workLabelCheckBox.classList.add("invisible", "checkbox");
    secondTag.appendChild(workLabelCheckBox);

    const workLabelLabel = document.createElement('label');
    workLabelLabel.for = "label2";
    workLabelLabel.textContent = "Work";
    workLabelLabel.classList.add("label-option", "off");
    secondTag.appendChild(workLabelLabel);

    const thirdTag = document.createElement('div');
    thirdTag.classList.add("tag");
    defaultListTagBox.appendChild(thirdTag);

    const studyLabelCheckBox = document.createElement('input');
    studyLabelCheckBox.type = "checkbox";
    studyLabelCheckBox.id = "label3";
    studyLabelCheckBox.name = "label3";
    studyLabelCheckBox.value = "Study";
    studyLabelCheckBox.classList.add("invisible", "checkbox");
    thirdTag.appendChild(studyLabelCheckBox);

    const studyLabelLabel = document.createElement('label');
    studyLabelLabel.for = "label3";
    studyLabelLabel.textContent = "Study";
    studyLabelLabel.classList.add("label-option", "off");
    thirdTag.appendChild(studyLabelLabel);

    const fourthTag = document.createElement('div');
    fourthTag.classList.add("tag");
    defaultListTagBox.appendChild(fourthTag);

    const groceriesLabelCheckBox = document.createElement('input');
    groceriesLabelCheckBox.type = "checkbox";
    groceriesLabelCheckBox.id = "label14";
    groceriesLabelCheckBox.name = "label4";
    groceriesLabelCheckBox.value = "Groceries";
    groceriesLabelCheckBox.classList.add("invisible", "checkbox");
    fourthTag.appendChild(groceriesLabelCheckBox);

    const groceriesLabelLabel = document.createElement('label');
    groceriesLabelLabel.for = "label4";
    groceriesLabelLabel.textContent = "Groceries";
    groceriesLabelLabel.classList.add("label-option", "off");
    fourthTag.appendChild(groceriesLabelLabel);

    const fifthTag = document.createElement('div');
    fifthTag.classList.add("tag");
    defaultListTagBox.appendChild(fifthTag);

    const goalsLabelCheckBox = document.createElement('input');
    goalsLabelCheckBox.type = "checkbox";
    goalsLabelCheckBox.id = "label5";
    goalsLabelCheckBox.name = "label5";
    goalsLabelCheckBox.value = "Goals";
    goalsLabelCheckBox.classList.add("invisible", "checkbox");
    fifthTag.appendChild(goalsLabelCheckBox);

    const goalsLabelLabel = document.createElement('label');
    goalsLabelLabel.for = "label5";
    goalsLabelLabel.textContent = "Goals";
    goalsLabelLabel.classList.add("label-option", "off");
    fifthTag.appendChild(goalsLabelLabel);

    const sixthTag = document.createElement('div');
    sixthTag.classList.add("tag");
    defaultListTagBox.appendChild(sixthTag);

    const dailyLabelCheckBox = document.createElement('input');
    dailyLabelCheckBox.type = "checkbox";
    dailyLabelCheckBox.id = "label6";
    dailyLabelCheckBox.name = "label6";
    dailyLabelCheckBox.value = "Daily";
    dailyLabelCheckBox.classList.add("invisible", "checkbox");
    sixthTag.appendChild(dailyLabelCheckBox);

    const dailyLabelLabel = document.createElement('label');
    dailyLabelLabel.for = "label6";
    dailyLabelLabel.textContent = "Daily";
    dailyLabelLabel.classList.add("label-option", "off");
    sixthTag.appendChild(dailyLabelLabel);

    const seventhTag = document.createElement('div');
    seventhTag.classList.add("tag");
    defaultListTagBox.appendChild(seventhTag);

    const weeklyLabelCheckBox = document.createElement('input');
    weeklyLabelCheckBox.type = "checkbox";
    weeklyLabelCheckBox.id = "label7";
    weeklyLabelCheckBox.name = "label7";
    weeklyLabelCheckBox.value = "Weekly";
    weeklyLabelCheckBox.classList.add("invisible", "checkbox");
    seventhTag.appendChild(weeklyLabelCheckBox);

    const weeklyLabelLabel = document.createElement('label');
    weeklyLabelLabel.for = "label7";
    weeklyLabelLabel.textContent = "Weekly";
    weeklyLabelLabel.classList.add("label-option", "off");
    seventhTag.appendChild(weeklyLabelLabel);

    const eigthTag = document.createElement('div');
    eigthTag.classList.add("tag");
    defaultListTagBox.appendChild(eigthTag);

    const monthlyLabelCheckBox = document.createElement('input');
    monthlyLabelCheckBox.type = "checkbox";
    monthlyLabelCheckBox.id = "label8";
    monthlyLabelCheckBox.name = "label8";
    monthlyLabelCheckBox.value = "Monthly";
    monthlyLabelCheckBox.classList.add("invisible", "checkbox");
    eigthTag.appendChild(monthlyLabelCheckBox);

    const monthlyLabelLabel = document.createElement('label');
    monthlyLabelLabel.for = "label8";
    monthlyLabelLabel.textContent = "Monthly";
    monthlyLabelLabel.classList.add("label-option", "off");
    eigthTag.appendChild(monthlyLabelLabel);

    const ninthTag = document.createElement('div');
    ninthTag.classList.add("tag");
    defaultListTagBox.appendChild(ninthTag);

    const yearlyLabelCheckBox = document.createElement('input');
    yearlyLabelCheckBox.type = "checkbox";
    yearlyLabelCheckBox.id = "label9";
    yearlyLabelCheckBox.name = "label9";
    yearlyLabelCheckBox.value = "Yearly";
    yearlyLabelCheckBox.classList.add("invisible", "checkbox");
    ninthTag.appendChild(yearlyLabelCheckBox);

    const yearlyLabelLabel = document.createElement('label');
    yearlyLabelLabel.for = "label9";
    yearlyLabelLabel.textContent = "Yearly";
    yearlyLabelLabel.classList.add("label-option", "off");
    ninthTag.appendChild(yearlyLabelLabel);

    const newTag = document.createElement('div');
    newTag.classList.add("add-tag");
    defaultListTagBox.appendChild(newTag);

    const addDoc = parser.parseFromString(plus, 'image/svg+xml');
    const addSvg = addDoc.querySelector('svg');
    addSvg.classList.add("add-tag-icon");
    newTag.appendChild(addSvg);

    const addTagText = document.createElement('p');
    addTagText.textContent = "Label";
    newTag.appendChild(addTagText);

    // SET UP THE ADD NEW LABEL MINI FORM
    const addNewLabelFormContainer = document.createElement('div');
    addNewLabelFormContainer.classList.add("add-new-label-form-container");

    const addNewLabelForm = document.createElement('form');
    addNewLabelForm.classList.add("add-new-label-form");
    addNewLabelFormContainer.appendChild(addNewLabelForm);

    const addNewLabelFieldset = document.createElement('fieldset');
    addNewLabelForm.appendChild(addNewLabelFieldset);

    const addNewLabelLegend = document.createElement('legend');
    addNewLabelLegend.classList.add("legend");
    addNewLabelLegend.textContent = "Create New Label";
    addNewLabelFieldset.appendChild(addNewLabelLegend);

    const addNewLabelInputContainer = document.createElement('div');
    addNewLabelInputContainer.classList.add("task-bar");
    addNewLabelFieldset.appendChild(addNewLabelInputContainer);

    const addNewLabelInput = document.createElement('input');
    addNewLabelInput.classList.add("input-task");
    addNewLabelInputContainer.appendChild(addNewLabelInput);

    const addNewLabelButtonContainer = document.createElement('div');
    addNewLabelButtonContainer.classList.add("submit-div");
    addNewLabelFieldset.appendChild(addNewLabelButtonContainer);

    const addNewLabelCancelButton = document.createElement('button');
    addNewLabelCancelButton.type = "button";
    addNewLabelCancelButton.classList.add("cancel-button", "cancel-unpressed");
    addNewLabelCancelButton.textContent = "Cancel";
    addNewLabelButtonContainer.appendChild(addNewLabelCancelButton);

    addNewLabelCancelButton.addEventListener("mousedown", () => {
        addNewLabelCancelButton.classList.add("cancel-pressed");
        addNewLabelCancelButton.classList.remove("cancel-unpressed");
    });

    addNewLabelCancelButton.addEventListener("mouseup", () => {
        addNewLabelCancelButton.classList.add("cancel-unpressed");
        addNewLabelCancelButton.classList.remove("cancel-pressed");
        addNewLabelFormContainer.remove();
    });

    const addNewLabelSubmitButton = document.createElement('button');
    addNewLabelSubmitButton.type = "button";
    addNewLabelSubmitButton.classList.add("submit-button", "unpressed");
    addNewLabelSubmitButton.textContent = "Submit";
    addNewLabelButtonContainer.appendChild(addNewLabelSubmitButton);

    addNewLabelSubmitButton.addEventListener("mousedown", () => {
        addNewLabelSubmitButton.classList.add("pressed");
        addNewLabelSubmitButton.classList.remove("unpressed");
    });

    addNewLabelSubmitButton.addEventListener("mouseup", () => {
        addNewLabelSubmitButton.classList.add("unpressed");
        addNewLabelSubmitButton.classList.remove("pressed");

        // Function to transform any string input into a title case version of the string
        function titleCase(string) {
            const newString = string
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
            return newString;
        };

        //let labelDuplicate = 


        if (addNewLabelInput.value.trim() === "") {
            addNewLabelInput.classList.remove("input-task");
            addNewLabelInput.classList.add("invalid");
            addNewLabelInput.value = '';
            addNewLabelInput.placeholder = "Enter a label name before submitting, or press cancel to exit";
        
            addNewLabelInput.addEventListener("blur", () => {
                if (addNewLabelInput.value.trim() !== '') {
                    addNewLabelInput.classList.remove("invalid");
                    addNewLabelInput.classList.add("input-task");
                }
            });
        } /*else if () {
            // THIS IS FOR PREVENTING REPEATS
        } */else {
            addNewLabelFormContainer.remove();

            const newlyAddedTag = document.createElement('div');
            newlyAddedTag.classList.add("tag");
            //defaultListTagBox.appendChild(newlyAddedTag);

            defaultListTagBox.insertBefore(newlyAddedTag, newTag);

            const newlyAddedLabelCheckBox = document.createElement('input');
            newlyAddedLabelCheckBox.type = "checkbox";
            newlyAddedLabelCheckBox.id = `new-checkbox-${checkboxCounter}`;

            const newlyAddedTagLabel = document.createElement('label');
            newlyAddedTagLabel.for = `new-checkbox-${checkboxCounter}`;
            newlyAddedTagLabel.textContent = titleCase(addNewLabelInput.value);
            newlyAddedTagLabel.classList.add("label-option", "new-label-option", "off");
            newlyAddedTag.appendChild(newlyAddedTagLabel);

            newlyAddedTagLabel.addEventListener("click", () => {
                if (newlyAddedTagLabel.classList.contains("off")) {
                    newlyAddedTagLabel.classList.add("on");
                    newlyAddedTagLabel.classList.remove("off");
                } else if (newlyAddedTagLabel.classList.contains("on")) {
                    newlyAddedTagLabel.classList.add("off");
                    newlyAddedTagLabel.classList.remove("on");
                }
            });

            addNewLabelInput.value = "";
        }
    });

    newTag.addEventListener("click", () => {
        document.body.appendChild(addNewLabelFormContainer);
    });

    const tags = document.querySelectorAll(".label-option");
    const defaultListLabels = document.querySelectorAll(".posted-label");

    defaultListLabels.forEach((label) => {
        tags.forEach((tag) => {
            // This is to ensure the tag option associated with the list's label is selected
            if (label.textContent !== "None" && tag.textContent === label.textContent) {
                tag.classList.add("on");
                tag.classList.remove("off");
                if (label.textContent === "Work") {
                    tags.forEach((tag) => {
                        if (tag.textContent === "Study" || tag.textContent === "Groceries") {
                            tag.classList.remove ("off");
                            tag.classList.add("inactive");
                        }
                    });
                }
            }
            
            tag.addEventListener("click", () => {
                if (tag.textContent === "None" && tag.classList.contains("off")) {
                    tag.classList.remove("off");
                    tag.classList.add("on");
                    console.log(`You selected ${tag.textContent}`);
                    tags.forEach((tag) => {
                        if (tag.textContent !== "None") {
                            tag.classList.remove("off", "on", "label-hover");
                            tag.classList.add("inactive");
                        }
                    });
                } else if (tag.textContent === "None" && tag.classList.contains("on")) {
                    tag.classList.remove("on");
                    tag.classList.add("off");
                    console.log(`You deselected ${tag.textContent}`);
                    tags.forEach((tag) => {
                        if (tag.textContent !== "None") {
                            tag.classList.add("off");
                            tag.classList.remove("inactive");
                        }
                        
                    });
                } else if (tag.textContent === "Work" && tag.classList.contains("off")) {
                    tag.classList.add("on");
                    tag.classList.remove("off");
                    console.log(`When you select ${tag.textContent}, "Study" and "Groceries" can't be chosen`);
                    tags.forEach((tag) => {
                        if (tag.textContent === "Study" || tag.textContent === "Groceries") {
                            tag.classList.add("inactive");
                            tag.classList.remove("on", "off");
                        }
                    });
                } else if (tag.textContent === "Work" && tag.classList.contains("on")) { 
                    tag.classList.add("off");
                    tag.classList.remove("on");
                    console.log("Now you can select either 'Work', 'Study', or 'Groceries'");
                    tags.forEach((tag) => {
                        if (tag.textContent === "Study" || tag.textContent === "Groceries") {
                            tag.classList.remove("inactive");
                            tag.classList.add("off");
                        }
                    });
                } else if (tag.textContent === "Study" && tag.classList.contains("off")) {
                    tag.classList.add("on");
                    tag.classList.remove("off");
                    console.log(`When you select ${tag.textContent}, "Work" and "Groceries" can't be chosen`);
                    tags.forEach((tag) => {
                        if (tag.textContent === "Work" || tag.textContent === "Groceries") {
                            tag.classList.add("inactive");
                            tag.classList.remove("on", "off");
                        }
                    });
                } else if (tag.textContent === "Study" && tag.classList.contains("on")) {
                    tag.classList.add("off");
                    tag.classList.remove("on");
                    console.log("Now you can select either 'Work', 'Study', or 'Groceries'");
                    tags.forEach((tag) => {
                        if (tag.textContent === "Work" || tag.textContent === "Groceries") {
                            tag.classList.remove("inactive");
                            tag.classList.add("off");
                        }
                    });
                } else if (tag.textContent === "Groceries" && tag.classList.contains("off")) {
                    tag.classList.add("on");
                    tag.classList.remove("off");
                    console.log(`When you select ${tag.textContent}, "Study" and "Work" can't be chosen`);
                    tags.forEach((tag) => {
                        if (tag.textContent === "Work" || tag.textContent === "Study") {
                            tag.classList.add("inactive");
                            tag.classList.remove("on", "off");
                        }
                    });
                } else if (tag.textContent === "Groceries" && tag.classList.contains("on")) {
                    tag.classList.add("off");
                    tag.classList.remove("on");
                    console.log("Now you can select either 'Work', 'Study', or 'Groceries'");
                    tags.forEach((tag) => {
                        if (tag.textContent === "Work" || tag.textContent === "Study") {
                            tag.classList.remove("inactive");
                            tag.classList.add("off");
                        }
                    });
                } else if(tag.textContent === "Daily" && tag.classList.contains("off")) {
                    tag.classList.add("on");
                    tag.classList.remove("off");
                    console.log(`You've selected the "${tag.textContent}" label, you cannot select "Weekly", "Monthly", or "Yearly"`);
                    tags.forEach((tag) => {
                        if (tag.textContent === "Weekly" || tag.textContent === "Monthly" || tag.textContent === "Yearly") {
                            tag.classList.add("inactive");
                            tag.classList.remove("on", "off");
                        }
                    });
                } else if(tag.textContent === "Daily" && tag.classList.contains("on")) {
                    tag.classList.add("off");
                    tag.classList.remove("on");
                    console.log(`Now you can select either "Daily", "Weekly", "Monthly", or "Yearly"`);
                    tags.forEach((tag) => {
                        if (tag.textContent === "Weekly" || tag.textContent === "Monthly" || tag.textContent === "Yearly") {
                            tag.classList.remove("inactive");
                            tag.classList.add("off");
                        }
                    });
                } else if(tag.textContent === "Weekly" && tag.classList.contains("off")) {
                    tag.classList.add("on");
                    tag.classList.remove("off");
                    console.log(`You've selected the "${tag.textContent}" label, you cannot select "Daily", "Monthly", or "Yearly"`);
                    tags.forEach((tag) => {
                        if (tag.textContent === "Daily" || tag.textContent === "Monthly" || tag.textContent === "Yearly") {
                            tag.classList.add("inactive");
                            tag.classList.remove("on", "off");
                        }
                    });
                } else if(tag.textContent === "Weekly" && tag.classList.contains("on")) {
                    tag.classList.add("off");
                    tag.classList.remove("on");
                    console.log(`Now you can select either "Daily", "Weekly", "Monthly", or "Yearly"`);
                    tags.forEach((tag) => {
                        if (tag.textContent === "Daily" || tag.textContent === "Monthly" || tag.textContent === "Yearly") {
                            tag.classList.remove("inactive");
                            tag.classList.add("off");
                        }
                    });
                } else if(tag.textContent === "Monthly" && tag.classList.contains("off")) {
                    tag.classList.add("on");
                    tag.classList.remove("off");
                    console.log(`You've selected the "${tag.textContent}" label, you cannot select "Daily", "Weekly", or "Yearly"`);
                    tags.forEach((tag) => {
                        if (tag.textContent === "Daily" || tag.textContent === "Weekly" || tag.textContent === "Yearly") {
                            tag.classList.add("inactive");
                            tag.classList.remove("on", "off");
                        }
                    });
                } else if(tag.textContent === "Monthly" && tag.classList.contains("on")) {
                    tag.classList.add("off");
                    tag.classList.remove("on");
                    console.log(`Now you can select either "Daily", "Weekly", "Monthly", or "Yearly"`);
                    tags.forEach((tag) => {
                        if (tag.textContent === "Daily" || tag.textContent === "Weekly" || tag.textContent === "Yearly") {
                            tag.classList.remove("inactive");
                            tag.classList.add("off");
                        }
                    });
                } else if(tag.textContent === "Yearly" && tag.classList.contains("off")) {
                    tag.classList.add("on");
                    tag.classList.remove("off");
                    console.log(`You've selected the "${tag.textContent}" label, you cannot select "Daily", "Weekly", or "Monthly"`);
                    tags.forEach((tag) => {
                        if (tag.textContent === "Daily" || tag.textContent === "Weekly" || tag.textContent === "Monthly") {
                            tag.classList.add("inactive");
                            tag.classList.remove("on", "off");
                        }
                    });
                } else if(tag.textContent === "Yearly" && tag.classList.contains("on")) {
                    tag.classList.add("off");
                    tag.classList.remove("on");
                    console.log(`Now you can select either "Daily", "Weekly", "Monthly", or "Yearly"`);
                    tags.forEach((tag) => {
                        if (tag.textContent === "Daily" || tag.textContent === "Weekly" || tag.textContent === "Monthly") {
                            tag.classList.remove("inactive");
                            tag.classList.add("off");
                        }
                    });
                } else if(tag.textContent === "Goals" && tag.classList.contains("off")) {
                    tag.classList.add("on");
                    tag.classList.remove("off");
                    console.log(`You've selected the "${tag.textContent}" label`);
                } else if (tag.textContent === "Goals" && tag.classList.contains("on")) {
                    tag.classList.add("off");
                    tag.classList.remove("on");
                    console.log(`You've deselected the "${tag.textContent}" label`);
                }
            });
        });
    });

    const tagCheckboxes = document.querySelectorAll(".checkbox");

    // CURRENTLY NOT WORKING AS EXPECTED
    tagCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("click", () => {
            console.log(`You selected a tag`);
        });
    });

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
        //const defaultLabel = defaultListLabelDropBox.value;
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


            const tagsArray = Array.from(tags);
            const allTagsOff = tagsArray.every((tag) => tag.classList.contains("off"));
            const noneTag = tagsArray.find((tag) => tag.textContent === "None");

            if (allTagsOff && noneTag) {
                noneTag.classList.add("on");
                noneTag.classList.remove("off");
            }

            // This section is for adding/removing list labels for the default list
            // Remember:
            // "tag" = form's label option
            // "listTag" = newly created actual label on the list
            // "label" = any label currently existing on the list

            tags.forEach((tag) => {

                if (tag.classList.contains("on")) {
                    const existingListLabel = Array.from(defaultListLabelBox.children).find(
                        (label) => label.textContent === tag.textContent
                    );

                    if (!existingListLabel) {
                        const listTag = document.createElement('div');
                        listTag.classList.add("posted-label");
                        listTag.textContent = tag.textContent;
                        defaultListLabelBox.appendChild(listTag);
                        console.log(`${listTag.textContent} is a new label`);
                    } else {
                        console.log(`Should not repeat ${tag.textContent}`);
                    }
                }

                if (tag.classList.contains("off") || tag.classList.contains("inactive")) {
                    const labelToRemove = Array.from(defaultListLabelBox.children).find(
                        (label) => label.textContent === tag.textContent
                    );
                    if (labelToRemove) {
                        console.log(`Removed ${labelToRemove.textContent}`);
                        labelToRemove.remove();
                    }
                }
            });
            /*  THIS DIDN'T WORK TO MAKE THE NEW TAGS/LABELS BEHAVE LIKE EXISTING ONES
            const newTags = document.querySelectorAll("new-label-option");

            newTags.forEach((tag) => {
                if (tag.classList.contains("on")) {
                    const existingListLabel = Array.from(defaultListLabelBox.children).find(
                        (label) => label.textContent === tag.textContent
                    );

                    if (!existingListLabel) {
                        const listTag = document.createElement('div');
                        listTag.classList.add("posted-label");
                        listTag.textContent = tag.textContent;
                        defaultListLabelBox.appendChild(listTag);
                        console.log(`${listTag.textContent} is a new label`);
                    } else {
                        console.log(`Should not repeat ${tag.textContent}`);
                    }
                }

                if (tag.classList.contains("off")) {
                    const labelToRemove = Array.from(defaultListLabelBox.children).find(
                        (label) => label.textContent === tag.textContent
                    );
                    if (labelToRemove) {
                        console.log(`Removed ${labelToRemove.textContent}`);
                        labelToRemove.remove();
                    }
                }
            });
            */

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

            getDefaultElements(defaultTitle, /*defaultLabel,*/ defaultNewDescription, defaultDueDate, defaultPriority);
        }

        // add the code to make the form work with backend
    });

    defaultEditBox.addEventListener("click", () => {
        //add the code to open the default list edit form
    });

    // DON'T EDIT PAST THIS LINE!
    const taskBlock = document.createElement('div');
    taskBlock.id = "add-task";

    const clonedAddSvg = addSvg.cloneNode(true);
    clonedAddSvg.classList.add("add-icon");
    taskBlock.appendChild(clonedAddSvg);

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
