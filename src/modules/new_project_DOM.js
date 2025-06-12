// function to create new projects/lists
export function projectDisplay() {
    const projectContainer = document.getElementById("project-container");
    const newListButton = document.getElementById("new-list-button");

    newListButton.disabled = true;

    newListButton.addEventListener("click", () => {
        const newProject = document.createElement("div");
        newProject.classList.add("list");
        projectContainer.appendChild(newProject);
    });
};