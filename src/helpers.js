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
}

function switchProject(e) {
  clearActiveProject();

  const target = e.target.parentElement.firstChild.innerHTML;
  projectObj[target]['active'] = true;
  
  render();
}

function deleteProject(e) {
  const target = e.target.parentElement.firstChild.innerHTML;
  delete projectObj[target];

  const isActive = returnActiveProject();
  if (Object.keys(projectObj).length > 0 && (!isActive)) {
    setActiveProject();
  }

  render();
}

function deleteTodo(e) {
  const target = e.target.closest('.todo-item-container').querySelector('li').innerHTML;

  const active = returnActiveProject();
  const index = projectObj[active]['todo'].indexOf(target);

  projectObj[active]['todo'].splice(index, 1);

  render();
}

function hideTodoInputs() {
  const normal = document.querySelectorAll('.normal-view');
  normal.forEach(element => element.style.display = 'flex');

  const edit = document.querySelectorAll('.edit-view');
  edit.forEach(element => element.style.display = 'none');
}

function editTodo(e) {
  hideTodoInputs();

  const target = e.target.closest('.normal-view');
  target.style.display = 'none';

  const input = e.target.closest('.todo-item-container').querySelector('.edit-view')
  input.style.display = 'flex';
}

export { 
  returnActiveProject, 
  clearActiveProject, 
  setActiveProject, 
  switchProject, 
  deleteProject, 
  deleteTodo,
  editTodo 
};
          