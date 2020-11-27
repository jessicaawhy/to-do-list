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

function renderSidebar(){
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
    deleteButton.addEventListener('click', (e) => deleteItem(e));
  }
}

function renderMain(){
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

      deleteButton.addEventListener('click', (e) => deleteItem(e));
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

function switchProjectView(e) {
  current = e.target.innerHTML;
  
  render(projectObj);
}

function addNewItem(e) {
  let target = e.target.id
  if (target === 'submit-todo') {
    let todo = document.getElementById('todo-name').value;
    document.getElementById('todo-name').value = '';
    projectObj[current].push(todo)
  } else if (target === 'submit-project') {
    let project = document.getElementById('project-name').value;
    document.getElementById('project-name').value = '';
    projectObj[project] = ['Add tasks here!'];
    current = project;
  }

  const modal = document.getElementById('todo-modal');
  modal.style.display = "none";

  render(projectObj);
}

function deleteItem(e) {
  let container = e.target.closest('ul').id;

  if (container === 'todo-list') {
    let target = e.target.parentElement.firstChild.innerHTML;
    let index = projectObj[current].indexOf(target);

    projectObj[current].splice(index, 1);
  } else if (container === 'project-list') {
    let target = e.target.parentElement.firstChild.innerHTML;

    delete projectObj[target];
    if (current === target) {
      current = Object.keys(projectObj)[0];
    }
  }

  render(projectObj);
}

let submitButton = document.getElementById('submit-project');
submitButton.addEventListener('click', (e) => addNewItem(e));
let todoButton = document.getElementById('submit-todo');
todoButton.addEventListener('click', (e) => addNewItem(e));

render(projectObj);

