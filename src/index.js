import { create } from './createPage';
import listeners from './listeners';

const projectObj = {
  Coding: {
    todo: [
      'Read articles',
      'Do challenge problems',
      'Daily commit'
    ],
    active: true,
  },
  Chores: {
    todo: [
      'Get groceries',
      'Do laundry',
      'Wash dishes'
    ],
    active: false,
  }
}

// delete this
function returnActiveProject() {
  for (let key in projectObj) {
    if (projectObj[key]['active']) {
      return key;
    }
  }
}

function clearActiveProject() {
  for (let key in projectObj) {
    projectObj[key]['active'] = false;
  }
}

render();


function render() {
  deleteElements();
  renderSidebar();
  renderMain();

}

function deleteElements() {
  let projects = document.getElementById('project-list');
  while (projects.firstChild) {
    projects.removeChild(projects.lastChild);
  }

  let todos = document.getElementById('todo-list');
  while (todos.firstChild) {
    todos.removeChild(todos.lastChild);
  }

  let header = document.getElementById('main-project-header');
  header.innerHTML = '';
  let container = document.getElementById('main-container');
  container.style.display = 'none';
}

function renderSidebar() {
  for (let key in projectObj) {
    let container = create({
      type: 'div', 
      innerHTML: '',
      attributes: {
        id: ''
      },
      classList: [],
      parentID: 'project-list',
    })
    
    let project = create({
      type: 'li', 
      innerHTML: `${key}`,
      attributes: {
        id: ''
      },
      classList: ['project'],
      parentElement: container,
    })
    
    let deleteButton = create({
      type: 'span', 
      innerHTML: 'x',
      attributes: {
        id: ''
      },
      classList: ['delete-project'],
      parentElement: container,
    })
  }
}

function renderMain() {
  let current = returnActiveProject();
  console.log(projectObj[current]['todo'])


  if (current) {
    let header = document.getElementById('main-project-header');
    header.innerHTML = current;
    let container = document.getElementById('main-container');
    container.style.display = 'block';
    let taskButton = document.getElementById('add-todo-button');
    taskButton.style.display = 'block';
    
    for (let i = 0; i < projectObj[current]['todo'].length; i++) {
      let container = create({
        type: 'div', 
        innerHTML: '',
        attributes: {
          id: ''
        },
        classList: [],
        parentID: 'todo-list',
      })
      
      let todo = create({
        type: 'li', 
        innerHTML: `${projectObj[current]['todo'][i]}`,
        attributes: {
          id: ''
        },
        classList: [],
        parentElement: container,
      })
      
      let deleteButton = create({
        type: 'span', 
        innerHTML: 'x',
        attributes: {
          id: ''
        },
        classList: ['delete-todo'],
        parentElement: container,
      })
    }
    
  } else {
    let header = document.getElementById('main-project-header');
    header.innerHTML = "Add a new project!";
    let container = document.getElementById('main-container');
    container.style.display = 'block';
    let taskButton = document.getElementById('add-todo-button');
    taskButton.style.display = 'none';
  }
}

export { projectObj, render, clearActiveProject, returnActiveProject };
