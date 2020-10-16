import { Project } from './project';
import { pageStructure, sidebarStructure, mainStructure, forms } from './projectStructure';

const projectView = (() => {
  const projectList = {};

  function create(structure) {
    for (let i = 0; i < structure.length; i++) {
      createElement(structure[i]);
    }
  }

  function createElement(elementObject) {
    const element = document.createElement(elementObject['type']);
    element.innerHTML = elementObject['innerHTML'] || '';

    const parent = document.getElementById(elementObject['parent']);
    parent.appendChild(element);

    for (let key in elementObject['attributes']) {
      element.setAttribute(key, elementObject['attributes'][key]);
    }
  }

  function toggleDisplay(id) {
    const displaySetting = document.getElementById('add-project-form'); // swap out for id var
    if (displaySetting.style.display === "none" || !displaySetting.style.display) {
      displaySetting.style.display = "block";
    } else {
      displaySetting.style.display = "none";
    }
  }

  function submitProject() {
    const name = document.getElementById("project-name-input").value;
    if (projectList[name]) {
      console.log('Please choose another name'); // change this to a box alert later
    } else {
      const project = new Project(name);
      projectList[name] = project;
      document.getElementById("project-name-input").value = '';
  
      let container = [{ 
        type: 'div',
        parent: 'sidebar-container',
        attributes: {
          id: name
        }
      },
      { 
        type: 'h3',
        parent: name,
        innerHTML: name,
        attributes: {
          classList: 'project'
        }
      },
      { 
        type: 'button',
        parent: name,
        innerHTML: 'Delete Project',
        attributes: {
        }
      }];

      create(container);
      const deleteButton = document.getElementById(`${name}`).lastChild;
      deleteButton.addEventListener('click', (e) => deleteProject(e));
    }
  }

  function deleteProject(e) {
    const name = e.target.closest('div').firstChild.innerHTML;
    delete projectList[name];

    const target = e.target.closest('div');
    target.remove();
  }

  create(pageStructure);
  create(sidebarStructure);
  create(mainStructure);
  create(forms);

  const addProjectButton = document.getElementById('add-project-button');
  addProjectButton.addEventListener('click', toggleDisplay);
  const submitProjectButton = document.getElementById('submit-project-button');
  submitProjectButton.addEventListener('click', submitProject);

})()
