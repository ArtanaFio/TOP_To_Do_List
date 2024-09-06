import plus from '../assets/images/add.svg';
import info from '../assets/images/info.svg';
import edit from '../assets/images/edit.svg';
import exclamation from '../assets/images/priority_high.svg';

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

//export default layout;

// function to create default project to be exported to entry point

export function defaultProjectDisplay(title, description, arrayLength) {
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

    const editDoc = parser.parseFromString(edit, 'image/svg+xml');
    const editSvg = editDoc.querySelector('svg');
    editSvg.classList.add("edit-icon");
    defaultTop.appendChild(editSvg);

    const taskBar = document.createElement('div');
    taskBar.classList.add("task-bar");
    defaultList.appendChild(taskBar);
    
    const addDoc = parser.parseFromString(plus, 'image/svg+xml');
    const addSvg = addDoc.querySelector('svg');
    taskBar.appendChild(addSvg);

    const taskInput = document.createElement('input');
    taskInput.classList.add("input");
    taskInput.placeholder = "Task";
    taskBar.appendChild(taskInput);

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
    defaultTaskNumber.textContent = "23";//arrayLength;
    defaultTaskNumber.classList.add("arrayNumber");
    defaultTaskTracker.appendChild(defaultTaskNumber);

    const priorityDoc = parser.parseFromString(exclamation, 'image/svg+xml');
    const prioritySvg = priorityDoc.querySelector('svg');
    prioritySvg.classList.add("priority");
    bottomLine.appendChild(prioritySvg);

}

function projectDisplay(title, description, arrayLength) {

}