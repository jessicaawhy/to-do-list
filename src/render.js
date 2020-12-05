import { create } from './create';
import { returnActiveProjects, returnAllProjects, returnActiveTodos } from './helpers';
import { addProjectListeners, addTodoListeners } from './listeners';

function updateHeader() {
  let header = document.getElementById('main-project-header');
  let todoButton = document.getElementById('add-todo-button');

  let projects = returnActiveProjects();

  if (projects.length === 0) {
    header.innerHTML = 'Add new project!';
    todoButton.style.display = 'none';
  } else if (projects.length === 1) {
    header.innerHTML = `${projects[0]}`;
    todoButton.style.display = 'flex';
  } else {
    header.innerHTML = 'All tasks';
    todoButton.style.display = 'none';
  }
}

function render() {
  renderSidebar();
  renderMain();
  updateHeader();
}

function deleteSidebar() {
  let projects = document.getElementById('project-list');
  while (projects.firstChild) {
    projects.removeChild(projects.lastChild);
  }
}

function deleteMain() {
  let todos = document.getElementById('todo-list');
  while (todos.firstChild) {
    todos.removeChild(todos.lastChild);
  }
}

function renderSidebar() {
  deleteSidebar();
  let projects = returnAllProjects();

  for (let i = 0; i < projects.length; i++) {
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
      innerHTML: `${projects[i]}`,
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

  addProjectListeners();
}

function renderMain() {
  deleteMain();
  let todos = returnActiveTodos();
  
  for (let i = 0; i < todos.length; i++) {

    let container = create({
      type: 'div', 
      innerHTML: '',
      attributes: {
        id: ''
      },
      classList: ['todo-item-container', todos[i]['project']],
      parentID: 'todo-list',
    })

    // create normal view container
    let normalView = create({
      type: 'div', 
      innerHTML: '',
      attributes: {
        id: ''
      },
      classList: ['normal-view'],
      parentElement: container,
    })

    let checkBox = create({
      type: 'input', 
      innerHTML: '',
      attributes: {
        id: '',
        type: 'checkbox'
      },
      classList: ['todo-checkbox'],
      parentElement: normalView,
    })
    
    let todo = create({
      type: 'li', 
      innerHTML: `${todos[i]['name']}`,
      attributes: {
        id: ''
      },
      classList: ['todo-text'],
      parentElement: normalView,
    })
    
    let endContainer = create({
      type: 'div', 
      innerHTML: '',
      attributes: {
        id: ''
      },
      classList: ['end-container'],
      parentElement: normalView,
    })

    let dateElement = create({
      type: 'span', 
      innerHTML: `${todos[i]['dueDate']}`,
      attributes: {
        id: '',
      },
      classList: ['todo-date'],
      parentElement: endContainer,
    })

    let editButton = create({
      type: 'img', 
      innerHTML: '',
      attributes: {
        id: '',
        src: '../src/public/edit-pencil.png'
      },
      classList: ['todo-edit-btn'],
      parentElement: endContainer,
    })
    
    let deleteButton = create({
      type: 'span', 
      innerHTML: 'x',
      attributes: {
        id: ''
      },
      classList: ['todo-delete-btn'],
      parentElement: endContainer,
    })

    if (todos[i]['complete'] === true) {
      checkBox.checked = true;
      normalView.classList.add('complete');
    } else {
      checkBox.checked = false;
      normalView.classList.remove('complete');
    }

    // create edit view container

    let editView = create({
      type: 'div', 
      innerHTML: '',
      attributes: {
        id: ''
      },
      classList: ['edit-view'],
      parentElement: container,
    })
    editView.style.display = 'none';

    let todoInput = create({
      type: 'input', 
      innerHTML: '',
      attributes: {
        id: '',
        value: `${todos[i]['name']}`,
      },
      classList: ['todo-text-input'],
      parentElement: editView,
    })

    let editEndContainer = create({
      type: 'div', 
      innerHTML: '',
      attributes: {
        id: ''
      },
      classList: ['end-container'],
      parentElement: editView,
    })

    let dateInput = create({
      type: 'input', 
      innerHTML: '',
      attributes: {
        id: '',
        value: `${todos[i]['dueDate']}`,
        type: 'date'
      },
      classList: ['todo-date-input'],
      parentElement: editEndContainer,
    })

    let submit = create({
      type: 'button', 
      innerHTML: 'submit',
      attributes: {
        id: '',
        src: ''
      },
      classList: ['todo-submit-btn'],
      parentElement: editEndContainer,
    })
    
    let cancel = create({
      type: 'button', 
      innerHTML: 'cancel',
      attributes: {
        id: ''
      },
      classList: ['todo-cancel-btn'],
      parentElement: editEndContainer,
    })
  }

  addTodoListeners();
}

export { render, renderMain, renderSidebar };
