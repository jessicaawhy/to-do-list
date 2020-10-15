import { Project } from './project';
import { createLabelTag, createInputTag, createButton, append } from './buildingBlocks';

const projectController = (() => {
  const projectList = {};

  function createProjectPage() {
    const formContainer = document.createElement('div');
    append('content', formContainer);
    formContainer.setAttribute('id', 'form-container');
    
    append('form-container', createButton('new-project-button', 'New Project'));
    const newProjectButton = document.getElementById('new-project-button');
    newProjectButton.addEventListener('click', toggleDisplay);
    
    const projectForm = document.createElement('form');
    append('form-container', projectForm);
    projectForm.setAttribute('id', 'project-form');
    projectForm.setAttribute('onsubmit', 'return false');
    
    append('project-form',createLabelTag('name', 'Project Name'));
    append('project-form', createInputTag('name', 'text', 'name-input', 'Name'));
    
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');
    submitButton.setAttribute('id', 'submit-button');
    submitButton.innerHTML = 'Submit';
    submitButton.addEventListener('click', addProject);
    append('project-form', submitButton);

    const element = document.createElement('div');
    element.setAttribute('id', 'content-container');
    append('content', element);
  }

  function toggleDisplay(id) {
    const displaySetting = document.getElementById('project-form'); // swap out for id var
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
      append('content-container', projectContainer);
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
