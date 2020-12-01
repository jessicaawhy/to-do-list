import { projectObj } from './index';
import { render } from './render';

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

function setActiveProject() {
  let target = Object.keys(projectObj)[0];
  projectObj[target]['active'] = true;

  saveToStorage();
}

function switchProject(e) {
  clearActiveProject();

  const target = e.target.parentElement.firstChild.innerHTML;
  projectObj[target]['active'] = true;

  saveToStorage();
  render();
}

function deleteProject(e) {
  const target = e.target.parentElement.firstChild.innerHTML;
  delete projectObj[target];

  const isActive = returnActiveProject();
  if (Object.keys(projectObj).length > 0 && (!isActive)) {
    setActiveProject();
  }

  saveToStorage();
  render();
}

function deleteTodo(e) {
  const target = e.target.closest('.todo-item-container').querySelector('li').innerHTML;

  const active = returnActiveProject();
  const index = projectObj[active]['todo'].indexOf(target);

  projectObj[active]['todo'].splice(index, 1);

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

  const input = e.target.closest('.todo-item-container').querySelector('.edit-view')
  input.style.display = 'flex';
}

function submitTodoEdit(e) {
  let oldTodo = e.target.closest('.todo-item-container').querySelector('li').innerHTML;
  let currentProj = returnActiveProject();
  let index = projectObj[currentProj]['todo'].indexOf(oldTodo)

  let newTodo = e.target.closest('.edit-view').querySelector('input').value;

  projectObj[currentProj]['todo'][index] = newTodo;
  saveToStorage();
  render();
}

function saveToStorage() {
  localStorage.setItem('projects', JSON.stringify(projectObj));
}

export { 
  returnActiveProject, 
  clearActiveProject, 
  setActiveProject, 
  switchProject, 
  deleteProject, 
  deleteTodo,
  toggleEditView,
  hideTodoInputs,
  submitTodoEdit,
  saveToStorage
};
          