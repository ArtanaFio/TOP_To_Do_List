// create todo-item
export class makeTodoItem {
    constructor(title, description, dueDate, priority, notes, checklist) {
        this.title = title; // string
        this.description = description; // string
        this.dueDate = dueDate; // string?
        this.priority = priority; // string
        this.notes = notes; // array of strings
        this.checklist = checklist; // array of strings
    }

    addNotes(note) {
        makeTodoItem.notes.push(note);
    }

    addChecklist(step) {
        makeTodoItem.checklist.push(step);
    }
}

// edit todo-item


// delete todo-item
// project.splice(todo-item, 1);
