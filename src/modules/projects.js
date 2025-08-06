// Project Management Module
// single responsibility purpose: manage projects that group todo-items

// create project using a class
class makeProject {

    static PRIORITIES = new Set(['Minor', 'Important', 'Urgent']);
    static LABELS = new Set(['Daily', 'Weekly', 'Monthly', 'Yearly']);
    static MASTER_STORAGE = []; // Central Storage for ALL lists, including the default list

    constructor(title, description, dueDate, priority, label) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate ? this.constructor.parseLocalDate(dueDate) : null;
        this.priority = this.setPriority(priority);
        this.label = this.setLabel(label);
        this.tasks = [];

        // Add project to Master Storage
        makeProject.MASTER_STORAGE.push(this);
    }

    static parseLocalDate(dueDate) {
        if (typeof dueDate !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(dueDate)) {
        return new Date(dueDate); // fallback
        }

        const [year, month, day] = dueDate.split("-").map(Number);
        return new Date(year, month - 1, day);
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
        if (newDueDate === null || newDueDate === "") {
            this.dueDate = null;
            console.log("No due date has been assigned to the list");
            return;
        }

        const date = this.constructor.parseLocalDate(newDueDate);
        if (!isNaN(date.getTime())) {
            this.dueDate = date;
        } else {
            console.log("Error: date format is invalid.");
            console.log(date.getTime());
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
        return makeProject.LABELS.has(label) ? label : null;
    }

    // method to edit project label
    editLabel(newLabel) {
        if (makeProject.LABELS.has(newLabel)) {
            this.label = newLabel;
        } else if (newLabel === null) {
            this.label = null;
        } else {
            console.log(`Error: '${newLabel}' is not a valid label.`);
        }
    }

    //method to remove label 
    removelabel() {
        if (this.label !== null) {
            console.log(`${this.label} label has been removed from '${this.title}'`);
            this.label = null;
        } else {
            console.log(`No label to remove from '${this.title}'`);
        }
    }

    // method to delete project from Master Storage
    deleteProject() {
        const index = makeProject.MASTER_STORAGE.indexOf(this);
        if (index > -1) {
            makeProject.MASTER_STORAGE.splice(index, 1);
        }
    }
}

export default makeProject;

// creation of a default project = new project(title, description, due date, priority, label), date format: "2025-03-18T00:00:00-05:00" or null
export const defaultProject = new makeProject('Default List', 'List to begin tracking general todo items.', null, 'Important', null);


// project completion status