import { projectObj } from './index';
import { render } from './render';

function saveToStorage() {
  localStorage.setItem('projects', JSON.stringify(projectObj));
}

function createProject(name) {
  clearActiveProjects();

  projectObj[name] = {
    todo: [],
    active: true,
  }
  
  saveToStorage();
}

function deleteProject(e) {
  const target = e.target.parentElement.querySelector('li').innerHTML;
  delete projectObj[target];

  const header = document.getElementById('main-project-header');
  const isActive = returnActiveProjects(); 

  if (header.innerHTML === target) {
    setDefaultProject();
    render();
  } else if (isActive.includes(header.innerHTML)) {
    render();
  } else {
    render();
  }

  saveToStorage();
}

function editProjectName(name) {
  const target = document.getElementById('main-project-header').innerHTML;

  // todo: refactor. this changes the order on the sidebar list
  projectObj[name] = projectObj[target];
  delete projectObj[target];

  for (let i = 0; i < projectObj[name]['todo'].length; i++) {
    projectObj[name]['todo'][i]['project'] = name;
  }
  
  saveToStorage();
  render();
}

function setAllProjectsActive() {
  let list = document.getElementById('project-list');
  list.classList.remove(...list.classList);
  list.classList.add('all-view');

  for (let key in projectObj) {
    projectObj[key]['active'] = true;
  }

  saveToStorage();
}

function clearActiveProjects() {
  for (let key in projectObj) {
    projectObj[key]['active'] = false;
  }

  saveToStorage();
}

function setDefaultProject() {
  let list = document.getElementById('project-list');
  list.classList.remove(...list.classList);
  list.classList.add('project-view');

  clearActiveProjects();

  let target = Object.keys(projectObj)[0];
  if (target) {
    projectObj[target]['active'] = true;
  }

  saveToStorage();
}

function setActiveProject(e) {
  let list = document.getElementById('project-list');
  list.classList.remove(...list.classList);
  list.classList.add('project-view');
  clearActiveProjects();

  const target = e.target.parentElement.querySelector('li').innerHTML;
  projectObj[target]['active'] = true;

  saveToStorage();
  render();
}

function returnAllProjects() {
  return Object.keys(projectObj);
}

function returnActiveProjects() {
  let projects = [];
  for (let key in projectObj) {
    if (projectObj[key]['active'] === true) {
      projects.push(key);
    }
  }
  return projects;
}

function returnActiveTodos() {
  let activeProjects = returnActiveProjects();
  let todos = [];

  for (let i = 0; i < activeProjects.length; i++) {
    let currentProject = activeProjects[i];
    todos = todos.concat(projectObj[currentProject]['todo']);
  }

  return todos;
}

function createTodo(name, date) {
  // only allows todo creation in project view, 
  // add todo button not displayed in all view
  let current = returnActiveProjects()[0]; 

  projectObj[current]['todo'].push({
    name: name,
    dueDate: date,
    complete: false,
    project: current,
  });

  saveToStorage();
  render();
}

function deleteTodo(e) {
  const project = e.target.closest('.todo-item-container').classList[1];
  const target = e.target.closest('.todo-item-container').querySelector('li').innerHTML;

  let index
  for (let i = 0; i < projectObj[project]['todo'].length; i++) {
    if (projectObj[project]['todo'][i]['name'] === target) {
      index = i;
    }
  }
  projectObj[project]['todo'].splice(index, 1);

  saveToStorage();
  render();
}

function hideTodoInputs() {
  const normal = document.querySelectorAll('.normal-view');
  normal.forEach(element => element.style.display = 'flex');

  const edit = document.querySelectorAll('.edit-view');
  edit.forEach(element => element.style.display = 'none');
}

function toggleEditView(e) {
  hideTodoInputs();

  const target = e.target.closest('.normal-view');
  target.style.display = 'none';

  const input = e.target.closest('.todo-item-container').querySelector('.edit-view');
  input.style.display = 'flex';
}

function submitTodoEdit(e) {
  const project = e.target.closest('.todo-item-container').classList[1];
  const target = e.target.closest('.todo-item-container').querySelector('li').innerHTML;
  console.log(projectObj);
  let index;
  for (let i = 0; i < projectObj[project]['todo'].length; i++) {
    if (projectObj[project]['todo'][i]['name'] === target) {
      index = i;
    }
  }

  let newTodo = e.target.closest('.edit-view').querySelector('.todo-text-input').value;
  let newDate = e.target.closest('.edit-view').querySelector('.todo-date-input').value;

  if (newTodo.length === 0) {
    alert('Please enter a valid task!');
  } else {
    projectObj[project]['todo'][index]['name'] = newTodo;
    projectObj[project]['todo'][index]['dueDate'] = newDate;
    
    saveToStorage();
    render();
  }
}

function toggleCompletion(e) {
  const project = e.target.closest('.todo-item-container').classList[1];
  const target = e.target.closest('.todo-item-container').querySelector('li').innerHTML;

  let index
  for (let i = 0; i < projectObj[project]['todo'].length; i++) {
    if (projectObj[project]['todo'][i]['name'] === target) {
      index = i;
    }
  }

  if (projectObj[project]['todo'][index]['complete']) {
    projectObj[project]['todo'][index]['complete'] = false;
  } else {
    projectObj[project]['todo'][index]['complete'] = true;
  }

  saveToStorage();
  render();
}

function showAllTodos() {
  setAllProjectsActive();
  render();
}

export { 
  returnActiveProjects, 
  returnAllProjects, 
  returnActiveTodos,
  createProject,
  createTodo,
  deleteProject,
  setActiveProject,
  setDefaultProject,
  deleteTodo,
  toggleEditView,
  submitTodoEdit,
  hideTodoInputs,
  toggleCompletion,
  showAllTodos,
  editProjectName
};
        