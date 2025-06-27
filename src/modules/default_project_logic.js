import { trim } from './default_project_utility';

export function defaultProjectDueDateLogic(dueDate) {
    if (dueDate !== null) {
        let day = dueDate.getDate();
        let month = dueDate.getMonth() + 1;
        let year = dueDate.getFullYear();
        return `${month}/${day}/${year}`;
    } else {
        return "no due date";
    } 
};

export function defaultProjectLabelLogic(label) {
    if(!label || label === "None") {
        return ["Not labeled", "no-label"];
    } else {
        return [label, "posted-label"];
    }
};

export function defaultProjectPriorityLogic(priority) {
    if(priority === "Minor") {
        return { 
            classesToRemove: ["second-level-priority-box", "third-level-priority-box"],
            classesToAdd: ["first-level-priority-box"],
            svgsToAppend: ["low-1"]
        };
    } else if (priority === "Important") {
        return { 
            classesToRemove: ["first-level-priority-box", "third-level-priority-box"],
            classesToAdd: ["second-level-priority-box"],
            svgsToAppend: ["mid-1", "mid-2"]
        };
    } else if (priority === "Urgent") {
        return { 
            classesToRemove: ["first-level-priority-box", "second-level-priority-box"],
            classesToAdd: ["third-level-priority-box"],
            svgsToAppend: ["high-1", "high-2", "high-3"]
        };
    } else {
        console.log("Error: UI doesn't recognize this priority");
        return null;
    }
};

export function closedMessageLogic(arrayLength) {
    return arrayLength === 0;
};

export function priorityFormLogic(priority) {
    if (priority === "Minor") {
        return 1;
    } else if (priority === "Important") {
        return 2;
    } else if (priority === "Urgent") {
        return 3;
    } else {
        console.log("priorityFormLogic function is not recognizing any of the priority types");
    }
};

export function defaultProjectnoLabelLogic(label) {
    return label === "None";
};

export function defaultEmptyInputLogic(inputValue) {
    return trim(inputValue) === "";
};