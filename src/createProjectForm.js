import {createLabelTag, createInputTag, createButton, append} from './buildingBlocks';

function createProjectForm() {
  append('content', createButton('new-project-button', 'New Project'));
  let newProjectButton = document.getElementById('new-project-button');
  
  let formContainer = document.createElement('div');
  append('content', formContainer);
  let projectForm = document.createElement('form');
  append('content', projectForm);
  projectForm.setAttribute('id', 'projectForm');
  
  append('projectForm',createLabelTag('name', 'Project Name'));
  append('projectForm', createInputTag('name', 'text', '', 'Name'));
  
  let submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Submit');
  submitButton.innerHTML = 'Submit';
  append('projectForm', submitButton);
  
  newProjectButton.addEventListener('click', toggleDisplay);
}

function toggleDisplay() {
  if (!projectForm.style.display || projectForm.style.display =="none") {
    projectForm.style.display = "block";
  } else {
    projectForm.style.display = "none";
  }
}

export {createProjectForm}