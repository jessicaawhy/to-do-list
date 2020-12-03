import { projectObj } from './index';
import { create } from './create';
import { returnActiveProject } from './helpers';
import { addProjectListeners, addTodoListeners } from './listeners';

function render() {
  deleteElements();
  renderSidebar();
  renderMain();
  addProjectListeners();
  addTodoListeners();
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
        classList: ['todo-item-container'],
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
        innerHTML: `${projectObj[current]['todo'][i]['name']}`,
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
        innerHTML: `${projectObj[current]['todo'][i]['dueDate']}`,
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
          value: `${projectObj[current]['todo'][i]['name']}`,
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
          value: `${projectObj[current]['todo'][i]['dueDate']}`,
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
    
  } else {
    let header = document.getElementById('main-project-header');
    header.innerHTML = "Add a new project!";
    let container = document.getElementById('main-container');
    container.style.display = 'block';
    let taskButton = document.getElementById('add-todo-button');
    taskButton.style.display = 'none';
  }
}

export { render };
