import { createMain, createSidebar, create } from './createPage';
import { addModalListeners } from './modal';

// createSidebar();
// createMain();
addModalListeners();

const projectObj = {
  Coding: [
    'Read articles',
    'Do challenge problems',
    'Daily commit'
  ],
  Chores: [
    'Get groceries',
    'Do laundry',
    'Wash dishes'
  ]
}

let current = Object.keys(projectObj)[0];

function render(obj) {
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
      classList: [],
      parentElement: container,
    })
    
    let deleteButton = create({
      type: 'span', 
      innerHTML: 'x',
      attributes: {
        id: ''
      },
      classList: [],
      parentElement: container,
    })

    project.addEventListener('click', (e) => switchProjectView(e));
    deleteButton.addEventListener('click', (e) => deleteProject(e));
  }
  
  if (current) {
    let header = document.getElementById('main-project-header');
    header.innerHTML = current;
    let container = document.getElementById('main-container');
    container.style.display = 'block';
    let taskButton = document.getElementById('add-todo-button');
    taskButton.style.display = 'block';
  
    for (let i = 0; i < projectObj[current].length; i++) {
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
        innerHTML: `${projectObj[current][i]}`,
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
        classList: [],
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

function addNewProject() {
  let project = document.getElementById('project-name').value;
  document.getElementById('project-name').value = '';
  projectObj[project] = ['Add tasks here!'];
  current = project;

  deleteElements();
  render(projectObj);
  
  const modal = document.getElementById('project-modal');
  modal.style.display = "none";
}

function addNewTodo() {
  let todo = document.getElementById('todo-name').value;
  document.getElementById('todo-name').value = '';
  projectObj[current].push(todo)

  deleteElements();
  render(projectObj);

  const modal = document.getElementById('todo-modal');
  modal.style.display = "none";
}

function switchProjectView(e) {
  current = e.target.innerHTML;
  deleteElements();
  render(projectObj);
}

function deleteProject(e) {
  let target = e.target.parentElement.firstChild.innerHTML;

  delete projectObj[target];
  deleteElements();
  
  if (current === target) {
    current = Object.keys(projectObj)[0];
  }
  render(projectObj);
}

let submitButton = document.getElementById('submit-project');
submitButton.onclick = addNewProject;
let todoButton = document.getElementById('submit-todo');
todoButton.onclick = addNewTodo;

render(projectObj);

