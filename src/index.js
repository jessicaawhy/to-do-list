import { createProjectForm } from './createProjectForm';
import { submitNewProject } from './createProject'

createProjectForm();

const thisbutton = document.getElementById('submit-button');
thisbutton.addEventListener('click', submitNewProject);
