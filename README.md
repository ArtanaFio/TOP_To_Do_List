# TOP_To_Do_List

## Description
Dynamically create a todo list application ensuring todo-items have title, description, dueDate, and priority properties, including other features. This project focuses on applying the single responsibility principle and relying on loosely closed modules.

## Table of Contents
- [Description] (#description)
- [Technologies Used] (#technologies-used)
- [Project Structure] (#project-structure)
- [Project Setup] (#project-setup)
- [Instructions] (#instructions)
- [Deployment] (#deployment)
- [Acknowledgments] (#acknowledgments)

## Technologies Used
- JavaScript used for DOM manipulation and dynamically generation of HTML content.
- Webpack used for module bundling
- CSS3 used for styling the todo list application
- HTML5 used to create the basic structure and to be dynamically populated by JavaScript

# Project Structure
```
TOP_To_Do_List/
├--dist/
├--node_modules/
├--src/
|   ├--assets/
|      ├--fonts/
|         ├--.ttf
|         └--.ttf
|      ├--images/
|         ├--add.svg
|         ├--check_circle.svg
|         ├--delete.svg
|         ├--exit.svg
|         ├--priority_high.svg
|         ├--search.svg
|         └--settings.svg
|      └--styles/
|         └--main.css
|   ├--modules/
|      ├--todo-items.js
|      ├--projects.js
|      └--user-interface.js
|   ├--index.js
|   └--index.html
├--.gitignore
├--package.json
├--package-lock.json
├--webpack.config.js
└--README.md
```

## Project Setup
1. Initialize the Project: run 'npm init -y' in the project directory to generate a 'package.json' file.
2. Install dependencies: run 'npm install webpack-cli --save-dev' to install webpack and webpack-cli
3. Webpack Configuration: create a 'webpack.config.js' file in the root directory with the necessary configuration, including 'html-webpack-plugin'
4. Create a '.gitignore' fle in the root directory to ignore the node_modules and dist directories

## Instructions
1. Initial Setup:
    - Add an HTML skeleton inside src/index.html'.
    -run 'npx webpack' and load 'dist/index.html' in a browswer to verify everything is working.
2. Dynamically generate content:
    - Write JavaScript code to dynamically create and append elements.
    - Create 'todo' objects with classes.
    - Ensure 'todo-items' have the properties 'title', 'description', 'dueDate', 'priority', 'notes', and 'checklist'.
    - Create 'projects' that act as specific todo lists within the application, while allowing users to see a default project when first opening the app, in which all their todos are put. Users should be able to create new projects and choose which project their todo-items go into.
3. Separate the application logic (including creation of new todo-items, setting todo-items as complete, and changing todo-items' priorities) from the DOM-related elements by putting them into different modules.
4. The User Interface should allow users to:
    - View all projects.
    - View all todo-items in each project (specifically the 'title' and 'dueDate', and color-coding by priorities).
    - Expand a single todo-item to see and edit its details.
    - Delete a todo-item
5. Consider using external libraries from npm such as 'date-fns' to format and manipulate dates and times.
6. Use Web Storage API (localStorage) to allow users to store their todo information on their computers regardless of refreshing the application.
    - Set up a function that saves the projects and todo-items to 'localStorage' every time a new project or todo-item is created.
    - Set up a function that looks for that data in 'localStorage' when your app is first loaded.
    - Ensure the app doesn't crash if the data to be retrieved is not stored in 'localStorage'.
    - Use DevTools to inspect data saved in 'localStorage' by opening the 'Application' tab in DevTools and selecting 'Local Storage' under 'Storage'. Every time you add, update, and delete data from 'localStorage' in your app, those changes will be reflected in DevTools.
    - Note that 'localStorage' uses JSON to send and store data; all data will be in JSON format. Functions cannot be stored in JSON, so you must learn a different way to add methods back to your object properties once fetched.

## Deployment
1. Follow the instructions to deploy your 'dist' directory to GitHub Pages.
2. Add an npm script in 'package.json' to simplify the deployment process:
    "scripts": {
        "deploy": "git subtree push --prefix dist origin gh-pages"
    }
3. Run 'npm run deploy' to update the live preview.

## Acknowledgments
-**Fonts:**
-**Photo credits:**