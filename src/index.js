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

let current = Object.keys(projectObj)[0]


function render(projectObj) {
  for (let key in projectObj) {
    let project = create({
      type: 'li', 
      innerHTML: `${key}`,
      attributes: {
        id: ''
      },
      classList: [],
      parentID: 'project-list',
    })
  }
  
  let header = document.getElementById('main-project-header')
  header.innerHTML = current;
  let container = document.getElementById('main-container');
  container.style.display = 'block';

  for (let i = 0; i < projectObj[current].length; i++) {
    create({
      type: 'li', 
      innerHTML: `${projectObj[current][i]}`,
      attributes: {
        id: ''
      },
      classList: [],
      parentID: 'todo-list',
    })
  }
}

function deleteElements() {
  let projects = document.getElementById('project-list');
  while (projects.firstChild) {
    projects.removeChild(projects.lastChild)
  }

  let todos = document.getElementById('todo-list');
  while (todos.firstChild) {
    todos.removeChild(todos.lastChild)
  }
  let header = document.getElementById('main-project-header')
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
  render(projectObj)
  
  const modal = document.getElementById('project-modal');
  modal.style.display = "none";
}

function addNewTodo() {
  let todo = document.getElementById('todo-name').value;
  document.getElementById('todo-name').value = '';
  projectObj[current].push(todo)

  deleteElements();
  render(projectObj)

  const modal = document.getElementById('todo-modal');
  modal.style.display = "none";
}


let submitButton = document.getElementById('submit-project');
submitButton.onclick = addNewProject;
let todoButton = document.getElementById('submit-todo');
todoButton.onclick = addNewTodo;

render(projectObj)
