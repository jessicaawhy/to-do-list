import { createLabelTag, createInputTag, createButton, append } from './buildingBlocks';
import { submitNewProject } from './createProject';

function createProjectForm() {
  let formContainer = document.createElement('div');
  append('content', formContainer);
  formContainer.setAttribute('id', 'form-container');
  
  append('form-container', createButton('new-project-button', 'New Project'));
  
  let projectForm = document.createElement('form');
  append('form-container', projectForm);
  projectForm.setAttribute('id', 'project-form');
  projectForm.setAttribute('onsubmit', 'return false');
  
  append('project-form',createLabelTag('name', 'Project Name'));
  append('project-form', createInputTag('name', 'text', 'name-input', 'Name'));
  
  let submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Submit');
  submitButton.setAttribute('id', 'submit-button');
  submitButton.innerHTML = 'Submit';
  append('project-form', submitButton);
  
  const newProject = document.getElementById('new-project-button');
  newProject.addEventListener('click', toggleDisplay);
  
  const submit = document.getElementById('submit-button');
  submit.addEventListener('click', submitNewProject);
}

function toggleDisplay() {
  let displaySetting = document.getElementById('project-form');
  if (displaySetting.style.display === "none" || !displaySetting.style.display) {
    displaySetting.style.display = "block";
  } else {
    displaySetting.style.display = "none";
  }
}

export { createProjectForm };
