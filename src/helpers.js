import { projectObj } from './index';
import { render, renderMain, renderSidebar } from './render';

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
  const target = e.target.parentElement.firstChild.innerHTML;
  delete projectObj[target];

  const isActive = returnActiveProjects(); 
  if (Object.keys(projectObj).length > 0 && (isActive.length === 0)) {
    setDefaultProject();
  }

  saveToStorage();
  render();
}

function setAllProjectsActive() {
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
  clearActiveProjects();

  let target = Object.keys(projectObj)[0];
  projectObj[target]['active'] = true;

  saveToStorage();
}

function setActiveProject(e) {
  clearActiveProjects();

  const target = e.target.parentElement.firstChild.innerHTML;
  projectObj[target]['active'] = true;

  saveToStorage();
  render();
}

function returnAllProjects() {
  let projects = [];
  for (let key in projectObj) {
    if (!projects.includes(key)) {
      projects.push(key);
    }
  }
  return projects;
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
  let current = returnActiveProjects()[0];

  projectObj[current]['todo'].push({
    name: name,
    dueDate: date,
    complete: false,
    project: current,
  });

  saveToStorage();
  renderMain();
}

function deleteTodo(e) {
  const target = e.target.closest('.todo-item-container').querySelector('li').innerHTML;

  const active = returnActiveProjects();
  let index; 
  // need to find a better way to do this

  for (let i = 0; i < projectObj[active]['todo'].length; i++) {
    if (projectObj[active]['todo'][i]['name'] === target) {
      index = i;
    }
  } 

  projectObj[active]['todo'].splice(index, 1);

  saveToStorage();
  renderMain();
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
  let oldTodo = e.target.closest('.todo-item-container').querySelector('li').innerHTML;
  let currentProj = returnActiveProjects();

  let index; 

  for (let i = 0; i < projectObj[currentProj]['todo'].length; i++) {
    if (projectObj[currentProj]['todo'][i]['name'] === oldTodo) {
      index = i;
    }
  } 

  let newTodo = e.target.closest('.edit-view').querySelector('.todo-text-input').value;
  let newDate = e.target.closest('.edit-view').querySelector('.todo-date-input').value;

  if (newTodo.length === 0) {
    alert('Please enter a valid task!');
  } else {
    projectObj[currentProj]['todo'][index]['name'] = newTodo;
    projectObj[currentProj]['todo'][index]['dueDate'] = newDate;
    
    saveToStorage();
    renderMain();
  }
}

function toggleCompletion(e) {
  const target = e.target.closest('.todo-item-container').querySelector('li').innerHTML;

  const active = returnActiveProjects();
  let index; 

  for (let i = 0; i < projectObj[active]['todo'].length; i++) {
    if (projectObj[active]['todo'][i]['name'] === target) {
      index = i;
    }
  }

  if (projectObj[active]['todo'][index]['complete']) {
    projectObj[active]['todo'][index]['complete'] = false;
  } else {
    projectObj[active]['todo'][index]['complete'] = true;
  }

  saveToStorage();
  renderMain();
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
  deleteTodo,
  toggleEditView,
  submitTodoEdit,
  hideTodoInputs,
  toggleCompletion,
  showAllTodos
};
        