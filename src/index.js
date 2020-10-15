import { Project } from './project';

const projectController = (() => {
  const projectList = {};

  function createProjectPage() {
    const content = document.querySelector('#content');

    // Create sidebar element container
    const sidebar = document.createElement('div');
    content.appendChild(sidebar);
    sidebar.setAttribute('id', 'sidebar');
    // Add header
    const heading = document.createElement('h1');
    heading.innerHTML = 'Projects';
    sidebar.appendChild(heading);
    // Add project list container
    const projectListContainer = document.createElement('div');
    projectListContainer.setAttribute('id', 'projects-list-container');
    sidebar.appendChild(projectListContainer);
    // Add new project button for form display
    const newProjectButton = document.createElement('button');
    sidebar.appendChild(newProjectButton);
    newProjectButton.setAttribute('id', 'new-project-button');
    newProjectButton.innerHTML = 'New Project';
    newProjectButton.addEventListener('click', toggleDisplay);
    // Add new project form
    const addProjectsForm = document.createElement('form');
    sidebar.appendChild(addProjectsForm); // Maybe append somewhere else later. Make this modal type of form.
    addProjectsForm.setAttribute('id', 'add-project-form');
    addProjectsForm.setAttribute('onsubmit', 'return false');
    // Create label and input
    const newProjectLabel = document.createElement('label');
    addProjectsForm.appendChild(newProjectLabel); // Maybe append somewhere else later. Make this modal type of form.
    newProjectLabel.setAttribute('for', 'name');
    newProjectLabel.innerHTML = 'Project Name';
    const newProjectInput = document.createElement('input');
    addProjectsForm.appendChild(newProjectInput); // Maybe append somewhere else later. Make this modal type of form.
    newProjectInput.setAttribute('name', 'name');
    newProjectInput.setAttribute('type', 'text');
    newProjectInput.setAttribute('id', 'name-input');
    newProjectInput.setAttribute('placeholder', 'Name');
    // Add project elements to the page
    const addProjectButton = document.createElement('button');
    addProjectsForm.appendChild(addProjectButton); // Maybe append somewhere else later. Make this modal type of form.
    addProjectButton.setAttribute('type', 'submit');
    addProjectButton.setAttribute('value', 'Submit');
    addProjectButton.setAttribute('id', 'add-project');
    addProjectButton.innerHTML = 'Submit';
    addProjectButton.addEventListener('click', addProject);
  }

  function toggleDisplay(id) {
    const displaySetting = document.getElementById('add-project-form'); // swap out for id var
    if (displaySetting.style.display === "none" || !displaySetting.style.display) {
      displaySetting.style.display = "block";
    } else {
      displaySetting.style.display = "none";
    }
  }

  function addProject() {
    const name = document.getElementById("name-input").value;
    if (projectList[name]) {
      console.log('Please choose another name'); // change this to a box alert later
    } else {
      const project = new Project(name);
      projectList[name] = project;
      document.getElementById("name-input").value = '';
  
      const projectContainer = document.createElement('div');
      const element = document.createElement('h3');
      element.innerHTML = name;
      element.classList.add('project');
      projectContainer.appendChild(element);
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'Delete Project';
      deleteButton.addEventListener('click', (e) => deleteProject(e));
      projectContainer.appendChild(deleteButton);

      const parentContainer = document.getElementById('projects-list-container');
      parentContainer.appendChild(projectContainer);
    }
  }

  function deleteProject(e) {
    const name = e.target.closest('div').firstChild.innerHTML;
    delete projectList[name];

    const target = e.target.closest('div');
    target.remove();
  }

  createProjectPage();
})()
