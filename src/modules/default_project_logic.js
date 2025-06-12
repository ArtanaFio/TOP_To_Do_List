
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

export function defaultProjectPriorityLogic(priority) {
    if(priority === "low priority") {
        return { 
            classesToRemove: ["second-level-priority-box", "third-level-priority-box"],
            classesToAdd: ["first-level-priority-box"],
            svgsToAppend: ["low-1"]
        };
    } else if (priority === "average priority") {
        return { 
            classesToRemove: ["first-level-priority-box", "third-level-priority-box"],
            classesToAdd: ["second-level-priority-box"],
            svgsToAppend: ["mid-1", "mid-2"]
        };
    } else if (priority === "high priority") {
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

export function closeListLogic(arrayLength) {
    return arrayLength === 0;
};

export function priorityFormLogic(priority) {
    if (priority === "low priority") {
        return 1;
    } else if (priority === "average priority") {
        return 2;
    } else if (priority === "high priority") {
        return 3;
    } else {
        console.log("priorityFormLogic function is not recognizing any of the priority types");
    }
};

/*
export function openAndCloseListLogic(arrayLength) {
    let fullSize = false;
    let newTaskMade = false;

    function openListLogic() {
        if (fullSize) return;
        fullSize = true;
        return ["1", "default", "invisible", "invisible"];
    };
    return openListLogic();

    function closeListLogic(arrayLength) {
        fullSize = false;
        return ["0", "pointer", "invisible", "invisible"];

        if (arrayLength === 0) {
            console.log("there are no tasks");
        } else {
            console.log(`arrayLength: ${arrayLength}`);
        }
    };
    return closeListLogic();
};
*/