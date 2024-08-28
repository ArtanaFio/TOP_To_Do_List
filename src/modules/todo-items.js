
// create todo-item
class makeTodoItem {
    static PRIORITIES = new Set(["low priority", "average priority", "high priority"]);

    constructor(title, description, dueDate, priority, notes, checklist) {
        this.title = title; // string
        this.description = description; // string
        this.dueDate = dueDate ? new Date(dueDate) : null; // date object, default to null if not specified
        this.priority = this.setPriority(priority); // priority object
        this.notes = notes; // array of strings
        this.checklist = checklist; // array of strings
    }

    // method to edit todo-item title
    editTitle(newTitle) {
        if (newTitle) {
            this.title = newTitle;
        } else {
            console.log("Error: title is empty.");
        }
    }

    // method to edit todo-item description
    editDescription(newDescription) {
        this.description = newDescription;
    }

    // method to edit todo-item due date
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
        if (makeTodoItem.PRIORITIES.has(priority)) {
            return priority;
        } else {
            console.log("Error: Invalid priority. Choose from the appropriate list of priorities.");
        }
    }

    // method to edit todo-item priority
    editPriority(newPriority) {
        if (makeTodoItem.PRIORITIES.has(newPriority)) {
            this.priority = newPriority;
        } else {
            console.log("Error: Invalid priority. Choose from the appropriate list of priorities.");
        }
    }

    // method to add todo-item note
    addNote(note) {
        this.notes.push(note);
    }

    // method to edit todo-item note depending on index
    editNote(index, newNote) {
        if (this.notes[index]) {
            this.notes[index] = newNote;
        } else {
            console.log("Error: note index is invalid.");
        }
    }

    // method to delete todo-item note depending on index
    deleteNote(index) {
        if(this.notes[index]) {
            this.notes.splice(index, 1);
        } else {
            console.log("Error: note cannot be deleted because index is invalid.");
        }
    }

    // method to add to todo-item's checklist
    addChecklistItem(item) {
        this.checklist.push({ item, completed: false });
    }

    // method to edit todo-item's checklist depending on index
    editChecklistItem(index, newItem) {
        if (this.checklist[index]) {
            this.checklist[index].item = newItem;
        } else {
            console.log("Error: checklist index is invalid.");
        }
    }

    // method to delete todo-item's checklist item depending on index
    deleteChecklistItem(index) {
        if (this.checklist[index]) {
            this.checklist.splice(index, 1);
        } else {
            console.log("Error: checklist item cannot be deleted because index is invalid.");
        }
    }

    // method to edit completion status of todo-item's checklist item
    toggleChecklistStatus(index) {
        if (this.checklist[index]) {
            this.checklist[index].completed = !this.addChecklistItem.completed;
        } else {
            console.log("Error: Checklist item index is invalid.");
        }
    }
}

export default makeTodoItem;
