
// basic page display without lists
export function basicPageLayout() {
    const pageSpace = document.getElementById('page-space');
    
    const title = document.createElement('h1');
    title.id = "document-title";
    title.textContent = "TOP ToDo Hub";
    pageSpace.appendChild(title);

    const projectContainer = document.createElement('div');
    projectContainer.id = "project-container";
    pageSpace.appendChild(projectContainer);

    const buttonContainer = document.createElement('div');
    buttonContainer.id = "button-container";
    pageSpace.appendChild(buttonContainer);

    const newListButton = document.createElement('button');
    newListButton.id = "new-list-button";
    newListButton.classList.add("static-list-button");
    newListButton.textContent = "Create Project";
    buttonContainer.appendChild(newListButton);

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