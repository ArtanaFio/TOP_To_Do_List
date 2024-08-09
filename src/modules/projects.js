// Project Management Module
// single responsibility purpose: manage projects that group todo-items


const labels = new Set(["Work", "School", "Groceries", "Goals", "Daily", "Weekly", "Monthly", "Yearly"]);
let userUniqueLabels = [];

//function to let users customize labels
function makeLabels(label) {
    if (!labels.has(label) || !userUniqueLabels.includes(label)) {
        userUniqueLabels.push(label);
        console.log(`${label} label has been created.`);
    } else {
        console.log(`Error: ${label} label already exists.`)
    }
}

function deleteLabels(label) {
    const index = userUniqueLabels.indexOf(label);
    if (index > -1) {
        userUniqueLabels.splice(index, 1);
        console.log(`${label} label has been deleted.`);
    } else {
        console.log(`Error: ${label} label does not exist.`);
    }
}

// create project using a class
class makeProject {

    static PRIORITIES = new Set(["low priority", "average priority", "high priority"]);

    constructor(title, description, dueDate, priority, label) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate ? new Date(dueDate) : null;
        this.priority = this.setPriority(priority);
        this.label = label;
    }

    // method to edit project title
    editTitle(newTitle) {
        if (newTitle) {
            this.title = newTitle;
        } else {
            console.log("Error: title is empty.");
        }
    }

    // method to edit project description
    editDescription(newDescription) {
        this.description = newDescription;
    }

    // method to edit project due date
    editDueDate(newDueDate) {
        const date = new Date(newDueDate);
        if (!isNaN(date.getTime())) {
            this.dueDate = date;
        } else {
            console.log("Error: date format is invalid.")
        }
    }

    // method to set priority
    setPriority(priority) {
        if (makeProject.PRIORITIES.has(priority)) {
            return priority;
        } else {
            console.log("Error: Invalid priority. Choose from the appropriate list of priorities.");
        }
    }

    // method to edit project priority
    editPriority(newPriority) {
        if (makeProject.PRIORITIES.has(newPriority)) {
            this.priority = newPriority;
        } else {
            console.log("Error: Invalid priority. Choose from the appropriate list of priorities.");
        }
    }

    // method to set label
    setLabel(label) {
        if (labels.has(label) || userUniqueLabels.includes(label)) {
            this.label.add(label);
        } else {
            console.log("Error: the label is invalid.")
        }
    }

    //method to remove label 
    removelabel(label) {
        if(this.label.has(label)) {
            this.label.delete(label);
            console.log(`${label} label has been removed from ${this.title}`);
        } else {
            console.log(`Error: ${label} label was not assigned to ${this.title}`);
        }
    }
};

// creation of a default project
//const defaultProject = new makeProject("Default List");

// edit project

// delete project

// project completion status