import { create } from './create';
import { returnActiveProjects, returnAllProjects, returnActiveTodos, setDefaultProject } from './helpers';
import { addProjectListeners, addTodoListeners } from './listeners';

function updateHeader() {
  let list = document.getElementById('project-list');
  if (!list.classList[0]) setDefaultProject();

  let header = document.getElementById('main-project-header');
  let todoButton = document.getElementById('add-todo-button');
  let editBtn = document.getElementById('edit-project-btn');

  let projects = returnActiveProjects()

  if (list.classList[0] === 'project-view' && projects.length > 0) {
    header.innerHTML = `${projects[0]}`;
    todoButton.style.display = 'flex';
    editBtn.style.display = 'block';
  } else if (list.classList[0] === 'project-view' && projects.length === 0) {
    header.innerHTML = 'Add new project!';
    todoButton.style.display = 'none';
    editBtn.style.display = 'block';
  } else {
    header.innerHTML = 'All tasks';
    todoButton.style.display = 'none';
    editBtn.style.display = 'none';
  }
}

function render() {
  updateHeader();
  renderSidebar();
  renderMain();
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

  let header = document.getElementById('main-project-header').innerHTML;
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

    if (header !== todos[i]['project']) {
      let projectParent = create({
        type: 'span', 
        innerHTML: `${todos[i]['project']}`,
        attributes: {
          id: '',
        },
        classList: ['project-parent'],
        parentElement: endContainer,
      })
    }

    let editButton = create({
      type: 'img', 
      innerHTML: '',
      attributes: {
        id: '',
        src: './src/public/edit-pencil.png'
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

export { render };
