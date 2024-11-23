// Project Management Module
// single responsibility purpose: manage projects that group todo-items


export const labels = new Set(["None", "Daily", "Weekly", "Monthly", "Yearly", "Work", "Study", "Groceries", "Goals"]);
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
    static MASTER_STORAGE = []; // Central Storage for ALL lists, including the default list

    constructor(title, description, dueDate, priority, label) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate ? new Date(dueDate) : null; // default to null if not specified
        this.priority = this.setPriority(priority);
        this.label = new Set(); //set ensures users can customize
        this.tasks = [];

        if (labels.has(label) || userUniqueLabels.includes(label)) {
            this.label.add(label);
        } else {
            console.log("Error: the label is invalid.");
        }

        // Add project to Master Storage
        makeProject.MASTER_STORAGE.push(this);
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
        }else if (this.dueDate = null) {
            console.log("No due date has been assigned to the list");
        } else {
            //console.log("Error: date format is invalid.");
            //console.log(date.getTime());
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
    setLabel(labelsArray) {
        labelsArray.forEach(label => {
            if (labels.has(label) || userUniqueLabels.includes(label)) {
                this.label.add(label);
                console.log(label);
            } else {
                console.log("Either no label has been added or the label is invalid.")
            }
        });
        
    }

    //method to remove label 
    removelabel(labelsToRemove) {
        if (Array.isArray(labelsToRemove)) {
            labelsToRemove.forEach(label => {
                if(this.label.has(label)) {
                    this.label.delete(label);
                    console.log(`${label} label has been removed from ${this.title}`);
                } else {
                    console.log(`Error: ${label} label was not assigned to ${this.title}`);
                }
            });
        } else {
            if (this.label.has(labelsToRemove)) {
                this.label.delete(labelsToRemove);
                console.log(`${labelsToRemove} label has been removed from ${this.title}`);
            } else {
                console.log(`Error: ${labelsToRemove} label was not assigned to ${this.title}`);
            }
        }
    }

    // method to delete project from Master Storage
    deleteProject() {
        const index = makeProject.MASTER_STORAGE.indexOf(this);
        if (index > -1) {
            makeProject.MASTER_STORAGE.splice(index, 1);
        }
    }

    // Helper method to validate labels
    isValidLabel(label) {
        return labels.has(label) || userUniqueLabels.includes(label);
    }
}

export default makeProject;

// creation of a default project = new project(title, description, due date, priority, label)
export const defaultProject = new makeProject("Default List", "List to begin tracking general todo items.", null, "average priority", "None");


// project completion status